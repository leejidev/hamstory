import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "소셜 인증 | Hamstory" }];
};

export default function SocialStartPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Start</h1>
    </div>
  );
}
