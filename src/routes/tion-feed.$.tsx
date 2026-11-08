import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tion-feed/$")({
  beforeLoad: () => {
    throw redirect({ to: "/tion-feed" });
  },
});
