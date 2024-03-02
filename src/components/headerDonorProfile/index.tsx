import styles from './styles.module.css';

export default async function HeaderDonorProfile({ title }: { title: string }) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    )
}