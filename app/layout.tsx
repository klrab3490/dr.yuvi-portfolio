// Import Modules
import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ThemeProvider } from "@components/darkmode/theme-provider";

// Import font
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dr.Yuvaraj Velusamy's Personal Website",
    description: "Made to showcase my work and projects",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={sora.className}>
                <ThemeProvider attribute="class" enableSystem>
                    <Navbar />
                    <div className="px-8 2xl:px-16">
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
