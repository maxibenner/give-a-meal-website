import Link from "next/link";
import styles from "./styles.module.css";

export default function Button({
    className,
    wrapperClassName,
    href,
    onClick,
    children,
    icon,
    large,
    isLoading
}: {
    href?: string,
    children: any,
    onClick?: () => void,
    className?: string,
    wrapperClassName?: string;
    icon?: JSX.Element,
    large?: boolean,
    isLoading?: boolean
}) {

    const content = (
        <button type="submit" onClick={onClick} className={`body ${styles.container} ${large && styles.large} ${isLoading && styles.isLoading} ${className}`}>
            {/* <div className={styles.spinner} /> */}
            <div className={styles.content}>{icon && icon}{children}</div>
        </button>
    )

    if (href) return <Link className={wrapperClassName} href={href}>{content}</Link>
    else return <div className={wrapperClassName}>{content}</div>
}