import Header from '@/components/header';
import styles from './page.module.css';
import Badge from '@/components/badge';
import InfoCards from '@/components/infoCards';
import FAQ from '@/components/faq';
import { Metadata } from 'next'
import { getDictionary } from '@/get-dictionary-server';
import { Locale } from '@/i18n-config';
import Footer from '@/components/footer';

export async function generateMetadata(
  { params }: { params: { lang: Locale } }
): Promise<Metadata> {

  const { pages: { giveAMeal: { meta } } } = await getDictionary(params.lang)

  return {
    title: meta.title,
    description: meta.description,
  }
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {

  const { pages: { giveAMeal: { hero, howTo, faq } } } = await getDictionary(lang)

  return (
    <>
      <div className={`grid ${styles.container}`}>
        <Header title={hero.title} className={styles.header} variant={2} />
        <h2 className={styles.description}>{hero.sub}</h2>
        <Badge className={styles.badgeHowItWorks}>{howTo.title}</Badge>
        <InfoCards items={howTo.cards} className={styles.infoCardContainer} />
        <Badge className={styles.badgeFAQ}>Frequently Asked Questions</Badge>
        <FAQ items={faq.questions} className={styles.faqContainer} />
      </div>
      <Footer lang={lang} />
    </>
  )
}