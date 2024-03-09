import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const securedPaths = ["/donors/profile"];
const pathsWithoutLocale = [
  "/_next/",
  "/api/",
  "/apple-app-site-association",
  "/favicon.ico",
  "/sitemap.xml",
  "/robots.txt",
];

/**
 * Transforms the request object by adding locale and auth data
 * @param request
 * @returns request
 */
export async function middleware(request: NextRequest) {
  let currentPathname = request.nextUrl.pathname;

  // Locale: Determine pathname based on locale
  currentPathname = handlePathnameLocale(request, pathsWithoutLocale);

  // Authentication:
  // 1) Return pathname unchanged if no autnetication is needed
  // 2) Return data with user info if authenticated
  // 3) Return pathname to login url if not authenticated
  const result = await handleAuthentication(
    request,
    currentPathname,
    securedPaths
  );

  if (result.data) {
    currentPathname = result.pathname;
  }

  // Create new URL
  const url = new URL(currentPathname, request.nextUrl.origin);

  // Add params if data is available
  if (result.data) {
    url.searchParams.append("email", result.data.email);
    url.searchParams.append("uid", result.data.uid);
  }

  // Return the modified url and query parameters
  if (currentPathname === request.nextUrl.pathname) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(url);
  }
}

/****************************************************/
/******************** FUNCTIONS *********************/
/****************************************************/

type AuthResult = {
  pathname: string;
  data: null | { uid: string; email: string };
};

// Adjusted routing logic to only determine the target pathname
function handlePathnameLocale(
  request: NextRequest,
  excludedPaths: string[]
): string {
  let pathname = request.nextUrl.pathname;

  // Localization: Update pathname with proper locale if necessary
  const shouldExclude = excludedPaths.some((path) => pathname.startsWith(path));
  if (shouldExclude) {
    return pathname;
  }

  // Check if pathname is missing locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    pathname = `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
  }

  return pathname; // Return the current pathname if no modifications are needed
}

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

/**
 * Verifies a firebase ID token
 * @param request
 * @param pathname The desired pathname (if different from the request)
 * @param protectedPaths The paths that require authentication
 * @returns The user's email and uid or null
 */
async function handleAuthentication(
  request: NextRequest,
  pathname: string,
  protectedPaths: string[]
): Promise<AuthResult> {
  let authResulst: AuthResult = {
    pathname: pathname,
    data: null,
  };

  // Check if path is protected
  let pathIsProtected = false;
  for (const path of protectedPaths) {
    if (authResulst.pathname.includes(path)) {
      pathIsProtected = true;
    }
  }

  if (pathIsProtected) {
    // Verify ID token
    const response = await fetch(
      `${request.nextUrl.origin}/api/auth/verify-id-token`,
      {
        headers: { cookie: request.headers.get("cookie") || "" },
      }
    );

    // Return user data
    if (response.ok) {
      const { email, uid } = await response.json();
      authResulst.data = { email, uid };
    }
  }

  return authResulst;
}
