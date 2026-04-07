import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Grid Portal",
  description: "Client portal dashboard",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        height: "100%",
        opacity: 1,
        pointerEvents: "auto",
        background: "#f5f4f0",
      }}
    >
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          opacity: 1,
          pointerEvents: "auto",
          background: "#f5f4f0",
          color: "#111827",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {children}
      </body>
    </html>
  );
}

