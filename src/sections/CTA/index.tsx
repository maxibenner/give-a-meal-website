'use client'

import Button from "@/components/button"
import styles from "./styles.module.css"
import RecentItem from "./RecentItem"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Tomato from "@/public/assets/tomato.svg"
import Cucumber from "@/public/assets/cucumber.svg"
import Onion from "@/public/assets/onion.svg"

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

            <div className={styles.vegContainer}>
                <Image src={Tomato} alt="tomato" width={287} height={420} />
                <Image src={Cucumber} alt="cucumber" width={377} height={430} />
                <Image src={Onion} alt="onion" width={285} height={420} />
            </div>
        </div>
    )
}