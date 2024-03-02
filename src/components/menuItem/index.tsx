import Link from "next/link";
import s from "./styles.module.css";

export default function MenuItem({ link, label, active }: { link: string, label: string, active: boolean }) {
    return (
        <Link href={link} className={`${s.container} ${active && s.active}`}>
            <p>{label}</p>
        </Link>

    )
}