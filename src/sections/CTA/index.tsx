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
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary-client";
import localeLink from "@/utils/localeLink";

type recentData = {
    action: "newDonation" | "newBusiness",
    businessName: string,
    time: string,
    donorName: string,
    item: string
    id: string
}

export default function CTA({ lang }: { lang: Locale }) {
    const [data, setData] = useState<recentData[]>()
    const [dictionary, setDictionary] = useState<any>(null)

    useEffect(() => {
        getRecentDonationsAndBusinesses()
        getDictionary(lang).then((res) => setDictionary(res))
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
                            businessName: data.business_name ? data.business_name.charAt(0).toUpperCase() + data.business_name.slice(1) : "",
                            time: timeSince(data.created_at),
                            donorName: "",
                            item: "",
                            id: data.id + "_business"
                        }
                    } else {
                        return {
                            action: "newDonation",
                            businessName: data.business_id.business_name ? data.business_id.business_name.charAt(0).toUpperCase() + data.business_id.business_name.slice(1) : "",
                            time: timeSince(data.created_at),
                            donorName: data.donor_name ? data.donor_name.charAt(0).toUpperCase() + data.donor_name.slice(1) : "",
                            item: data.item_id.title ? data.item_id.title.charAt(0).toUpperCase() + data.item_id.title.slice(1) : "",
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

        if (interval >= 2) {
            return Math.floor(interval) + " years ago";
        } else if (interval >= 1) {
            return "1 year ago";
        }

        interval = seconds / 2592000;
        if (interval >= 2) {
            return Math.floor(interval) + " months ago";
        } else if (interval >= 1) {
            return "1 month ago";
        }

        interval = seconds / 604800; // 7 days in seconds
        if (interval >= 2) {
            return Math.floor(interval) + " weeks ago";
        } else if (interval >= 1) {
            return "1 week ago";
        }

        interval = seconds / 86400;
        if (interval >= 2) {
            return Math.floor(interval) + " days ago";
        } else if (interval >= 1) {
            return "1 day ago";
        }

        interval = seconds / 3600;
        if (interval >= 2) {
            return Math.floor(interval) + " hours ago";
        } else if (interval >= 1) {
            return "1 hour ago";
        }

        interval = seconds / 60;
        if (interval >= 2) {
            return Math.floor(interval) + " minutes ago";
        } else if (interval >= 1) {
            return "1 minute ago";
        }

        return "Just now";
    }

    if (!dictionary) return null
    return (
        <div className="grid">
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2>{dictionary.pages.home.cta.title}</h2>
                    <div className={styles.buttonContainer}>
                        <Button className={styles.button} href={localeLink("/get-a-meal", lang)}>{dictionary.pages.home.cta.button_1}</Button>
                        <Button className={styles.button} href={localeLink("/give-a-meal", lang)}>{dictionary.pages.home.cta.button_2}</Button>
                        <Button className={styles.button} href={localeLink("/restaurants", lang)}>{dictionary.pages.home.cta.button_3}</Button>
                    </div>
                </div>
                <div className={styles.recentItemsContainer}>
                    {data &&
                        <Marquee>
                            {data.map((data: any) => <RecentItem lang={lang} key={data.id} action={data.action} businessName={data.businessName} time={data.time} donorName={data.donorName} item={data.item} />)}
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