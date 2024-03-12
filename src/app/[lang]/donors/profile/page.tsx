import SettingsForm, { SettingsFormGapContainer } from "@/components/settingsForm";
import TextInput from "@/components/textInput";
import { supabaseService } from "@/lib/supabase";
import s from "./styles.module.css";
import { updateProfileName } from "@/lib/actions";
import { Locale } from "@/i18n-config";

export default async function Page({
    searchParams,
    params: { lang }
}: {
    searchParams?: { [key: string]: string | undefined },
    params: { lang: Locale }
}) {
    const userId: string = searchParams?.uid || "";

    // Get donations by donor id
    const { data, error } = await supabaseService
        .from('profiles')
        .select('first_name, email, auth_id')
        .eq('auth_id', userId)
        .single();

    if (!data || error) throw new Error("Error getting user data");;



    return (
        <div className={s.container}>
            <SettingsForm action={updateProfileName}>
                <SettingsFormGapContainer>
                    <p className="body_l_bold">Display Name</p>
                    <p>Please enter your full name, or a display name you are comfortable with. This will be displayed on donations you make.</p>
                    <TextInput maxLength={24} defaultValue={data.first_name} small name="profileName" className={s.textInput} />
                </SettingsFormGapContainer>
                <TextInput hidden defaultValue={lang} name="lang" />
            </SettingsForm>
            <SettingsForm subText={<EmailActionText />}>
                <SettingsFormGapContainer>
                    <p className="body_l_bold">Email</p>
                    <p>Please enter the email address you want to use to log in with Give a Meal.</p>
                    <TextInput disabled defaultValue={data.email} small className={s.textInput} />
                </SettingsFormGapContainer>
            </SettingsForm>
        </div>
    )
}

function EmailActionText() {
    return (
        <span className={s.actionText}>
            If you need to change your email, please contact us at {" "}
            <a className={s.link} href="mailto:max@give-a-meal.org">
                max@give-a-meal.org
            </a>
        </span>
    )
}