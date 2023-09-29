import { Locale } from "@/i18n-config";
import styles from "./styles.module.css";
import localeLink from "@/utils/localeLink";

export default function Footer({ lang, style }: { lang: Locale, style: React.CSSProperties }) {
    return <div className={styles.footerBg}>
        <footer className={styles.footer} style={style}>
            <div>
                <a href={localeLink("/terms-of-use", lang)} className="body">Terms of Use</a>
                <a href={localeLink("/privacy-notice", lang)} className="body">Privacy</a>
                <a href={localeLink("/cookie-policy", lang)} className="body">Cookies</a>
                <a href="mailto:max@give-a-meal.org" className="body">Contact</a>
            </div>
            <p className="label">© 2023 <a target="empty" href="https://www.fotura.co">Fotura, Inc.</a> Illustrations by <a target="empty" href="https://www.giuliabnagle.com">Giulia Nagle</a>. Web design by <a target="empty" href="https://www.jenrudz.art">Jennifer Rudziensky</a></p>
        </footer>
    </div>
}