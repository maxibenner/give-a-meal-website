import styles from "./styles.module.css"

export default function InfoCard({ title, body, number, className }: { title: string, body: string, number: string, className?: string }) {
    return <div className={`${styles.container} ${className}`}>
        <h4 className={styles.number}>{number}</h4>
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className="body">{body}</p>
        </div>
    </div>
}