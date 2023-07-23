'use client'

import styles from "./styles.module.css"
import React from "react"
import ExpandableText from "@/components/expandableText"

export default function FAQ({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="Is there a cost to partner with Give a Meal?" body="No, there's no charge to become a Give a Meal partner. We believe in working together to benefit the community." />
            <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="What type of restaurants can join Give a Meal?" body="We welcome all types of restaurants! From fine dining to fast food, as long as you serve food, you can help serve the community." />
            <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="How will my restaurant be promoted?" body="We welcome all types of restaurants! From fine dining to fast food, as long as you serve food, you can help serve the community." />
            <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Can customers donate any meal?" body="That is the idea! However, in the end you are the ones who decides which items can be donated." />
            <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="What do we do if someone comes to claim a meal?" body="When someone comes to claim a donated meal, they will show a QR code from the Give a Meal app. Simply scan the code using the Give a Meal Business app and provide the meal." />
        </div>
    )
}