import s from "./styles.module.css"

export default function TextInput({
    className,
    placeholder,
    type = "text",
    label,
    name,
    small,
    defaultValue,
    disabled,
    maxLength,
    hidden
}: {
    placeholder?: string,
    className?: string,
    type?: string,
    label?: string,
    name?: string,
    small?: boolean,
    defaultValue?: string,
    disabled?: boolean,
    maxLength?: number,
    hidden?: boolean

}) {
    return (
        <div className={`${s.container} ${className}`}>
            {label && <label className="body_bold">{label}</label>}
            <input
                maxLength={maxLength}
                disabled={disabled}
                defaultValue={defaultValue}
                name={name}
                className={`body ${s.input} ${small && s.small}`}
                type={type}
                placeholder={placeholder}
                hidden={hidden}
            />
        </div>
    )
}