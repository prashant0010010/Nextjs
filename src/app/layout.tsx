import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Providers } from "./providers";
import Layout from "@/components/Layout";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The E-com",
  description: "Discover the latest trends, reviews, and strategies in the e-commerce world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex w-full bg-black overflow-hidden">
            <Layout>{children}</Layout>
            <GoogleAnalytics gaId="G-1WZV1Q0E63" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
