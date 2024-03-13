import MenuMobile from "@/components/menuMobile";
import { Locale } from "@/i18n-config";
import GeneralPage from "./general/page";
import s from "./styles.module.css";

export default async function Page({
    searchParams,
    params
}: {
    searchParams?: { [key: string]: string | undefined },
    params: { lang: Locale }
}) {

    return (
        <>
            {/* Desktop only */}
            <div className={s.desktopOnly}>
                <GeneralPage params={params} searchParams={searchParams} />
            </div>
            {/* Mobile only */}
            <div className={s.mobileOnly}>
                <MenuMobile menuItems={[
                    { label: "General", link: "/donors/profile/general" },
                    { label: "Donations", link: "/donors/profile/donations" },
                    { label: "Logout", link: `/api/auth/logout?lang=${params.lang}` }
                ]} />
            </div>
        </>
    )
}