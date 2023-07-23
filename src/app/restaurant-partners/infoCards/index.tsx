'use client'

import InfoCard from "@/components/infoCard"
import styles from "./styles.module.css"
import React from "react"

export default function InfoCards({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title="Register Your Restaurant" body="Ready to join our mission? Download the Give a Meal Business app and register your restaurant to get started." number="1" />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title="Accept Meal Donations" body="When customers donate a meal, add it to the Give a Meal list using the Give a Meal Business app." number="2" />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title="Serve Donated Meals" body="When someone arrives with their Give a Meal QR code, prepare the meal and hand it over. You've just made someone's day a little brighter!" number="3" />
        </div>
    )
}