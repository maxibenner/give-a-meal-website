'use client'

import styles from "./styles.module.css"
import React, { useEffect } from "react"

export default function InfoCard({ title, sub, number, active, onPointerEnter, className }: { title: string, sub: string, number: number, active: boolean, onPointerEnter: () => void, className?: string }) {
    const [bodyHeight, setBodyHeight] = React.useState(0)
    const bodyRef = React.useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (active) {
            const height = bodyRef.current?.scrollHeight || 0
            if (height > 0) setBodyHeight(height + 24)
        } else {
            setBodyHeight(0)
        }
    }, [active])

    return (
        <div onPointerEnter={onPointerEnter} className={`${styles.container} ${className} ${active && styles.active}`}>
            <p className={styles.number}>{number}</p>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p ref={bodyRef} className="body" style={{ height: bodyHeight }}>{sub}</p>
            </div >
        </div >
    )
}