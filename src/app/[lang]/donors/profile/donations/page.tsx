import { supabaseService } from "@/lib/supabase";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined }; }) {

    const userId: string = searchParams?.uid || "";

    // Get donations by donor id
    const { data: donations, error } = await supabaseService
        .from('donations')
        .select('*, donated_by!inner(first_name, email, auth_id), item_id(title)')
        .eq('donated_by.auth_id', userId);

    return (
        <div>
            <p>Donations</p>
            <div>
                {donations?.map((donation) => <p>{donation.item_id.title}</p>)}
            </div>
        </div>
    )
}