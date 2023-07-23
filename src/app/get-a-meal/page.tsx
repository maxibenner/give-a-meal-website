import Header from '@/components/header';
import styles from './page.module.css';
import Badge from '@/components/badge';
import InfoCards from './infoCards';
import FAQ from './faq';
import CTA from '@/components/cta';

export default function Page() {
    return (
        <div className={`grid ${styles.container}`}>
            <Header title="Get a Meal" className={styles.header} />
            <h2 className={styles.description}>Nobody should go hungry. Pick up nutritious free meals from local restaurants, donated by your community.</h2>
            <Badge className={styles.badgeHowItWorks}>How It Works</Badge>
            <InfoCards className={styles.infoCardContainer} />
            <Badge className={styles.badgeFAQ}>Frequently Asked Questions</Badge>
            <FAQ className={styles.faqContainer} />
            <CTA className={styles.cta} title="Get a Meal Today" description="Download our free app to browse the meal list and reserve one to pick up." buttonLabel="Get the App" href="/get-the-app" />
        </div>
    )
}