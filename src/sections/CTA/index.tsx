'use client'

import Button from "@/components/Button"
import styles from "./styles.module.css"
import RecentItem from "./RecentItem"
import Marquee from "react-fast-marquee";

export default function CTA() {
    const data = [
        {
            action: "newDonation",
            businessName: "Livite",
            time: "2 hours ago",
            donorName: "Lisa",
            item: "Sandwich of Choice"
        },
        {
            action: "newBusiness",
            businessName: "Mamalehh's Delicatessen",
            time: "1 hours ago",
            donorName: "",
            item: ""
        },
        {
            action: "newBusiness",
            businessName: "Mamalehh's Delicatessen",
            time: "1 hours ago",
            donorName: "",
            item: ""
        },
        {
            action: "newBusiness",
            businessName: "Mamalehh's Delicatessen",
            time: "1 hours ago",
            donorName: "",
            item: ""
        }
    ] as {
        action: "newDonation" | "newBusiness",
        businessName: string,
        time: string,
        donorName: string,
        item: string
    }[]
    
    return (
        <div className="grid">
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2>Become Part of the Give a Meal Community</h2>
                    <div className={styles.buttonContainer}>
                        <Button className={styles.button} href="/">Find a Meal</Button>
                        <Button className={styles.button} href="/">Give a Meal</Button>
                        <Button className={styles.button} href="/">Restaurant Partners</Button>
                    </div>
                </div>
                <div className={styles.recentItemsContainer}>
                    <Marquee>
                        {data.map((data) => <RecentItem key={data.time} action={data.action} businessName={data.businessName} time={data.time} donorName={data.donorName} item={data.item} />)}
                    </Marquee>
                </div>
            </div>
        </div >
    )
}