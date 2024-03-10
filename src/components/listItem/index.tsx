import { timestampToDate } from "@/utils/timestampToDate";
import s from "./styles.module.css";
import Chip from "../chip";

export default function ListItem({ title, date, text, chip }: { title: string, date: string, text: string, chip?: string | null }) {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <p className="body_bold">{title}</p>
                {chip && <Chip text={chip} />}
            </div>
            <p className={s.subtext}>{timestampToDate(date)}</p>
            <p className={s.subtext}>{text}</p>
        </div>
    )
}