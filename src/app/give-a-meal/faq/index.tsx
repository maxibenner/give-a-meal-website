'use client'

import styles from "./styles.module.css"
import React from "react"
import ExpandableText from "@/components/expandableText"

export default function FAQ({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={`${styles.container} ${className}`}>
            <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="How do I know my donated meal reaches someone in need?" body="At Give a Meal, we ensure all donated meals are listed on our app for individuals facing food insecurity. You might not see the smiles, but rest assured, your kindness is making a difference." />
            <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="What&apos;s the cost of donating a meal?" body="The cost of donating a meal depends on the restaurant and the meal itself. The price is usually equivalent to the cost of the meal on the restaurant&apos;s menu." />
            <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="Can I choose what meal I donate?" body="Absolutely! When ordering at our partner restaurants, you can choose any meal to donate." />
            <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Can I donate more than one meal at a time?" body="Yes, there is no limit to generosity. You can donate as many meals as you&apos;d like." />
            <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="Can I donate a meal from any restaurant?" body="Donations can currently be made at our partner restaurants only. If your favorite restaurant isn&apos;t listed, why not suggest they join us?" />
            <ExpandableText onClick={() => setActiveIndex(6)} active={activeIndex === 6} title="Will I receive a confirmation of my donation?" body="Not currently. However, you can provide your name when you donate and then find your donation in the Give a Meal app." />
        </div>
    )
}