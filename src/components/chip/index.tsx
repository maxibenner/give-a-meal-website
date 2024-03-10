import s from "./styles.module.css"

export default function Chip({ text }: { text: string }) {
    return (
        <div className={s.container}>
            <p className="label">{text}</p>
        </div>
    )
}