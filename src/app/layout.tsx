import type { Metadata } from "next";
import "./globals.css";
import ClientScripts from "./components/ClientScripts";

export const metadata: Metadata = {
  title: "InsideUni — Real Students. Real Guidance.",
  description: "Talk to real students at your dream university. Get honest answers about admissions, scholarships, student life — no consultancy bias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300;1,9..144,500;1,9..144,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Custom cursor */}
        <div id="cur" />
        <div id="cur-r" />
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
