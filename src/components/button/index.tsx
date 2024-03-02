import styles from "./styles.module.css"
import Link from "next/link"

export default function Button({ className, href, onClick, children, icon, large }: { href?: string, children: any, onClick?: () => void, className?: string, icon?: JSX.Element, large?: boolean }) {
    if (href) return <Link onClick={onClick} className={`body ${styles.container} ${large && styles.large} ${className}`} href={href}>{icon && icon}{children}</Link>
    else return <button type="submit" onClick={onClick} className={`body ${styles.container} ${large && styles.large} ${className}`}>{icon && icon}{children}</button>
}