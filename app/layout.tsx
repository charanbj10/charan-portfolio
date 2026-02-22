import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charan | Backend Engineer",
  description: "Backend Engineer | Scalable Systems | 15K+ Users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}