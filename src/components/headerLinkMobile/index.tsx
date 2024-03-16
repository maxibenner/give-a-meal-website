import Link from "next/link"
import s from "./styles.module.css"
import Image from "next/image"

export default function HeaderLinkMobile({ icon, children, href, className }: { children: React.ReactNode, href: string, icon?: string, className?: string }) {
    return (
        <Link href={href} className={`${s.container} ${className}`}>
            {icon && <Image className={s.icon} src={icon} alt="link icon" />}
            <p className="body">{children}</p>
        </Link>
    )
}