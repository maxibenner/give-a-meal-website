import Button from "@/components/button"
import styles from "./styles.module.css"
import Image from "next/image"
import Tomato from "@/public/assets/tomato.svg"
import Cucumber from "@/public/assets/cucumber.svg"
import Onion from "@/public/assets/onion.svg"
import { getDictionary } from "@/get-dictionary-server"
import { Locale } from "@/i18n-config"


export default async function Hero({ lang }: { lang: Locale }) {

    const { pages: { home: { hero: { title, sub, cta } } } } = await getDictionary(lang)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.maxWidth}>
                    <div className={styles.vegContainer}>
                        <Image loading="eager" src={Tomato} alt="tomato" width={332} height={484} />
                        <Image loading="eager" src={Cucumber} alt="cucumber" width={377} height={430} />
                        <Image loading="eager" src={Onion} alt="onion" width={285} height={420} />
                    </div>

                    <div className={styles.textContainer}>
                        <h1>{title}</h1>
                        <p className="body_l">{sub}</p>
                        <Button href={`${lang}/get-a-meal`}>{cta}</Button>
                    </div>
                </div>

            </div>

            <div className={styles.spacer} />
        </>
    )
}
