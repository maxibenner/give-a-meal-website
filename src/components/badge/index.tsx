import styles from "./styles.module.css"

export default function Badge({ children, className }: { children: any, className?: string }) {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}