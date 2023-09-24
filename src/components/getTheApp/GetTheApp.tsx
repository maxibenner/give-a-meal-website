import localeLink from "@/utils/localeLink"
import Button from "../button"
import styles from "./styles.module.css"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary-server"

export default async function GetTheApp({ lang }: { lang: Locale }) {

    const dictionary = await getDictionary(lang)

    return (
        <div className={styles.container}>
            <Button href={localeLink("/get-the-app", lang)}>{dictionary.elements.nav.apps}</Button >
        </div>
    )
}