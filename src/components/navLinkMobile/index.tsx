import Link from "next/link";
import styles from "./styles.module.css";

export default function NavLinkMobile({ href, onClick, children, className, label }: { href?: string, onClick?: () => void, children?: React.ReactNode, className?: string, label?: string }) {
    const TextElement = () => href ?
        <Link onClick={onClick} href={href} className={`${styles.link} ${className}`}>{label}</Link> :
        <p className={`${styles.link} ${className}`}>{label}</p>;

    return (
        <div className={styles.wrapper}>
            <TextElement />
            {children &&
                <div className={styles.subLinkContainer}>
                    {children}
                </div>
            }
        </div>
    )
}

function Sub({ href, onClick, className, label }: { href: string, onClick?: () => void, className?: string, label?: string }) {
    return (
        <Link onClick={onClick} href={href} className={`${styles.subLink} ${className}`}>{label}</Link>
    )
}

NavLinkMobile.Sub = Sub;