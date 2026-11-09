import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/ggs-price/entry"));

export const Route = createFileRoute("/ggs-price-list/")({
  head: () => ({
    meta: [
      { title: "Price List GGS Beauty Salon & Spa — A4 Cetak" },
      { name: "description", content: "Daftar harga GGS Beauty Salon & Spa Garut ukuran A4 siap cetak: nail art, hair & style, treatment, massage." },
      { property: "og:title", content: "Price List GGS Beauty Salon & Spa — A4 Cetak" },
      { property: "og:description", content: "Daftar harga GGS Beauty Salon & Spa Garut ukuran A4 siap cetak." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
