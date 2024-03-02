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

export async function generateMetadata(
    { params }: { params: { lang: Locale } }
): Promise<Metadata> {

    const { pages: { donorLogin: { meta } } } = await getDictionary(params.lang)

    return {
        title: meta.title,
        description: meta.description,
    }
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {

    const { pages: { donorLogin: { hero, form } }, elements: { footer } } = await getDictionary(lang)

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
                <h2 className={s.wordmark}>Give a Meal</h2>
                <form className={s.form} action={localeLink("/donor", lang)}>
                    <h3>{form.title}</h3>
                    <TextInput name="email" label={form.emailLabel} type="email" />
                    <Button large>{form.button}</Button>
                    <div className={s.linkContainer}>
                        <Link href={localeLink("/terms-of-use", lang)} className="label">{footer.terms}</Link>
                        <span className="label">·</span>
                        <Link href={localeLink("/privacy-notice", lang)} className="label">{footer.privacy}</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}