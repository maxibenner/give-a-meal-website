import styles from "./styles.module.css";

export default function Footer() {
    return (
        <div className={styles.footerBg}>
            <footer className={styles.footer}>
                <div>
                    <a href="/terms-of-use" className="body">Terms of Use</a>
                    <a href="/privacy-notice" className="body">Privacy</a>
                    <a href="/cookie-policy" className="body">Cookies</a>
                    <a href="mailto:max@give-a-meal.org" className="body">Contact</a>
                </div>
                <p className="label">© 2023 <a target="empty" href="https://www.fotura.co">Fotura, Inc.</a> Illustrations by <a target="empty" href="https://www.giuliabnagle.com">Giulia Nagle</a>. Web design by <a target="empty" href="https://www.jenrudz.art">Jennifer Rudziensky</a></p>
            </footer>
        </div>
    )
}