import HeaderDonorProfile from "@/components/headerDonorProfile";
import s from './layout.module.css';
import Menu from "@/components/menu";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary-server";
import localeLink from "@/utils/localeLink";

export default async function Layout({ children, params: { lang } }: { children: React.ReactNode, params: { lang: Locale } }) {

    const { pages: { donors: { layout: { menu, header } } } } = await getDictionary(lang)

    return (
        <div className={s.layoutWrapper}>
            <div className={s.headerWrapper}>
                <HeaderDonorProfile title={header.title} />
            </div>
            <hr />
            <div className={s.contentWrapper}>
                <Menu menuItems={[
                    { label: menu.profile, link: localeLink("/donors/profile", lang) },
                    { label: menu.donations, link: localeLink('/donors/profile/donations', lang) },
                    { label: menu.notifications, link: localeLink('/donors/profile/notifications', lang) },
                    { label: menu.billing, link: localeLink("/donors/profile/billing", lang) },
                    { label: menu.logout, link: "/api/auth/logout" }

                ]} />
                <div className={s.pageWrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
}