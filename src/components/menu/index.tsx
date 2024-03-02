import MenuItem from '../menuItem';
import styles from './styles.module.css';

type MenuItem = {
    label: string;
    link: string;
    active: boolean;
}

export default function Menu({ menuItems }: { menuItems: MenuItem[] }) {
    return (
        <div className={styles.container}>
            {menuItems.map((item, index) => (
                <MenuItem key={index} label={item.label} link={item.link} active={item.active} />
            ))}
        </div>
    )
}