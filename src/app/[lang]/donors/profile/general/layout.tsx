import s from './styles.module.css';
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary-server";
import localeLink from "@/utils/localeLink";
import HeaderLinkMobile from "@/components/headerLinkMobile";
import BackArrow from "@/public/assets/icons/back-arrow.svg"

export default async function Layout({ children, params: { lang } }: { children: React.ReactNode, params: { lang: Locale } }) {

    const { pages: { donors: { layout: { menu, header } } } } = await getDictionary(lang)

    return (
        <>
            <HeaderLinkMobile icon={BackArrow} href={localeLink("/donors/profile", lang)} className={s.backLinkMobile}>Back</HeaderLinkMobile>
            <div>{children}</div>
        </>
    )
} 