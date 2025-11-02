import type { Route } from "./+types/social-complete-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "소셜 인증 | Hamstory" }];
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
