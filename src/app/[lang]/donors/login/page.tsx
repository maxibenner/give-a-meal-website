import Footer from '@/components/footer';
import { getDictionary } from "@/get-dictionary-server";
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import s from './page.module.css';
import Image from 'next/image';
import Tomato from '@/public/assets/tomato.svg';
import Cucumber from '@/public/assets/cucumber.svg';
import Onion from '@/public/assets/onion.svg';
import Button from '@/components/button';
import TextInput from '@/components/textInput';
import Link from 'next/link';
import localeLink from '@/utils/localeLink';
import MagicLinkForm from '@/components/magicLinkForm';

export async function generateMetadata(
    { params }: { params: { lang: Locale } }
): Promise<Metadata> {

    const { pages: { donors: { login: { meta } } } } = await getDictionary(params.lang)

    return {
        title: meta.title,
        description: meta.description,
    }
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {

    const { pages: { donors: { login: { hero, form } } }, elements: { footer } } = await getDictionary(lang)

    return (
        <div className={`grid ${s.container}`}>
            <div className={s.panel}>
                <div className={s.vegContainer}>
                    <Image loading="eager" src={Tomato} alt="tomato" width={332} height={484} />
                    <Image loading="eager" src={Cucumber} alt="cucumber" width={377} height={430} />
                    <Image loading="eager" src={Onion} alt="onion" width={285} height={420} />
                </div>
                <h1 className={s.heroTitle}>{hero.title}</h1>
            </div>
            <div className={s.panel}>
                <MagicLinkForm
                    title={form.title}
                    buttonLabel={form.button}
                    emailLabel={form.emailLabel}
                    termsLabel={footer.terms}
                    privacyLabel={footer.privacy}
                    termsLink={localeLink("/terms-of-use", lang)}
                    privacyLink={localeLink("/privacy-notice", lang)}
                    lang={lang}
                />
            </div>
        </div>
    )
}