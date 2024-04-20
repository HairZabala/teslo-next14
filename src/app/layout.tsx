import { NProgressComponent } from "@/components/ui/NProgress";
import { primaryFont } from "@/utils/font";
import { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "My Teslo app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <Suspense>
          <NProgressComponent />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
