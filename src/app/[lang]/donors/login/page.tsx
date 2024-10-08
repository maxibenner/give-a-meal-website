import MagicLinkLoginForm from "@/components/magicLinkLoginForm";
import { getDictionary } from "@/get-dictionary-server";
import { Locale } from '@/i18n-config';
import Cucumber from '@/public/assets/cucumber.svg';
import Onion from '@/public/assets/onion.svg';
import Tomato from '@/public/assets/tomato.svg';
import localeLink from '@/utils/localeLink';
import { Metadata } from 'next';
import Image from 'next/image';
import s from './page.module.css';

export async function generateMetadata(
    { params }: { params: { lang: Locale } }
): Promise<Metadata> {

    const { pages: { donors: { login: { meta } } } } = await getDictionary(params.lang)

    return {
        title: meta.title,
        description: meta.description,
    }
}

export default async function Page({ params, searchParams }: { params: { lang: Locale }, searchParams: any }) {
    const { pages: { donors: { login: { hero, form } } }, elements: { footer } } = await getDictionary(params.lang)
    const defaultEmail = searchParams?.pe || undefined

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
                <MagicLinkLoginForm
                    defaultEmail={defaultEmail}
                    title={form.title}
                    buttonLabel={form.button}
                    emailLabel={form.emailLabel}
                    termsLabel={footer.terms}
                    privacyLabel={footer.privacy}
                    termsLink={localeLink("/terms-of-use", params.lang)}
                    privacyLink={localeLink("/privacy-notice", params.lang)}
                    lang={params.lang}
                />
            </div>
        </div>
    )
}