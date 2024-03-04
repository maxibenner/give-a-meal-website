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

// Placeholder for authentication logic
function isAuthenticated(request: NextRequest): boolean {
  console.log(request.headers);
  // Implement authentication logic here
  // Example: return request.headers.get("Authorization")?.startsWith("Bearer ");
  return true; // Assuming all requests are authenticated for this example
}

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

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

  // Authentication: Check if url is email signin link
  if (pathname.includes("/donors/profile")) {
  }

  // If the target pathname differs from the current, redirect to the target
  if (pathname !== request.nextUrl.pathname) {
    return NextResponse.redirect(new URL(pathname, request.url));
  }

  // Proceed with the original request if no redirection is needed
  return NextResponse.next();
}
