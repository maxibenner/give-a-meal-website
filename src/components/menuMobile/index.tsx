import MenuItemMobile from '../menuItemMobile';
import styles from './styles.module.css';

type MenuItem = {
    label: string;
    link: string;
}

/**
 * Renders a menu component.
 * Adds activity state based on the current route.
 * @param {MenuItem[]} menuItems - The array of menu items.
 * @returns {JSX.Element} The rendered menu component.
 */
export default function MenuMobile({ menuItems, className }: { menuItems: MenuItem[], className?: string }) {

    return (
        <div className={`${styles.container} ${className}`}>
            {menuItems.map((item, index) => (
                <MenuItemMobile
                    key={index}
                    label={item.label}
                    link={item.link}
                />
            ))}
        </div>
    )
}