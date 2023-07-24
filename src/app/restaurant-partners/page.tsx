import Header from '@/components/header';
import styles from './page.module.css';
import Badge from '@/components/badge';
import InfoCards from './infoCards';
import FAQ from './faq';
import CTA from '@/components/cta';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Partner Restaurants",
  description: "With Give a Meal, your restaurant can join a mission to combat food insecurity, while building a stronger community and boosting your business.",
}

export default function Page() {
    return (
        <div className={`grid ${styles.container}`}>
            <Header title="Restaurant Partners" className={styles.header} variant={3} />
            <h2 className={styles.description}>With Give a Meal, your restaurant can join a mission to combat food insecurity, while building a stronger community and boosting your business.</h2>
            <Badge className={styles.badgeHowItWorks}>How It Works</Badge>
            <InfoCards className={styles.infoCardContainer} />
            <Badge className={styles.badgeFAQ}>Frequently Asked Questions</Badge>
            <FAQ className={styles.faqContainer} />
            <CTA className={styles.cta} title="Register your restaurant today" description="Download our free Give a Meal Business app to register your restaurant and start accepting donations." buttonLabel="Get the App" href="/get-the-app" />
        </div>
    )
}