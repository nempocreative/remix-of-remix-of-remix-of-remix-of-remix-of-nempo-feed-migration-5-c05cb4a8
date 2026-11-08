import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/tion/entry"));

export const Route = createFileRoute("/tion-feed/")({
  head: () => ({
    meta: [
      { title: "Nasution Boy Explore Jawa Barat — Tion Feed" },
      { name: "description", content: "Cerita, budaya, dan destinasi Jawa Barat bersama Nasution Boy Explore Jawa Barat." },
      { property: "og:title", content: "Nasution Boy Explore Jawa Barat — Tion Feed" },
      { property: "og:description", content: "Cerita, budaya, dan destinasi Jawa Barat bersama Nasution Boy Explore Jawa Barat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
