import Footer from '@/components/footer';
import { getDictionary } from "@/get-dictionary-server";
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import s from './page.module.css';
import Image from 'next/image';
import Tomato from '@/public/assets/tomato.svg';
import Cucumber from '@/public/assets/cucumber.svg';
import Onion from '@/public/assets/onion.svg';

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

    const { pages: { donorLogin: { hero } } } = await getDictionary(lang)

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
                <form className={s.form}>
                    <h3>Placeholder</h3>
                    <input type="text" placeholder="Email" />
                    <button>Placeholder</button>
                </form>
            </div>
        </div>
    )
}