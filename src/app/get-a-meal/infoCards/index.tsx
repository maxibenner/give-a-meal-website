'use client'

import InfoCard from "@/components/infoCard"
import styles from "./styles.module.css"
import React from "react"

export default function InfoCards({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title="Get the App" body="Need a meal? Just download the Give a Meal app, available for both Android and iOS." number="1" />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title="Find a Meal" body="Check out the available free meals nearby on our app and reserve one." number="2" />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title="Enjoy Your Meal" body="Ready to eat? Show the QR code from your app at the restaurant and enjoy your meal. It's that simple." number="3" />
        </div>
    )
}