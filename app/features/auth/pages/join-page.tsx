import { Button } from "~/common/components/ui/button";
import { Form, Link } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant="default" asChild className="absolute right-8 top-8 ">
        <Link to="/auth/login">로그인</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">회원가입</h1>
        <Form className="w-full space-y-4">
          <InputPair label="이름" name="name" id="name" required type="text" />
          <InputPair
            id="email"
            label="이메일"
            name="email"
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
            회원가입
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
