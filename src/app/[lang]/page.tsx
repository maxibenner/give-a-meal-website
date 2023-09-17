import styles from "./page.module.css";
import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import FAQ from "@/components/faq";
import CTA from "@/sections/CTA";
import { Metadata } from 'next'
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary-server"
import Badge from "@/components/badge";
import InfoCards from "@/components/infoCards";

export async function generateMetadata(
  { params }: { params: { lang: Locale } }
): Promise<Metadata> {

  const { pages: { home: { meta } } } = await getDictionary(params.lang)

  return {
    title: meta.title,
    description: meta.description,
    // openGraph: {
    //   images: [{
    //     url: `/images/opengraph-image-${params.lang}.jpg`,
    //     width: 830,
    //     height: 498,
    //   }]
    // }
  }
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {

  const { pages: { giveAMeal: { faq, howTo } } } = await getDictionary(lang)

  return (
    <div className={styles.container}>
      <Hero lang={lang} />

      <div className={styles.overlay}>
        <div className={styles.maxWidth}>
          <Why lang={lang} />
          <div className="grid">
            <Badge className={styles.badgeHowItWorks}>{howTo.title}</Badge>
            <InfoCards items={howTo.cards} className={styles.infoCardContainer} />
          </div>
          <div className="grid">
            <Badge className={styles.badgeFAQ}>{faq.title}</Badge>
            <FAQ items={faq.questions} className={styles.faqContainer} />
          </div>
          <CTA lang={lang} />
        </div>
      </div>
    </div>

  );
}
