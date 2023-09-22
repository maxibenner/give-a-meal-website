'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'
import Image from 'next/image'
import styles from "./styles.module.css"

export default function LocaleSwitcher({ className }: { className?: string }) {
    const pathName = usePathname()
    const activeLocale = pathName.split('/')[1]
    const nextLocale = i18n.locales.find((locale) => locale !== activeLocale)

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <>
            {i18n.locales.map((locale) => {
                return (
                    <Link key={locale} style={{ display: nextLocale === locale ? "block" : "none" }} href={redirectedPathName(nextLocale!)}>
                        <div className={`${styles.wrapper} ${className}`}>
                            <div className={styles.container}>
                                <Image height={18} width={27} src={require(`@/public/assets/flags/${nextLocale}.svg`)} alt={`${nextLocale} flag`} />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}