import { NextRequest, NextResponse } from "next/server";

var langParser = require('accept-language-parser');

const defaultLocale = "en";
const locales = ["en", "es"];

const findBestMatchingLocale = (acceptLangHeader: string) => {
    const parsedLangs = langParser.parse(acceptLangHeader);

    for (let i = 0; i < parsedLangs.length; i++) {
        const parsedLang = parsedLangs[i];
        if (locales.includes(parsedLang.code)) {
            return parsedLang.code;
        }
    }
    return defaultLocale;
};

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith(`/${defaultLocale}`)) {
        return NextResponse.redirect(
            new URL(
                pathname.replace(`/${defaultLocale}`, pathname.startsWith("/") ? "/" : ""),
                request.url
            )
        );
    }

    const pathnameIsMissingValidLocale = locales.every((locale) => {
        return !pathname.startsWith(`/${locale}`);
    });

    if (pathnameIsMissingValidLocale) {
        const matchedLocale = findBestMatchingLocale(
            request.headers.get("Accept-Language") || defaultLocale
        );

        if (matchedLocale !== defaultLocale) {
            return NextResponse.redirect(
                new URL(`/${matchedLocale}${pathname}`, request.url)
            );
        } else {
            return NextResponse.rewrite(
                new URL(`/${defaultLocale}${pathname}`, request.url)
            );
        }
    }
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
    ],
};
