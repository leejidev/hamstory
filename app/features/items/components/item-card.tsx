import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import itemSampleImage from "~/assets/images/item-sample.png";
import { HeartIcon } from "lucide-react";

interface ItemCardProps {
  id: string;
  brandName: string;
  itemName: string;
  tags: string[];
  itemImageUrl?: string;
}

export function ItemCard({
  id,
  brandName,
  itemName,
  tags,
  itemImageUrl,
}: ItemCardProps) {
  const handleLike = (itemId: string) => {
    // 좋아요 처리 로직
    console.log("좋아요 클릭:", itemId);
    // API 호출, 상태 업데이트 등
  };

  return (
    <Card className="bg-transparent transition-colors hover:bg-accent/50">
      <CardHeader>
        <img
          src={itemImageUrl || itemSampleImage}
          alt="Item Image"
          className="mb-4"
        />
        <div className="flex items-center justify-between">
          <Link to={`/items/${id}`} className="flex-1">
            <CardTitle className="text-lg">{brandName}</CardTitle>
          </Link>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-current"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                handleLike(id);
              }}
            >
              <HeartIcon style={{ width: "30px", height: "30px" }} />
            </Button>
          </div>
        </div>
        <Link to={`/items/${id}`} className="block">
          <div className="flex items-center gap-2 mb-4">
            <div className="space-x-2">
              <span className="text-accent-foreground text-lg">{itemName}</span>
            </div>
          </div>
        </Link>
      </CardHeader>
      <Link to={`/items/${id}`}>
        <CardContent>
          {tags.map(tag => (
            <Badge variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Link>
    </Card>
  );
}
