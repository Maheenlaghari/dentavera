import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentaVera Dental Care | Surgical Implantology Center",
  description: "High precision surgical dentistry and immediate load dental implantology directed by Dr. Maxim Bocharov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
