import { Dict } from "../..";
import styles from "./styles.module.css"

interface ListViewItemProps extends React.HTMLAttributes<HTMLDivElement> {
    dict: Dict["listItems"] | undefined;
    business: any;
    isFocused?: boolean;
}

export function ListViewItem({ business, isFocused, dict, ...rest }: ListViewItemProps) {
    const mealText = business.donation_count === 1 ? dict?.mealsSingular : dict?.mealsPlural;

    return (
        <div className={`${styles.container} ${isFocused && styles.isFocused}`} {...rest}>
            <p className="body_bold">{business.business_name}</p>
            <p className="body_s">{business.street_number + " " + business.address}</p>
            <div className={styles.donationContainer}>
                <p className="body_s_bold">{business.donation_count}</p>
                <p className="body_s">{mealText}</p>
            </div>
        </div>
    )
}