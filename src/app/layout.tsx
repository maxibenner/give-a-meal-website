import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: "Give a Meal",
  description:
    "We combat food insecurity and fostering an environment of connection and compassion in local communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RHC4VS4EDR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RHC4VS4EDR');
        `}
      </Script>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
