// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MGM Vastanvi English School",
  description: "Nurturing Minds, Building Futures. Admission Open for K.G. & Class 1 to 8.",
  keywords: ["English School in Aurangabad", "Kunjkheda School Admission", "MGM Vastanvi"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}