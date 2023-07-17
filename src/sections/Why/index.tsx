import styles from "./styles.module.css"
import Badge from "@/components/Badge"

export default function Why() {
    return (
        <div className="grid">
            <div className={styles.textContainer}>
                <Badge>Why We Exist</Badge>
                <h2>We believe in combating food insecurity and fostering an environment of connection and compassion in local communities.</h2>
            </div>
        </div>
    )
}