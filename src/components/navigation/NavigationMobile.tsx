"use client"

import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";
import styles from "./styles.module.css";
import localeLink from "@/utils/localeLink";
import Button from "../button";
import React from "react";

export default function NavigationMobile({ lang, nav, className }: { lang: Locale, nav: { pickUp: string, donate: string, partners: string, apps: string }, className?: string }) {
    const [active, setActive] = React.useState(false)

    return (
        <div className={className}>
            <button onClick={() => setActive(prev => !prev)} className={styles.navButton} style={{ boxShadow: active ? "none" : undefined }}>
                {active ? <p className={styles.closeButton}>&#10005;</p> : <p >&#9776;</p>}
            </button>
            <div className={`${styles.drawer} ${active && styles.drawerActive}`}>
                <div className={styles.menuContainerMobile}>
                    <LinkWithHover onClick={() => setActive(false)} href={localeLink("/get-a-meal", lang)} className="body">{nav.pickUp}</LinkWithHover>
                    <LinkWithHover onClick={() => setActive(false)} href={localeLink("/give-a-meal", lang)} className="body">{nav.donate}</LinkWithHover>
                    <LinkWithHover onClick={() => setActive(false)} href={localeLink("/restaurants", lang)} className="body">{nav.partners}</LinkWithHover>
                    <Button onClick={() => setActive(false)} href={localeLink("/get-the-app", lang)}>{nav.apps}</Button >
                </div>
            </div>
        </div>
    )
}