import { Link, type MetaFunction } from "react-router";
import { LayoutCard } from "~/features/layouts/components/layout-card";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Hamstory" },
    { name: "description", content: "Welcome to Hamstory" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Best layouts</h2>
          <Button variant="link" asChild className="text-lg p-0 text-cyan-500">
            <Link to="/layouts/explore">Explore all layouts &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <LayoutCard
            id="layoutId"
            username="leejidev"
            layoutImageUrl=""
            avatarUrl="https://github.com/leejidev.png"
            avatarFallback="N"
            title="곰X 1800케이지 자연주의 배치"
            postedAt="12 hours ago"
            tags={["1800x600x600", "natural", "flowers", "bath"]}
            likesCount={120}
          />
        ))}
      </div>
    </div>
  );
}
