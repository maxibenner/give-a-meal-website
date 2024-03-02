import s from "./styles.module.css"

export default function TextInput({ className, placeholder, type = "text", label, name, small, defaultValue }:
    { placeholder?: string, className?: string, type?: string, label?: string, name?: string, small?: boolean, defaultValue?: string }) {

    return (
        <div className={`${s.container} ${className}`}>
            {label && <label className="body_bold">{label}</label>}
            <input defaultValue={defaultValue} name={name} className={`body ${s.input} ${small && s.small}`} type={type} placeholder={placeholder} />
        </div>
    )
}