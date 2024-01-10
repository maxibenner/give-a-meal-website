import styles from "./styles.module.css"

export type PartnerData = any[]

export default function PartnerMap() {

    // TODO: Get partner data
    const partnerData: PartnerData = []

    return (
        <div className={styles.wrapper}>
            <ListView data={partnerData} />
            <Map data={partnerData} />
        </div>
    );
}

function ListView({ data }: { data: PartnerData }) {
    return (
        <div>
            <SearchBar />
            <h3>Results</h3>
            <List data={data} />
        </div>
    );
}

function SearchBar() {
    return <input placeholder="Enter Your Address" />;
}

function List({ data }: { data: PartnerData }) {
    return null;
}

function ListElement() {
    return null;
}

function Map({ data }: { data: PartnerData }) {
    return null;
}