import styles from "./styles.module.css"
import Link from "next/link"

export default function Button({ className, href, onClick, children }: { href: string, children: any, onClick?: () => void, className?: string }) {
    return <Link onClick={onClick} className={`${styles.container} body ${className}`} href={href}>{children}</Link>
}