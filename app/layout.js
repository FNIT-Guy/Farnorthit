import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  metadataBase: new URL("https://farnorthit.com.au"),
  title: {
    default: "FarNorth IT | Managed IT Services in Cairns",
    template: "%s | FarNorth IT"
  },
  description:
    "Managed IT services, cybersecurity, cloud systems, and practical IT support for Cairns and Far North Queensland businesses.",
  keywords: [
    "Cairns IT support",
    "managed IT services Cairns",
    "managed IT services Queensland",
    "IT consulting Cairns",
    "cybersecurity Cairns",
    "Microsoft 365 support Cairns",
    "business IT solutions",
    "24/7 IT support",
    "Far North Queensland IT"
  ],
  authors: [{ name: "FarNorth IT" }],
  creator: "FarNorth IT",
  publisher: "FarNorth IT",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "FarNorth IT | Managed IT Services in Cairns",
    description:
      "Managed IT services, cybersecurity, cloud systems, and practical IT support for Cairns and Far North Queensland businesses.",
    url: "https://farnorthit.com.au",
    siteName: "FarNorth IT",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FarNorth IT managed IT services in Cairns"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FarNorth IT | Managed IT Services in Cairns",
    description:
      "Managed IT services, cybersecurity, cloud systems, and practical IT support for Cairns and Far North Queensland businesses.",
    images: ["/assets/images/og-image.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/assets/images/logo.webp",
    apple: "/assets/images/logo.webp"
  },
  category: "technology"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
