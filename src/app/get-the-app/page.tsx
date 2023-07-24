import Header from '@/components/header';
import styles from './page.module.css';
import AppCard from '@/components/appCard';
import UserIcon from '@/public/assets/images/icon-user.jpg';
import BusinessIcon from '@/public/assets/images/icon-business.jpg';
import Head from 'next/head';

export default function Page() {
    return (
        <div className={`grid ${styles.container}`}>
            <Head key="get-the-app">
                <title>Get the App</title>
                <meta name="description" content="Download our free apps to browse the meal list or to manage your Give a Meal operations." />
            </Head>
            <Header title="Get the App" className={styles.header} variant={1} />
            <AppCard appStoreLink="https://apps.apple.com/app/id1631730593" playStoreLink="https://play.google.com/store/apps/details?id=com.fotura.giveamealuser&pli=1" className={styles.cardOne} title="Give a Meal" description="For people looking for meals. Find meals near you and reserve them for free pick up." imageSrc={UserIcon} />
            <AppCard appStoreLink="https://apps.apple.com/app/id6449883589" playStoreLink="https://play.google.com/store/apps/details?id=com.fotura.giveamealbusiness" className={styles.cardTwo} title="Give a Meal Business" description="For partner restaurants. Manage Give a Meal operations, add and redeem donations." imageSrc={BusinessIcon} />
        </div>
    )
}