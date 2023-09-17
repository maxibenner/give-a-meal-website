import { Locale } from "@/i18n-config"
import styles from "./styles.module.css"
import Badge from "@/components/badge"
import { getDictionary } from "@/get-dictionary-server"

export default async function Why({ lang }: { lang: Locale }) {

    const d = await getDictionary(lang)

    return (
        <div className="grid">
            <div className={styles.textContainer}>
                <Badge>{d.pages.home.why.title}</Badge>
                <h2>{d.pages.home.why.sub}</h2>
            </div>
        </div>
    )
}