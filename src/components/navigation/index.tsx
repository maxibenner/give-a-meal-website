import { getDictionary } from "@/get-dictionary-server";
import { Locale } from "@/i18n-config";
import localeLink from "@/utils/localeLink";
import Link from "next/link";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";
import s from "./styles.module.css";
import Logo from "@/public/assets/icons/logo.svg"
import Image from "next/image";
import Button from "../button";

export default async function Navigation({ lang }: { lang: Locale }) {

  const { elements: { nav } } = await getDictionary(lang)

  return <nav className={s.container}>
    <Link className={s.wordmark} href={localeLink("/", lang)}>
      <Image src={Logo} alt="Give a Meal Logo" width={167} height={29} />
    </Link>

    <div className={s.menuWrapper}>
      <LocaleSwitcher className={`${s.buttonBox} ${s.desktop}`} />
      <Link href={localeLink("/give-a-meal", lang)} className={s.mobile}>
        <Button large className={s.donateButton}>{nav.donate}</Button>
      </Link>
      <NavigationDesktop lang={lang} nav={nav} className={s.desktop} />
      <NavigationMobile lang={lang} nav={nav} className={s.mobile} />
    </div>
  </nav>;
}

