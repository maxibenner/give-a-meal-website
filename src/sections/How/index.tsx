'use client'

import InfoCard from "@/components/InfoCard"
import styles from "./styles.module.css"
import Badge from "@/components/Badge"
import React, { useEffect } from "react"

export default function How() {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} grid`}>
            <Badge className={styles.badge}>How It Works</Badge>
            <InfoCard onPointerEnter={() => setActiveIndex(0)} active={activeIndex === 0} className={styles.cardOne} title="Restaurants Sign Up" body="Restaurants interested in being part of our network enroll as a partner." number="1" />
            <InfoCard onPointerEnter={() => setActiveIndex(1)} active={activeIndex === 1} className={styles.cardTwo} title="Customers Donate Meals" body="When you dine at a partner restaurant and order something for us, we add it to our meal list." number="2" />
            <InfoCard onPointerEnter={() => setActiveIndex(2)} active={activeIndex === 2} className={styles.cardThree} title="Anyone Picks Them Up" body="Pick a meal and it will be prepared and set aside for you, free of charge." number="3" />
        </div>
    )
}