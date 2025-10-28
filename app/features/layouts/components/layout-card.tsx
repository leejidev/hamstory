import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import layoutSampleImage from "~/assets/images/layout-sample.png";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { HeartIcon } from "lucide-react";

interface LayoutCardProps {
  id: string;
  username: string;
  avatarUrl: string;
  avatarFallback: string;
  title: string;
  postedAt: string;
  tags: string[];
  layoutImageUrl?: string;
  likesCount: number;
}

export function LayoutCard({
  id,
  username,
  avatarUrl,
  avatarFallback,
  title,
  postedAt,
  tags,
  layoutImageUrl,
  likesCount,
}: LayoutCardProps) {
  const handleLike = (layoutId: string) => {
    // 좋아요 처리 로직
    console.log('좋아요 클릭:', layoutId);
    // API 호출, 상태 업데이트 등
  };

  return (
    <Card className="bg-transparent transition-colors hover:bg-accent/50">
      <CardHeader>
        <img src={layoutImageUrl || layoutSampleImage} alt="Layout Image" className="mb-4" />
        <div className="flex items-center justify-between gap-2">
          <Link to={`/layouts/${id}`} className="flex-1">
            <CardTitle>{title}</CardTitle>
          </Link>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="hover:bg-transparent hover:text-current"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLike(id);
              }}
            >
              <HeartIcon style={{ width: '30px', height: '30px' }} />
            </Button>
          </div>
        </div>
        <Link to={`/layouts/${id}`} className="block">
          <div className="flex items-center gap-2 mb-4">
            <Avatar className="size-8 mt-4">
              <AvatarFallback>{avatarFallback}</AvatarFallback>
              <AvatarImage src={avatarUrl} />
            </Avatar>
            <div className="space-x-2 mt-4">
              <span className="text-accent-foreground text-lg">{username}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
        </Link>
      </CardHeader>
      <Link to={`/layouts/${id}`}>
        <CardContent>
          {tags.map((tag) => (
            <Badge variant="outline" key={tag}>{tag}</Badge>
          ))}
        </CardContent>
      </Link>
    </Card>
  );
}