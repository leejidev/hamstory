import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
  return [{ title: "로그인 | Hamstory" }];
};

export default function LoginPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant="default" asChild className="absolute right-8 top-8 ">
        <Link to="/auth/join">회원가입</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">로그인</h1>
        <Form className="w-full space-y-4">
          <InputPair
            label="이메일"
            name="email"
            id="email"
            required
            type="email"
          />
          <InputPair
            id="password"
            label="비밀번호"
            name="password"
            required
            type="password"
          />
          <Button className="w-full" type="submit">
            로그인
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
