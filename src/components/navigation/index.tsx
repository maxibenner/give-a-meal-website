import { getDictionary } from "@/get-dictionary-server";
import { Locale } from "@/i18n-config";
import localeLink from "@/utils/localeLink";
import Link from "next/link";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";
import styles from "./styles.module.css";

export default async function Navigation({ lang }: { lang: Locale }) {

  const { elements: { nav } } = await getDictionary(lang)

  return <nav className={styles.container}>
    <Link className={styles.wordmark} href={localeLink("/", lang)}>Give a Meal</Link>

    <div className={styles.menuWrapper}>
      <LocaleSwitcher className={styles.buttonBox} />
      <NavigationDesktop lang={lang} nav={nav} className={styles.desktop} />
      <NavigationMobile lang={lang} nav={nav} className={styles.mobile} />
    </div>
  </nav>;
}

