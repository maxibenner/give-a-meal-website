import Header from '@/components/header';
import styles from './page.module.css';
import Badge from '@/components/badge';
import InfoCards from './infoCards';
import FAQ from './faq';

export default function Page() {
    return (
        <div className={`grid ${styles.container}`}>
            <Header title="Give a Meal" className={styles.header} variant={2} />
            <h2 className={styles.description}>We partner with local restaurants to enable generous community members to donate meals. A simple gesture with the power to change someone&apos;s day.</h2>
            <Badge className={styles.badgeHowItWorks}>How It Works</Badge>
            <InfoCards className={styles.infoCardContainer} />
            <Badge className={styles.badgeFAQ}>Frequently Asked Questions</Badge>
            <FAQ className={styles.faqContainer} />
        </div>
    )
}