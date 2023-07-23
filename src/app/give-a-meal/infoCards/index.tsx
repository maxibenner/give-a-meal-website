'use client'

import InfoCard from "@/components/infoCard"
import styles from "./styles.module.css"
import React from "react"

export default function InfoCards({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title="Visit a Partner Restaurant" body="Ready to make a difference? Visit one of our partner restaurants and choose the meal you'd like to share." number="1" />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title="Donate a Meal" body="When placing your order, ask the restaurant to add it to Give a Meal." number="2" />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title="We Deliver Your Kindness" body="Your donated meal is listed on our app, ready to be claimed and savored by someone facing food insecurity." number="3" />
        </div>
    )
}