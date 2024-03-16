import styles from "./styles.module.css"

export default function NavItem({ label, href, children }: { label: string, href?: string, children?: any }) {
    return (
        <div className={styles.container}>
            <a href={href}>{label}</a>
            <div className={styles.dropdownWrapper}>
                <div className={styles.dropdownMenu}>
                    {children}
                </div>
            </div>

        </div>
    )
}