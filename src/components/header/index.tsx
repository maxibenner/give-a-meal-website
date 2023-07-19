import styles from './styles.module.css';
import Image from 'next/image';
import Tomato from '@/public/assets/tomato.svg';
import Cucumber from '@/public/assets/cucumber.svg';
import Onion from '@/public/assets/onion.svg';

export default function Header({ title, className, variant }: { title: string, className?: string, variant?: 1 | 2 | 3 }) {

    if (variant === 1) return (
        <div className={`${styles.container} ${className}`}>
            <Image className={styles.imageOne} src={Cucumber} alt="cucumber" width={377} height={430} />
            <Image className={styles.imageTwo} src={Tomato} alt="tomato" width={287} height={420} />
            <h1>{title}</h1>
        </div>
    )
    else if (variant === 2) return (
        <div className={`${styles.container} ${className}`}>
            <Image className={styles.imageTwo} src={Tomato} alt="tomato" width={285} height={420} />
            <Image className={styles.imageOne} src={Tomato} alt="tomato" width={287} height={420} />
            <h1>{title}</h1>
        </div>
    )
    else if (variant === 3) return (
        <div className={`${styles.container} ${className}`}>
            <Image className={styles.imageOne} src={Onion} alt="onion" width={377} height={430} />
            <Image className={styles.imageTwo} src={Onion} alt="onion" width={287} height={420} />
            <h1>{title}</h1>
        </div>
    )
    else return (
        <div className={`${styles.container} ${className}`}>
            <Image className={styles.imageOne} src={Cucumber} alt="cucumber" width={377} height={430} />
            <Image className={styles.imageTwo} src={Cucumber} alt="cucumber" width={377} height={430} />
            <h1>{title}</h1>
        </div>
    )

}