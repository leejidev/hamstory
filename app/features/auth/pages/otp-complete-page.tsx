import type { Route } from "./+types/otp-complete-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP 인증 | wemake" }];
};

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">OTP 인증</h1>
          <p className="text-sm text-muted-foreground">
            이메일로 전송된 OTP 코드를 입력해주세요.
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
          <InputPair
            label="OTP 코드"
            name="otp"
            id="otp"
            required
            type="number"
          />
          <Button className="w-full" type="submit">
            로그인
          </Button>
        </Form>
      </div>
    </div>
  );
}
