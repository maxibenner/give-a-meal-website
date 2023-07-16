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
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
