"use client"

import s from "./styles.module.css"
import { useFormStatus } from "react-dom";
import Button from "../button";

export default function SettingsForm(
    {
        children,
        subText,
        action,
        buttonText = "Save"
    }: {
        children: React.ReactNode,
        subText?: React.ReactNode,
        action?: (formData: FormData) => Promise<void>
        buttonText?: string
    }
) {
    return (
        <form action={action} className={s.container}>
            <div className={s.content}>
                {children}
            </div>
            <div className={s.actionBar}>
                <p>{subText}</p>
                {action && <FormSubmitButton>{buttonText}</FormSubmitButton>}
            </div>
        </form>
    )
};

export function SettingsFormGapContainer({ children }: {
    children: React.ReactNode
}) { return <div className={s.gapContainer}>{children}</div> }

function FormSubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();
    return <Button isLoading={pending} aria-disabled={pending}>{children}</Button>
};