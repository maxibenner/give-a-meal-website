'use client'

import styles from "./styles.module.css";
import Image from "next/image";
import NewDonation from "../../../assets/icons/newDonation.svg"
import NewBusiness from "../../../assets/icons/newBusiness.svg"

export default function RecentItem({ action, businessName, time, donorName, item }: { action: "newDonation" | "newBusiness", businessName: string, time: string, donorName: string, item: string }) {

    let icon = action === "newDonation" ? NewDonation : NewBusiness
    let message;
    if (action === "newDonation") {
        message = (<><span className="body_l_bold">{donorName}</span> donated a {item} at <span className="body_l_bold">{businessName}</span></>)
    } else {
        message = (<><span className="body_l_bold">{businessName}</span> became a restaurant partner</>)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image priority className={styles.image} src={icon} alt="Donation or restaurant icon" width={36} height={36} />
            </div>
            <div className={styles.textContainer}>
                <p className="body_l">{message}</p>
                <p className="body_s">{time}</p>
            </div>
        </div>
    )
}