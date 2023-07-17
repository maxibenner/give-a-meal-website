import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="/" className="body">Terms of Use</a>
                <a href="/" className="body">Privacy</a>
                <a href="/" className="body">Cookies</a>
                <a href="/" className="body">Contact</a>
            </div>
            <p className="label">© 2023 <a target="empty" href="https://www.fotura.co">Fotura, Inc.</a> Illustrations by <a target="empty" href="https://www.giuliabnagle.com">Giulia Nagle</a>. Web design by <a target="empty" href="https://www.jenrudz.art">Jennifer Rudziensky</a></p>
        </footer>
    )
}