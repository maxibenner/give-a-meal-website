'use client'

import Badge from "@/components/badge"
import styles from "./styles.module.css"
import ExpandableText from "@/components/expandableText"
import React from "react"

export default function FAQ() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <div className="grid" style={{ justifyContent: "end" }}>
            <Badge className={styles.badge}>Frequently Asked Questions</Badge>
            <div className={styles.faqContainer}>
                <ExpandableText onClick={() => setActiveIndex(0)} active={activeIndex === 0} title="What is Give a Meal?" body="Give a Meal is a community-driven initiative that partners with local restaurants to combat food insecurity. We facilitate meal donations from customers to individuals who need them. Our goal is to ensure that everyone in our community has access to a meal." />
                <ExpandableText onClick={() => setActiveIndex(1)} active={activeIndex === 1} title="Who can benefit from Give a Meal?" body="Everyone can benefit from Give a Meal! If you&apos;re facing food insecurity, you can reserve a meal through our app. If you&apos;re able to donate, you can add a meal to your order at a partner restaurant. Restaurants can join us as partners to help their community and boost their business." />
                <ExpandableText onClick={() => setActiveIndex(3)} active={activeIndex === 3} title="How can I support Give a Meal?" body="There are several ways to support Give a Meal. You can donate a meal at one of our partner restaurants, spread the word about our program to friends, family, and favorite eateries, or even join us as a restaurant partner." />
                <ExpandableText onClick={() => setActiveIndex(4)} active={activeIndex === 4} title="Does Give a Meal operate in my area?" body="Give a Meal is expanding quickly across various cities. You can check our app to see if we&apos;re active in your area. If we&apos;re not there yet, stay tuned! We&apos;re working hard to reach as many communities as possible." />
                <ExpandableText onClick={() => setActiveIndex(5)} active={activeIndex === 5} title="Is Give a Meal a non-profit?" body="Give a Meal is an initiative run by Fotura, a digital product studio. While we&apos;re not a non-profit, our mission is centered around community service and combating food insecurity." />
                <ExpandableText onClick={() => setActiveIndex(6)} active={activeIndex === 6} title="How does Give a Meal ensure the meals reach the people who need them?" body="All donated meals are listed on our app, where they can be reserved by individuals in need. We do not impose any restrictions or require any proof of need to access these meals." />
            </div>
        </div >
    )
}