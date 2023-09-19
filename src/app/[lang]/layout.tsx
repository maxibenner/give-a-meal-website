import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import "../globals.css";
import Script from 'next/script'
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary-server";
import { Metadata } from "next";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata(
  { params }: { params: { lang: Locale } }
): Promise<Metadata> {

  const { pages: { home: { meta } } } = await getDictionary(params.lang)
  return {
    title: meta.title,
    description: meta.description,
    // metadataBase: new URL("https://www.give-a-meal.org"),
    // openGraph: {
    //   images: [{
    //     url: `/assets/images/opengraph-image-${params.lang}.jpg`,
    //     width: 830,
    //     height: 498,
    //   }]
    // }
  }
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
