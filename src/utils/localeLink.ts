import { Locale } from "@/i18n-config";

export default function localeLink(href: string, locale: Locale) {
    return `/${locale}${href}`
}