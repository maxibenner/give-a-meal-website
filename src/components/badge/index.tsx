import styles from "./styles.module.css"

export default function Badge({ children, className }: { children: any, className?: string }) {
    return <h5 className={`${styles.container} ${className}`}>{children}</h5>
}