"use client";

import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";
import styles from "./styles.module.css";
import localeLink from "@/utils/localeLink";
import Button from "../button";
import NavItem from "../navItem";
import { usePathname } from "next/navigation";

export default async function NavigationDesktop({ lang, nav, className }: { lang: Locale, nav: { pickUp: string, donate: string, partners: string, apps: string, donorProfile: string }, className?: string }) {

    const pathname = usePathname();

    return <div className={`${styles.menuContainerDesktop} ${className}`}>
        <div className={styles.contentBox}>
            <div className={styles.linkContainer}>
                <LinkWithHover active={pathname.includes("/get-a-meal")} href={localeLink("/get-a-meal", lang)} className="body">{nav.pickUp}</LinkWithHover>
                <NavItem active={pathname.includes("/give-a-meal") || pathname.includes("/donors/")} label={nav.donate}>
                    <LinkWithHover active={pathname.includes("/give-a-meal")} href={localeLink("/give-a-meal", lang)} className="body">{nav.donate}</LinkWithHover>
                    <LinkWithHover active={pathname.includes("/donors/")} href={localeLink("/donors/profile", lang)} className="body">{nav.donorProfile}</LinkWithHover>
                </NavItem>
                <LinkWithHover active={pathname.includes("/restaurants")} href={localeLink("/restaurants", lang)} className="body">{nav.partners}</LinkWithHover>
            </div>
            <Button href={localeLink("/app", lang)}>{nav.apps}</Button >
        </div>
    </div>
}