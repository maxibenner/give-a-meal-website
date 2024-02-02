import styles from "./styles.module.css"

export default function Loader() {
    return (
        <div className={styles.wave}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
    )
}