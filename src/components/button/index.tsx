import styles from "./styles.module.css"
import Link from "next/link"

export default function Button({ className, href, onClick, children, icon }: { href: string, children: any, onClick?: () => void, className?: string, icon?: JSX.Element }) {
    return <Link onClick={onClick} className={`${styles.container} body ${className}`} href={href}>{icon && icon}{children}</Link>
}