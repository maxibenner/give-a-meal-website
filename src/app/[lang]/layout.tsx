import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import "../globals.css";
import Script from 'next/script'
import { Locale, i18n } from "@/i18n-config";


export const metadata = {
  title: "Give a Meal",
  description:
    "We combat food insecurity and fostering an environment of connection and compassion in local communities.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <Script id="google-tag-manager" defer={true}>
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5XJTLZGM');
        `}
      </Script>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XJTLZGM" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <Navigation lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
