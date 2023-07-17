'use client'

import Badge from "@/components/Badge"
import styles from "./styles.module.css"
import ExpandableText from "@/components/ExpandableText"
import React from "react"

export default function FAQ() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <div className="grid" style={{ justifyContent: "end" }}>
            <Badge className={styles.badge}>Frequently Asked Questions</Badge>
            <div className={styles.faqContainer}>
                <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="Is Give a Meal for me?" body="Yes! There are no requirements or documentation required to receive a meal. Food for those in need, no questions asked." />
                <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="How often can I receive meals?" body="There is no limit to how often you can receive meals. However, you can not reserve more than 3 meal at a time." />
                <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="What do I need to become a partner?" body="TBD" />
                <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Do people need a phone to use give a meal?" body="TBD" />
                <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="Why give a meal?" body="TBD" />
                <ExpandableText onClick={() => setActiveIndex(6)} active={activeIndex === 6} title="Who runs give a meal?" body="TBD" />
            </div>
        </div >
    )
}