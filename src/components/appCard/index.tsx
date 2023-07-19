import styles from "./styles.module.css"
import Image from "next/image"
import AppStoreBadge from "@/public/assets/images/appstore.png"
import PlayStoreBadge from "@/public/assets/images/playstore.png"
import Link from "next/link"

export default function AppCard({ title, description, imageSrc, appStoreLink, playStoreLink, className }: { title: string, description: string, imageSrc: any, appStoreLink: string, playStoreLink: string, className?: string }) {
    return (
        <div className={`${styles.container} ${className}`}>
            <Image className={styles.image} src={imageSrc} width={64} height={64} alt="App Icon" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className="body">{description}</p>
            </div>
            <div className={styles.storeContainer}>
                <Link href={appStoreLink}><Image className={styles.image} src={AppStoreBadge} width={170} height={50} alt="Appstore badge" /></Link>
                <Link href={playStoreLink}><Image className={styles.image} src={PlayStoreBadge} width={170} height={50} alt="Playstore badge" /></Link>
            </div>
        </div>
    )
}