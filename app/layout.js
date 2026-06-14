import "./globals.css";

export const metadata = {
  title: "AirShine — Aviation-Grade Aircraft Cleaning & Detailing",
  description:
    "Premium, fully insured cleaning and detailing for private jets and business aircraft. Aviation-safe, OEM-compatible products and a before/after report on every job.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
