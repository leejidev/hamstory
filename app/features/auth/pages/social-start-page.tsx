import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Social Start | wemake" },
    { name: "description", content: "Start social authentication" },
  ];
};

export default function SocialStartPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Start</h1>
    </div>
  );
}
