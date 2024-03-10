import ListItem from "@/components/listItem";
import { supabaseService } from "@/lib/supabase";
import s from "./styles.module.css";

export const revalidate = 0

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined }; }) {

    const userId: string = searchParams?.uid || "";
    let userEmail = searchParams?.email || "";


    // Get donations by donor id
    const { data: donations, error } = await supabaseService
        .from('donations')
        .select('*, donated_by!inner(first_name, email, auth_id), item_id(title), business_id(business_name)')
        .eq('donated_by.email', userEmail);

    return (
        <div>
            <h4>Donations {donations && "(" + donations.length + ")"}</h4>
            <div className={s.donationsContainer}>
                {donations?.map((donation) =>
                    <ListItem
                        key={donation.id}
                        title={donation.item_id.title}
                        date={donation.created_at}
                        text={donation.business_id.business_name}
                        chip={donation.redeemed_at ? "Claimed" : null}
                    />
                )}
            </div>
        </div>
    )
}