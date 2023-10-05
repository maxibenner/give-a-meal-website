'use client'

import Badge from "@/components/badge"
import InfoCard from "@/components/infoCard"
import { getDictionary } from "@/get-dictionary-client"
import { Locale } from "@/i18n-config"
import React, { useEffect } from "react"
import styles from "./styles.module.css"

export default function How({ lang }: { lang: Locale }) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [dictionary, setDictionary] = React.useState<any>(null)
    useEffect(() => {
        getDictionary(lang).then((res) => setDictionary(res))
    }, [])

    if (!dictionary) return null
    return (
        <div className={`${styles.container} grid`}>
            <Badge className={styles.badge}>{dictionary.pages.home.howTo.title}</Badge>
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title={dictionary.pages.home.howTo.cards[0].title} sub={dictionary.pages.home.howTo.cards[0].sub} number={1} />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title={dictionary.pages.home.howTo.cards[1].title} sub={dictionary.pages.home.howTo.cards[1].sub} number={2} />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title={dictionary.pages.home.howTo.cards[2].title} sub={dictionary.pages.home.howTo.cards[2].sub} number={4} />
        </div>
    )
}