import styles from "./styles.module.css"
import Link from "next/link"

export default function Button({ href, children }: { href: string, children: any }) {
    return <Link className={`${styles.container} body`} href={href}>{children}</Link>
}