import fillTemplate from "@/utils/fillTemplate";

// Function to turn date string into formatted time (30 minutes ago, 1 hour ago, etc.)
export default function timeSince(date: string, dictionary: any) {
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