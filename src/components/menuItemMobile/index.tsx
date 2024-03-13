import Link from "next/link";
import s from "./styles.module.css";

export default function MenuItem({ link, label }: { link: string, label: string }) {
    return (
        <Link href={link} className={s.container}>
            <p>{label}</p>
        </Link>

    )
}