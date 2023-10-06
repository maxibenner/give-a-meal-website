import Button from "../button";
import styles from "./styles.module.css";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary-server"
import { Locale } from "@/i18n-config";
import LinkWithHover from "../linkWithHover";
import localeLink from "@/utils/localeLink";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";

export default async function Navigation({ lang }: { lang: Locale }) {

  const { elements: { nav } } = await getDictionary(lang)

  return <nav className={styles.container}>
    <Link className={styles.wordmark} href={localeLink("/", lang)}>Give a Meal</Link>

    <div className={styles.menuWrapperMobile}>
      <LocaleSwitcher className={styles.buttonBox} />
      <a href="#drawer" className={styles.navButtonOpen}>
        <p>&#9776;</p>
      </a>
    </div>

    <div className={styles.menuContainerDesktop}>
      <LocaleSwitcher className={styles.buttonBox} />
      <div className={styles.contentBox}>
        <div className={styles.linkContainer}>
          <LinkWithHover href={localeLink("/get-a-meal", lang)} className="body">{nav.pickUp}</LinkWithHover>
          <LinkWithHover href={localeLink("/give-a-meal", lang)} className="body">{nav.donate}</LinkWithHover>
          <LinkWithHover href={localeLink("/restaurants", lang)} className="body">{nav.partners}</LinkWithHover>
        </div>
        <Button href={localeLink("/get-the-app", lang)}>{nav.apps}</Button >
      </div>
    </div>

    <div className={styles.drawer} id="drawer">
      <a href="#" className={styles.navButtonClose}>
        <p>&#10005;</p>
      </a>
      <div className={styles.menuContainerMobile}>
        <LinkWithHover href={localeLink("/get-a-meal", lang)} className="body">{nav.pickUp}</LinkWithHover>
        <LinkWithHover href={localeLink("/give-a-meal", lang)} className="body">{nav.donate}</LinkWithHover>
        <LinkWithHover href={localeLink("/restaurants", lang)} className="body">{nav.partners}</LinkWithHover>
        <Button href={localeLink("/get-the-app", lang)}>{nav.apps}</Button >
      </div>
    </div>
  </nav>;
}
