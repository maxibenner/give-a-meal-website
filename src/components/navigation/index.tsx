"use client"

import Button from "../button";
import styles from "./styles.module.css";
import Link from "next/link";
import React, { useEffect } from "react"
import Image from "next/image"
import { getDictionary } from "@/get-dictionary-client"
import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";
import localeLink from "@/utils/localeLink";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";

export default function Navigation({ lang }: { lang: Locale }) {
  const [active, setActive] = React.useState(false)
  const [dictionary, setDictionary] = React.useState<any>(null)

  useEffect(() => { init() }, [])

  async function init() {
    const d = await getDictionary(lang)
    setDictionary(d)
  }

  function closeMenu() {
    setActive(false)
  }

  function toggleLang() {
    const currentPath = window.location.pathname;
    const newLang = currentPath.includes("/es") ? "en" : "es";

    let newPath;
    if (newLang === "en") {
      // Remove the existing language prefix
      newPath = currentPath.replace("/es", "/en");
    } else {
      // Prepend the new language to the current path
      newPath = currentPath.replace("/en", "/es");
    }

    window.location.pathname = newPath;
  }


  if (!dictionary) return null
  return <nav className={styles.container}>
    <Link className={styles.wordmark} href={localeLink("/", lang)}>Give a Meal</Link>

    <div className={styles.menuWrapperMobile}>
      <LocaleSwitcher className={styles.buttonBox} />
      <button onClick={() => setActive((prev) => !prev)} className={`${styles.navButton} ${active && styles.navButtonActive}`}><p>&#9776;</p></button>
    </div>


    <div className={styles.menuContainerDesktop}>
      <LocaleSwitcher className={styles.buttonBox} />
      <div className={styles.contentBox}>
        <div className={styles.linkContainer}>
          <LinkWithHover href={localeLink("/get-a-meal", lang)} className="body">{dictionary.elements.nav.pickUp}</LinkWithHover>
          <LinkWithHover href={localeLink("/give-a-meal", lang)} className="body">{dictionary.elements.nav.donate}</LinkWithHover>
          <LinkWithHover href={localeLink("/restaurants", lang)} className="body">{dictionary.elements.nav.partners}</LinkWithHover>
        </div>
        <Button href={localeLink("/get-the-app", lang)}>{dictionary.elements.nav.apps}</Button >
      </div>
    </div>

    <div className={`${styles.menuContainerMobile} ${active && styles.menuContainerMobileActive}`}>
      <LinkWithHover onClick={closeMenu} href={localeLink("/get-a-meal", lang)} className="body">{dictionary.elements.nav.pickUp}</LinkWithHover>
      <LinkWithHover onClick={closeMenu} href={localeLink("/give-a-meal", lang)} className="body">{dictionary.elements.nav.donate}</LinkWithHover>
      <LinkWithHover onClick={closeMenu} href={localeLink("/restaurants", lang)} className="body">{dictionary.elements.nav.partners}</LinkWithHover>
      <Button onClick={closeMenu} href={localeLink("/get-the-app", lang)}>{dictionary.elements.nav.apps}</Button >
    </div>


  </nav>;
}
