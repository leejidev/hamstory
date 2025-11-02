import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-start-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP 인증 | Hamstory" }];
};

export default function OtpStartPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">OTP 인증</h1>
          <p className="text-sm text-muted-foreground">
            인증을 위한 4자리 OTP 코드를 이메일로 전송합니다.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            label="이메일"
            name="email"
            id="email"
            required
            type="email"
          />
          <Button className="w-full" type="submit">
            OTP 코드 전송
          </Button>
        </Form>
      </div>
    </div>
  );
}
