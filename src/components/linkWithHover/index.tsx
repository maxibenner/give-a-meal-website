import styles from "./styles.module.css"
import Link from "next/link"

export default function LinkWithHover({ className, href, onClick, children, active = false }: { href: string, children: any, onClick?: () => void, className?: string, active?: boolean }) {
    return <Link onClick={onClick} className={`${styles.container} body ${className} ${active && styles.active}`} href={href}>{children}</Link>
}