import styles from "./styles.module.css"

export default function Badge({ children, className, style }: { children: any, className?: string, style?: any }) {
    return <div className={`${styles.container} ${className}`} style={style}>{children}</div>
}