import s from "./styles.module.css"

export default function ActionItem(
    { children, actionText, actionElements }:
        { children: React.ReactNode, actionText?: React.ReactNode, actionElements?: React.ReactNode }
) {
    return (
        <div className={s.container}>
            <div className={s.content}>
                {children}
            </div>
            <div className={s.actionBar}>
                <div>{actionText}</div>
                <div>{actionElements}</div>
            </div>
        </div>
    )
}