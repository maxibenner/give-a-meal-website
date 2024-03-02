import Link from "next/link";
import s from "./styles.module.css";

export default function MenuItem({ link, label, active }: { link: string, label: string, active: boolean }) {
    return (
        <Link href={link}>
            <div className={`${s.container} ${active && s.active}`}>
                <p className={s.label}>{label}</p>
            </div>
        </Link>

    )
}