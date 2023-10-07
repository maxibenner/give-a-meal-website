import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import styles from "./styles.module.css";
import localeLink from "@/utils/localeLink";
import Button from "../button";

export default async function NavigationDesktop({ lang, nav, className }: { lang: Locale, nav: { pickUp: string, donate: string, partners: string, apps: string }, className?: string }) {
    return <div className={`${styles.menuContainerDesktop} ${className}`}>
        {/* <LocaleSwitcher className={styles.buttonBox} /> */}
        <div className={styles.contentBox}>
            <div className={styles.linkContainer}>
                <LinkWithHover href={localeLink("/get-a-meal", lang)} className="body">{nav.pickUp}</LinkWithHover>
                <LinkWithHover href={localeLink("/give-a-meal", lang)} className="body">{nav.donate}</LinkWithHover>
                <LinkWithHover href={localeLink("/restaurants", lang)} className="body">{nav.partners}</LinkWithHover>
            </div>
            <Button href={localeLink("/get-the-app", lang)}>{nav.apps}</Button >
        </div>
    </div>
}