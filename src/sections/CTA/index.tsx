import Button from "@/components/button"
import styles from "./styles.module.css"
import RecentItem from "./RecentItem"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Tomato from "@/public/assets/tomato.svg"
import Cucumber from "@/public/assets/cucumber.svg"
import Onion from "@/public/assets/onion.svg"
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary-client";
import localeLink from "@/utils/localeLink";
import fillTemplate from "@/utils/fillTemplate";

type recentData = {
    action: "newDonation" | "newBusiness",
    businessName: string,
    time: string,
    donorName: string,
    item: string
    id: string
}

export default async function CTA({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang)
    const data = await getRecentDonationsAndBusinesses(dictionary)


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
                {data && <div className={styles.recentItemsContainer}>
                    <Marquee>
                        {data.map((data: any) => <RecentItem lang={lang} key={data.id} action={data.action} businessName={data.businessName} time={data.time} donorName={data.donorName} item={data.item} />)}
                    </Marquee>
                </div>}
            </div>

            <div className={styles.vegContainer}>
                <Image src={Tomato} alt="tomato" width={287} height={420} />
                <Image src={Cucumber} alt="cucumber" width={377} height={430} />
                <Image src={Onion} alt="onion" width={285} height={420} />
            </div>
        </div>
    )

}




/**
 * Fetches recent donations and businesses from API
 * Combines donations and businesses into one array
 * Sorts by most recent
 * Transforms each object for use in RecentItem component
 * Limits to 4 results 
 * @param dictionary 
 */
async function getRecentDonationsAndBusinesses(dictionary: any) {
    try {
        const res = await fetch("https://us-central1-give-a-meal-production.cloudfunctions.net/getRecentDonationsAndBusinesses", { next: { revalidate: 60 } })
        const { donations, businesses } = await res.json()

        const combinedData: recentData[] = [...donations, ...businesses]
            .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 6)
            .map((data: any) => {
                if ("place_id" in data) {
                    return {
                        action: "newBusiness",
                        businessName: data.business_name ? data.business_name.charAt(0).toUpperCase() + data.business_name.slice(1) : "",
                        time: timeSince(data.created_at, dictionary),
                        donorName: "",
                        item: "",
                        id: data.id + "_business"
                    }
                } else {
                    return {
                        action: "newDonation",
                        businessName: data.business_id.business_name ? data.business_id.business_name.charAt(0).toUpperCase() + data.business_id.business_name.slice(1) : "",
                        time: timeSince(data.created_at, dictionary),
                        donorName: data.donor_name ? data.donor_name.charAt(0).toUpperCase() + data.donor_name.slice(1) : "",
                        item: data.item_id.title ? data.item_id.title.charAt(0).toUpperCase() + data.item_id.title.slice(1) : "",
                        id: data.id + "_donation"
                    }

                }
            })

        return combinedData

    } catch (err) {
        console.log(err)
        return []
    }
}

// Function to turn date string into formatted time (30 minutes ago, 1 hour ago, etc.)
function timeSince(date: string, dictionary: any) {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.years, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.year
    }

    interval = seconds / 2592000;
    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.months, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.month
    }

    interval = seconds / 604800; // 7 days in seconds
    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.weeks, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.week
    }

    interval = seconds / 86400;
    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.days, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.day
    }

    interval = seconds / 3600;
    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.hours, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.hour
    }

    interval = seconds / 60;
    if (interval >= 2) {
        return fillTemplate(dictionary.pages.home.cta.time.minutes, Math.floor(interval))
    } else if (interval >= 1) {
        return dictionary.pages.home.cta.time.minute
    }

    return dictionary.pages.home.cta.time.recently
}