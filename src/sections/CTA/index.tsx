'use client'

import Button from "@/components/button"
import styles from "./styles.module.css"
import RecentItem from "./RecentItem"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Tomato from "@/public/assets/tomato.svg"
import Cucumber from "@/public/assets/cucumber.svg"
import Onion from "@/public/assets/onion.svg"
import { useEffect, useState } from "react";

type recentData = {
    action: "newDonation" | "newBusiness",
    businessName: string,
    time: string,
    donorName: string,
    item: string
    id: string
}

export default function CTA() {
    const [data, setData] = useState<recentData[]>()

    useEffect(() => {
        getRecentDonationsAndBusinesses()
    }, [])

    async function getRecentDonationsAndBusinesses() {
        try {
            const res = await fetch("https://us-central1-give-a-meal-production.cloudfunctions.net/getRecentDonationsAndBusinesses")
            const { donations, businesses } = await res.json()

            // Combine donations and businesses arrays
            // Sort by most recent based on created_at property
            // Transform each object for use in RecentItem component
            // Limit to 4 results
            const combinedData: recentData[] = [...donations, ...businesses]
                .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                .slice(0, 6)
                .map((data: any) => {
                    if ("place_id" in data) {
                        return {
                            action: "newBusiness",
                            businessName: data.business_name.charAt(0).toUpperCase() + data.business_name.slice(1),
                            time: timeSince(data.created_at),
                            donorName: "",
                            item: "",
                            id: data.id + "_business"
                        }
                    } else {
                        return {
                            action: "newDonation",
                            businessName: data.business_id.business_name.charAt(0).toUpperCase() + data.business_name.slice(1),
                            time: timeSince(data.created_at),
                            donorName: data.donor_name,
                            item: data.item_id.title,
                            id: data.id + "_donation"
                        }

                    }
                })

            setData(combinedData)

        } catch (err) {
            setData([])
            console.log(err)
        }
    }

    // Function to turn date string into formatted time (30 minutes ago, 1 hour ago, etc.)
    function timeSince(date: string) {
        const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return "Just now"
    }

    return (
        <div className="grid">
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2>Become Part of the Give a Meal Community</h2>
                    <div className={styles.buttonContainer}>
                        <Button className={styles.button} href="/get-a-meal">Get a Meal</Button>
                        <Button className={styles.button} href="/give-a-meal">Give a Meal</Button>
                        <Button className={styles.button} href="/restaurants">Restaurant Partners</Button>
                    </div>
                </div>
                <div className={styles.recentItemsContainer}>
                    {data &&
                        <Marquee>
                            {data.map((data: any) => <RecentItem key={data.id} action={data.action} businessName={data.businessName} time={data.time} donorName={data.donorName} item={data.item} />)}
                        </Marquee>
                    }
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