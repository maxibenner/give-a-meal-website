"use client"

import Button from "../button";
import styles from "./styles.module.css";
import Link from "next/link";
import React, { useEffect } from "react"
import Image from "next/image"
import SpainFlag from "@/public/assets/images/flagES.svg"
import USFlag from "@/public/assets/images/flagUS.svg"
import { getDictionary } from "@/get-dictionary-client"
import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";

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
    // Replace lang path
    const newLang = window.location.pathname.includes("en") ? "es" : "en"
    window.location.pathname = window.location.pathname.replace(lang, newLang)
  }

  if (!dictionary) return null
  return <nav className={styles.container}>
    <Link className={styles.wordmark} href={`/${lang}`}>Give a Meal</Link>

    <div className={styles.menuWrapperMobile}>
      <div className={styles.buttonBox} onClick={toggleLang}>
        <Image height={18} src={lang === "en" ? SpainFlag : USFlag} alt={lang === "en" ? "us flag" : "spain flag"} />
      </div>
      <button onClick={() => setActive((prev) => !prev)} className={`${styles.navButton} ${active && styles.navButtonActive}`}><p>&#9776;</p></button>
    </div>


    <div className={styles.menuContainerDesktop}>
      <div className={styles.buttonBox} onClick={toggleLang}>
        <Image height={18} src={lang === "en" ? SpainFlag : USFlag} alt={lang === "en" ? "us flag" : "spain flag"} />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.linkContainer}>
          <LinkWithHover href={`/${lang}/get-a-meal`} className="body">{dictionary.elements.nav.pickUp}</LinkWithHover>
          <LinkWithHover href={`/${lang}/give-a-meal`} className="body">{dictionary.elements.nav.donate}</LinkWithHover>
          <LinkWithHover href={`/${lang}/restaurants`} className="body">{dictionary.elements.nav.partners}</LinkWithHover>
        </div>
        <Button href={`/${lang}/get-the-app`}>{dictionary.elements.nav.apps}</Button >
      </div>
    </div>

    <div className={`${styles.menuContainerMobile} ${active && styles.menuContainerMobileActive}`}>
      <LinkWithHover onClick={closeMenu} href={`/${lang}/get-a-meal`} className="body">{dictionary.elements.nav.pickUp}</LinkWithHover>
      <LinkWithHover onClick={closeMenu} href={`/${lang}/give-a-meal`} className="body">{dictionary.elements.nav.donate}</LinkWithHover>
      <LinkWithHover onClick={closeMenu} href={`/${lang}/restaurants`} className="body">{dictionary.elements.nav.partners}</LinkWithHover>
      <Button onClick={closeMenu} href={`/${lang}/get-the-app`}>{dictionary.elements.nav.apps}</Button >
    </div>


  </nav>;
}
