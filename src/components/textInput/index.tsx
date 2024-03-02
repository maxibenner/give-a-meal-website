import styles from "./styles.module.css"

export default function TextInput({ className, placeholder, type = "text", label, name }: { placeholder?: string, className?: string, type?: string, label?: string, name?: string }) {
    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label className="body_bold">{label}</label>}
            <input name={name} className={`body ${styles.input}`} type={type} placeholder={placeholder} />
        </div>
    )
}