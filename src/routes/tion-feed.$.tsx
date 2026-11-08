import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/tion/entry"));

export const Route = createFileRoute("/tion-feed/$")({
  head: () => ({
    meta: [
      { title: "Tion Feed — Story Nasution Boy" },
      { name: "description", content: "Story Instagram Nasution Boy Explore Jawa Barat di Tion Feed." },
      { property: "og:title", content: "Tion Feed — Story Nasution Boy" },
      { property: "og:description", content: "Story Instagram Nasution Boy Explore Jawa Barat di Tion Feed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
