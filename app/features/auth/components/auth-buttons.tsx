import { GithubIcon, LockIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Separator } from "~/common/components/ui/separator";

export default function AuthButtons() {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-full flex flex-col items-center gap-5">
        <Separator className="w-full" />
        <span className="text-sm text-muted-foreground uppercase font-medium">
          간편 로그인
        </span>
        {/* <Separator className="w-full" /> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/kakao/start">
            <img
              src="/app/assets/images/kakaotalk-icon.png"
              alt="kakaotalk"
              className="size-4"
            />
            카카오톡
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/github/start">
            <img
              src="/app/assets/images/google-icon.png"
              alt="google"
              className="size-3.5"
            />
            구글
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/otp/start">
            <LockIcon className="size-4" />
            OTP
          </Link>
        </Button>
      </div>
    </div>
  );
}
