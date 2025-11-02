import type { Route } from "./+types/social-complete-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Social Complete | wemake" },
    { name: "description", content: "Complete social authentication" },
  ];
};

export default function SocialCompletePage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Complete</h1>
    </div>
  );
}
