import ListItem from "@/components/listItem";
import { supabaseService } from "@/lib/supabase";
import s from "./styles.module.css";
import { getDictionary } from "@/get-dictionary-server";
import { Locale } from "@/i18n-config";

export const revalidate = 0

export default async function Page({ searchParams, params: { lang } }: { searchParams?: { [key: string]: string | undefined }, params: { lang: Locale } }) {

    const { pages: { donors } } = await getDictionary(lang)

    let userEmail = searchParams?.email || "";

    // Get donations by donor id
    const { data: donations } = await supabaseService
        .from('donations')
        .select('*, donated_by!inner(first_name, email, auth_id), item_id(title), business_id(business_name)')
        .eq('donated_by.email', userEmail);

    return (
        <div className={s.container}>
            <h4>{donors.donations.title} {donations && "(" + donations.length + ")"}</h4>
            <div className={s.donationsContainer}>
                {donations?.map((donation) =>
                    <ListItem
                        key={donation.id}
                        title={donation.item_id.title}
                        date={donation.created_at}
                        text={donation.business_id.business_name}
                        chip={donation.redeemed_at ? donors.donations.donationElement.badge.claimed : null}
                    />
                )}
                {!donations || donations.length === 0 ? <p className={s.placeholder}>No donations, yet. Provide your email address when you donate to track your giving here.</p> : null}
            </div>
        </div>
    )
}