"use client"

import Link from "next/link";
import Button from "../button";
import TextInput from "../textInput";
import s from "./styles.module.css"
import { useState } from "react";
import { auth } from "@/constants/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

export default function MagicLinkForm({ title, emailLabel, buttonLabel, termsLabel, privacyLabel, termsLink, privacyLink, lang }: { title: string, emailLabel: string, buttonLabel: string, termsLabel: string, privacyLabel: string, termsLink: string, privacyLink: string, lang: string }) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const email = (e.target as HTMLFormElement).email.value;
        const link = window.location.origin + "/" + lang + "/donors" + "?email=" + email;
        const actionCodeSettings = {
            url: link,
            handleCodeInApp: true
        };

        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                setLoading(false);
                setEmail(email);
                setSuccess(true);
            })
            .catch((error) => {
                console.log(error.message)
                setLoading(false);
            });
    }

    if (success) return (
        <p className={`body ${s.textContainer}`}>We sent an email to <b>{email}</b>. Check your email and click the link to log in.</p>
    )
    else return (
        <form className={s.form} onSubmit={handleSubmit} method='POST'>
            <h3>{title}</h3>
            <TextInput name="email" label={emailLabel} type="email" />
            <Button large>{buttonLabel}</Button>
            <div className={s.linkContainer}>
                <Link href={termsLink} className="label">{termsLabel}</Link>
                <span className="label">·</span>
                <Link href={privacyLink} className="label">{privacyLabel}</Link>
            </div>
        </form>
    )



}