import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/**
 * Get the locale from the request headers
 * @param {NextRequest} request
 * @returns {string | undefined} The locale or undefined if not found
 */
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = Array.from(i18n.locales);
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

// Adjusted routing logic to only determine the target pathname
function determinePathname(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`; // Return modified pathname with locale
  }

  return pathname; // Return the current pathname if no modifications are needed
}

/**
 * Verifies a firebase ID token
 * @param request
 * @returns The user's email and uid or null
 */
async function authenticate(
  request: NextRequest
): Promise<null | { uid: string; email: string }> {
  try {
    const response = await fetch(
      `${request.nextUrl.origin}/api/auth/verify-id-token`,
      {
        headers: { cookie: request.headers.get("cookie") || "" },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Authentication verification failed");
      return null;
    }
  } catch (error) {
    console.error("Error verifying authentication:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  let userInfo = null;

  // Paths to exclude from routing logic
  const excludePaths = [
    "/_next/",
    "/api/",
    "/apple-app-site-association",
    "/favicon.ico",
    "/sitemap.xml",
    "/robots.txt",
  ];

  // Localization: Update pathname with proper locale if necessary
  const shouldExclude = excludePaths.some((path) => pathname.startsWith(path));
  if (!shouldExclude) {
    pathname = determinePathname(request);
  }

  // Authentication: Prevent access to donor profile page if not authenticated
  if (pathname.includes("/donors/profile")) {
    userInfo = await authenticate(request);

    if (userInfo === null) {
      return NextResponse.redirect(
        new URL(`${getLocale(request)}/donors/login`, request.nextUrl.origin)
      );
    }
  }

  // Construct new url / or keep existing
  let url = new URL(pathname, request.url);

  // Add user info if authenticated
  if (userInfo !== null) {
    url.searchParams.append("uid", userInfo.uid);
    url.searchParams.append("email", userInfo.email);
  }

  return NextResponse.rewrite(url);
}
