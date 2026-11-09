import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ggs-price-list/$")({
  beforeLoad: () => {
    throw redirect({ to: "/ggs-price-list" });
  },
});
