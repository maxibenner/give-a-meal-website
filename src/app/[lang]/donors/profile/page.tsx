import ActionItem from "@/components/actionItem";
import Button from "@/components/button";
import TextInput from "@/components/textInput";
import s from "./styles.module.css"
import { supabaseService } from "@/lib/supabase"

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined }; }) {
    const userId: string = searchParams?.uid || "";
    const displayNameActionElements = <Button>Save</Button>
    const emailActionText = <p className={s.actionText}>If you need to change your email, please contact us at <a href="">max@give-a-meal.org</a></p>

    let userName = "";
    let userEmail = "";

    // Get donations by donor id
    const { data, error } = await supabaseService
        .from('profiles')
        .select('first_name, email, auth_id')
        .eq('auth_id', userId)
        .single();

    console.log(data)

    if (data) {
        userName = data.first_name;
        userEmail = data.email;
    }

    return (
        <div className={s.container}>
            <ActionItem actionElements={displayNameActionElements}>
                <p className="body_l_bold">Display Name</p>
                <p>Please enter your full name, or a display name you are comfortable with. This will be displayed on donations you make.</p>
                <TextInput defaultValue={userName} small className={s.textInput} />
            </ActionItem>
            <ActionItem actionText={emailActionText}>
                <p className="body_l_bold">Email</p>
                <p>Please enter the email address you want to use to log in with Give a Meal.</p>
                <TextInput disabled defaultValue={userEmail} small className={s.textInput} />
            </ActionItem>
        </div>
    )
}