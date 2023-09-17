'use client'

import InfoCard from "@/components/infoCard"
import styles from "./styles.module.css"
import React from "react"

export default function InfoCards({ items, className }: { items: { title: string, sub: string }[], className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            {items.map((item, index) => <InfoCard key={item.title} onPointerEnter={() => setActiveIndex(index)} active={activeIndex === index} className={styles.cardOne} title={item.title} sub={item.sub} number={index + 1} />)}
        </div>
    )
}