'use client'

import styles from "./styles.module.css"
import React from "react"
import Plus from "@/public/assets/icon_plus.svg"
import Image from "next/image"

export default function ExpandableText({ title, body, active, onClick }: { title: string, body: string, active: boolean, onClick: () => void }) {

    const [bodyHeight, setBodyHeight] = React.useState(0)
    const bodyRef = React.useRef<HTMLParagraphElement>(null)

    React.useEffect(() => {
        if (active) {
            const height = bodyRef.current?.scrollHeight || 0
            if (height > 0) setBodyHeight(height + 24)
        } else {
            setBodyHeight(0)
        }
    }, [active])

    return (
        <div onClick={onClick} className={`${styles.container} ${active && styles.active}`}>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
                <Image src={Plus} alt="plus icon" width={16} height={16} />
            </div>
            <div className={styles.bodyContainer}>
                <p ref={bodyRef} style={{ height: bodyHeight }} className="body_l">{body}</p>
            </div>
        </div>
    )
}