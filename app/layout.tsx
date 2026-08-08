import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminShortcut from "@/components/AdminShortcut";
import ThemeProvider from "@/components/ThemeProvider";
export const metadata = {
  title: "PublishHub",
  description: "Multi-Author Publication Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AdminShortcut />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}