import styles from "./styles.module.css"
import Link from "next/link"

export default function Button({ className, href, children }: { href: string, children: any, className: string }) {
    return <Link className={`${styles.container} body ${className}`} href={href}>{children}</Link>
}