import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Paths to exclude
  const excludePaths = [
    "/_next/",
    "/api/",
    "/apple-app-site-association",
    "/favicon.ico",
    "/sitemap.xml",
    "/robots.txt",
  ];

  // Check if the current path should be excluded
  const shouldExclude = excludePaths.some((path) => pathname.startsWith(path));
  if (shouldExclude) {
    return NextResponse.next(); // Proceed without redirection
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  let response;

  // Redirect if there is no locale, using the browser preference
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request) || i18n.defaultLocale; // Fallback to default locale if undefined

    // Construct the new URL with the preferred locale
    const newUrl = new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    );

    response = NextResponse.redirect(newUrl);
  } else {
    // If a locale is present, or the path is not excluded, rewrite the URL to include the pathname as a query parameter
    const urlWithQuery = new URL(request.url);
    urlWithQuery.searchParams.set("pathname", pathname);
    response = NextResponse.rewrite(urlWithQuery);
  }

  return response;
}
