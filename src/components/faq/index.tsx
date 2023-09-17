'use client'

import styles from "./styles.module.css"
import React from "react"
import ExpandableText from "@/components/expandableText"

export default function FAQ({ items, className }: { items: { title: string, text: string }[], className?: string }) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <div className={`${styles.container} ${className}`}>
            {items.map((item, index) => <ExpandableText key={item.title} onClick={() => setActiveIndex(index)} active={activeIndex === index} title={item.title} body={item.text} />)}
        </div>
    )
}