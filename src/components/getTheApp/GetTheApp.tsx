import localeLink from "@/utils/localeLink"
import Button from "../button"
import styles from "./styles.module.css"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary-server"

export default async function GetTheApp({ lang }: { lang: Locale }) {

    const dictionary = await getDictionary(lang)

    return (
        <div className={styles.container}>
            <Button icon={svg} href={localeLink("/app", lang)}>{dictionary.elements.nav.apps}</Button >
        </div >
    )
}

const svg = <svg width="52" height="18" viewBox="0 0 52 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7102 11.149C14.7203 10.3668 14.9287 9.59995 15.3159 8.91965C15.7031 8.23935 16.2566 7.66775 16.9248 7.25805C16.5003 6.65345 15.9402 6.15585 15.2891 5.80485C14.638 5.45385 13.9138 5.25905 13.1741 5.23605C11.596 5.07085 10.0661 6.17765 9.26187 6.17765C8.44217 6.17765 7.20397 5.25245 5.87077 5.27975C5.00837 5.30755 4.16787 5.55765 3.43117 6.00565C2.69457 6.45365 2.08677 7.08425 1.66727 7.83615C-0.150231 10.974 1.20547 15.5857 2.94647 18.1222C3.81747 19.3642 4.83557 20.7516 6.16757 20.7024C7.47117 20.6485 7.95797 19.8735 9.53137 19.8735C11.0903 19.8735 11.547 20.7024 12.9061 20.6711C14.3049 20.6485 15.1861 19.4235 16.0266 18.1697C16.6525 17.2848 17.1341 16.3066 17.4536 15.2717C16.641 14.9289 15.9475 14.3552 15.4597 13.6221C14.9718 12.889 14.7111 12.0289 14.7102 11.149Z" fill="white" />
    <path d="M12.1428 3.56759C12.9054 2.65459 13.2812 1.48109 13.1902 0.296387C12.025 0.418387 10.9488 0.973686 10.1758 1.85159C9.7979 2.28049 9.5084 2.77949 9.324 3.31999C9.1396 3.86049 9.0638 4.43199 9.101 5.00169C9.6838 5.00769 10.2603 4.88169 10.7872 4.63329C11.3141 4.38489 11.7776 4.02049 12.1428 3.56759Z" fill="white" />
    <path d="M36.7236 15.2776C36.7236 16.1769 37.4594 16.9126 38.3586 16.9126H38.9037V19.6376C38.9037 20.39 39.5135 21.0001 40.2662 21.0001C41.0188 21.0001 41.6287 20.39 41.6287 19.6376V16.9126H43.2637V19.6376C43.2637 20.39 43.8736 21.0001 44.6262 21.0001C45.3789 21.0001 45.9887 20.39 45.9887 19.6376V16.9126H46.5337C47.433 16.9126 48.1687 16.1769 48.1687 15.2776V7.10254H36.7236V15.2776Z" fill="white" />
    <path d="M50.0764 6.83008C49.3237 6.83008 48.7139 7.44018 48.7139 8.19258V13.6427C48.7139 14.395 49.3237 15.0052 50.0764 15.0052C50.829 15.0052 51.439 14.395 51.439 13.6427V8.19258C51.439 7.44018 50.829 6.83008 50.0764 6.83008Z" fill="white" />
    <path d="M34.8161 6.83008C34.0635 6.83008 33.4536 7.44018 33.4536 8.19258V13.6427C33.4536 14.395 34.0635 15.0052 34.8161 15.0052C35.5688 15.0052 36.1786 14.395 36.1786 13.6427V8.19258C36.1786 7.44018 35.5688 6.83008 34.8161 6.83008Z" fill="white" />
    <path d="M45.5435 1.74988L46.2789 0.403385C46.3511 0.271285 46.3024 0.105885 46.1705 0.0336847C46.0386 -0.0386153 45.8726 0.00988503 45.8007 0.142085L45.0717 1.47628C44.2848 1.06858 43.3937 0.834784 42.4462 0.834784C41.4987 0.834784 40.6076 1.06858 39.8206 1.47628L39.0917 0.142085C39.0192 0.010185 38.8538 -0.0391153 38.7219 0.0336847C38.59 0.105885 38.5412 0.271285 38.6134 0.403385L39.3489 1.74988C37.7709 2.76878 36.7236 4.53918 36.7236 6.55738H48.1687C48.1687 4.53918 47.1215 2.76878 45.5435 1.74988ZM39.9937 4.64978C39.6928 4.64978 39.4487 4.40568 39.4487 4.10478C39.4487 3.80398 39.6928 3.55978 39.9937 3.55978C40.2945 3.55978 40.5387 3.80398 40.5387 4.10478C40.5387 4.40568 40.2945 4.64978 39.9937 4.64978ZM44.8987 4.64978C44.5979 4.64978 44.3537 4.40568 44.3537 4.10478C44.3537 3.80398 44.5979 3.55978 44.8987 3.55978C45.1996 3.55978 45.4437 3.80398 45.4437 4.10478C45.4437 4.40568 45.1996 4.64978 44.8987 4.64978Z" fill="white" />
    <path d="M42.4463 16.9126H43.2638V19.6376C43.2638 20.39 43.8737 21.0001 44.6263 21.0001C45.379 21.0001 45.9888 20.39 45.9888 19.6376V16.9126H46.5338C47.4331 16.9126 48.1688 16.1768 48.1688 15.2776V7.10254H42.4463V16.9126Z" fill="white" />
    <path d="M45.5436 1.74966L46.279 0.40326C46.3513 0.27106 46.3025 0.105659 46.1706 0.0334593C46.0387 -0.0387407 45.8727 0.00975966 45.8008 0.14186L45.0719 1.47606C44.2849 1.06846 43.3938 0.834559 42.4463 0.834559V6.55716H48.1688C48.1688 4.53896 47.1216 2.76856 45.5436 1.74966ZM44.8988 4.64966C44.598 4.64966 44.3538 4.40546 44.3538 4.10466C44.3538 3.80376 44.598 3.55966 44.8988 3.55966C45.1997 3.55966 45.4438 3.80376 45.4438 4.10466C45.4438 4.40546 45.1997 4.64966 44.8988 4.64966Z" fill="white" />
    <path d="M50.0764 6.82959C49.3237 6.82959 48.7139 7.43969 48.7139 8.19209V13.6421C48.7139 14.3945 49.3237 15.0047 50.0764 15.0047C50.829 15.0047 51.439 14.3945 51.439 13.6421V8.19209C51.439 7.43969 50.829 6.82959 50.0764 6.82959Z" fill="white" />
</svg>