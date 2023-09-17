'use client'

import InfoCard from "@/components/infoCard"
import styles from "./styles.module.css"
import Badge from "@/components/badge"
import React, { useEffect, useMemo } from "react"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary-client"

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
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title={dictionary.pages.home.howTo.cards[0].title} body={dictionary.pages.home.howTo.cards[0].sub} number="1" />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title={dictionary.pages.home.howTo.cards[1].title} body={dictionary.pages.home.howTo.cards[1].sub} number="2" />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title={dictionary.pages.home.howTo.cards[2].title} body={dictionary.pages.home.howTo.cards[2].sub} number="3" />
        </div>
    )
}