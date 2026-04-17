import type { Metadata, Viewport } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lighthaus Studio Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
