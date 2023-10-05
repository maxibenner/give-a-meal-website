import { i18n, Locale } from '@/i18n-config'


export default function sitemap() {
    const host = "https://www.give-a-meal.org"
    const locales = i18n.locales
    const defaultLocale = i18n.defaultLocale
    const paths = [
        "",
        "/give-a-meal",
        "/get-a-meal",
        "/restaurants",
        "/get-the-app",
        "/terms-of-use",
        "/privacy-notice",
        "/cookie-policy",
    ]

    const urls: string[] = []
    paths.forEach(path => {
        urls.push(createURLObject(host, path, locales, defaultLocale))
    })

    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls.join("")}
    </urlset>
    `
}

function createURLObject(host: string, path: string, locales: readonly ["en", "es"], defaultLocale: Locale) {
    const loc = `<loc>${host}/${defaultLocale}${path}</loc>`

    const altLinks: string[] = []
    locales.forEach(locale => {
        altLinks.push(`
            <xhtml:link 
               rel="alternate"
               hreflang="${locale}"
               href="${host}/${locale}${path}"/>`
        )

    })

    return `
        <url>
          ${loc}${altLinks.join("")}
          </url>`
}