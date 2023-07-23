'use client'

import styles from "./styles.module.css"
import React from "react"
import ExpandableText from "@/components/expandableText"

export default function FAQ({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="Is Give a Meal for me?" body="Yes! There are no requirements or documentation required to receive a meal. Food for those in need, no questions asked." />
            <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="Are the meals only available at certain times?" body="Meal availability depends on the operating hours of our partner restaurants." />
            <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="Can I reserve meals for my family or friends?" body="Yes, you can reserve up to three meals at a time." />
            <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Do I have to eat my meal at the restaurant?" body="No, you can eat wherever you want. If you want to take your food to go, make sure to tell the restaurant when you order your meal." />
            <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="What if I don't have a smartphone?" body="Currently, a smartphone is needed to reserve and collect meals. We are exploring other options for those without smartphone access and will update our community when these are available." />
            <ExpandableText onClick={() => setActiveIndex(6)} active={activeIndex === 6} title="I have dietary restrictions. Can I still get meals?" body="Yes, our partner restaurants often provide various meal options. When you browse the app, you can see what each meal includes. Additionally, let the restaurants know of any allergies or restrictions when you pick up the meal." />
        </div>
    )
}