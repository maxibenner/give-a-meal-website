'use client'

import styles from "./styles.module.css"
import React from "react"
import ExpandableText from "@/components/expandableText"

export default function FAQ({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="Is Give a Meal for me?" body="Yes! There are no requirements or documentation required to receive a meal. Food for those in need, no questions asked." />
            <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="How often can I receive meals?" body="There is no limit to how often you can receive meals. However, reservations are limited to 3 meals at a time." />
            <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="What do I need to become a partner?" body="Download the Give a Meal Business app, register your business, and you are ready to go!" />
            <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Do people need a phone to use give a meal?" body="Yes, people do currently need a phone to get meals. However, this may change in the future." />
            <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="Why give a meal?" body="100% of each Give a Meal donation goes to people in need. Local donations help strengthen the community." />
            <ExpandableText onClick={() => setActiveIndex(6)} active={activeIndex === 6} title="Who runs give a meal?" body="Give a Meal is run by Fotura, a digital product studio." />
        </div>
    )
}