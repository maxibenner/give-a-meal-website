import styles from "./styles.module.css"
import { ListViewItem } from "./listViewItem"
import { NearbyRestaurantsContext } from "../Context"
import { useContext } from "react"
import Loader from "@/components/loader"
import { Dict } from ".."

export default function ListView({ dict }: { dict?: Dict }) {
    const { businesses, selectedBusiness, setSelectedBusiness, bounds } = useContext(NearbyRestaurantsContext)

    function handleSelectLocation(business: any, i: number) {
        setSelectedBusiness({ business: business, index: i })
    }

    /**
     * Chooses between loading state / empty state / list state
     * @param businesses An array of businesses
     */
    function businessesSwitcher(businesses: any) {
        if (!businesses) {
            return (
                <div className={styles.loadingContainer}>
                    <Loader />
                </div>
            )
        } else {
            if (businesses.length) {
                return (
                    <div className={styles.scrollContainer}>
                        <p className="body_l_bold">{dict?.listTitle}</p>
                        {businesses.map((business: any, i: number) => <ListViewItem dict={dict?.listItems} onClick={() => handleSelectLocation(business, i)} business={business} key={business.id} isFocused={i === selectedBusiness?.index} />)}
                    </div>
                )
            } else {
                return (
                    <div className={styles.emptyContainer}>
                        <p className="body_l_bold">{dict?.listTitleEmpty}</p>
                        <p>{dict?.listSubEmpty}</p>
                    </div>
                )
            }
        }
    }

    return (
        <div className={styles.container}>
            {businessesSwitcher(businesses)}
        </div>
    )
}