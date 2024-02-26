import Navigation from "@/components/navigation";
import { Locale, i18n } from "@/i18n-config";
import "../../globals.css";

export default function NavbarLayout({
    params: { lang },
    children,
}: {
    params: { lang: Locale },
    children: React.ReactNode
}) {
    return (
        <>
            <Navigation lang={lang} />
            {children}
        </>
    );
}
