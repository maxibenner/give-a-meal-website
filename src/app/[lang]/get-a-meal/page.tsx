import Header from '@/components/header';
import styles from './page.module.css';
import Badge from '@/components/badge';
import InfoCards from '../../../components/infoCards';
import FAQ from '@/components/faq';
import CTA from '@/components/cta';
import { Metadata } from 'next'
import { getDictionary } from "@/get-dictionary-server"
import { Locale } from '@/i18n-config';
import localeLink from '@/utils/localeLink';

export async function generateMetadata(
    { params }: { params: { lang: Locale } }
): Promise<Metadata> {

    const { pages: { getAMeal: { meta } } } = await getDictionary(params.lang)

    return {
        title: meta.title,
        description: meta.description,
    }
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {

    const { pages: { getAMeal: { hero, howTo, faq, cta } } } = await getDictionary(lang)

    return (
        <div className={`grid ${styles.container}`}>
            <Header title={hero.title} className={styles.header} />
            <h2 className={styles.description}>{hero.sub}</h2>
            <Badge className={styles.badgeHowItWorks}>{howTo.title}</Badge>
            <InfoCards items={howTo.cards} className={styles.infoCardContainer} />
            <Badge className={styles.badgeFAQ}>{faq.title}</Badge>
            <FAQ items={faq.questions} className={styles.faqContainer} />
            <CTA className={styles.cta} title={cta.title} description={cta.sub} buttonLabel={cta.button} href={localeLink("/get-the-app", lang)} />
        </div>
    )
}