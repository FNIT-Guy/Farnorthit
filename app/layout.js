import "./globals.css";

export const metadata = {
  title: "FarNorth IT | Managed IT Services in Cairns",
  description:
    "Expert IT support and managed services in Cairns for businesses across Far North Queensland.",
  keywords: [
    "Cairns IT support",
    "managed IT services Queensland",
    "IT consulting Cairns",
    "business IT solutions",
    "24/7 IT support",
    "Far North Queensland IT"
  ],
  authors: [{ name: "FarNorth IT" }],
  openGraph: {
    title: "FarNorth IT | Professional IT Support in Cairns",
    description:
      "Expert IT support and managed services in Cairns for Far North Queensland businesses.",
    url: "https://farnorthit.com.au",
    siteName: "FarNorth IT",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
