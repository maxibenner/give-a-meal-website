import Footer from "@/components/footer";
import "./globals.css";
import Navigation from "@/components/navigation";

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
      <body>
        <Navigation />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>




  );
}
