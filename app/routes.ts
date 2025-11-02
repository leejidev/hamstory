import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("/auth", [
    layout("features/auth/layouts/auth-layout.tsx", [
      route("/login", "features/auth/pages/login-page.tsx"),
      route("/join", "features/auth/pages/join-page.tsx"),
      ...prefix("/otp", [
        route("/start", "features/auth/pages/otp-start-page.tsx"),
        route("/complete", "features/auth/pages/otp-complete-page.tsx"),
      ]),
      ...prefix("/social/:provider", [
        route("/start", "features/auth/pages/social-start-page.tsx"),
        route("/complete", "features/auth/pages/social-complete-page.tsx"),
      ]),
    ]),
  ]),
  ...prefix("layouts", [
    route("/explore", "features/layouts/pages/explore-layouts-page.tsx"),
    route("/mine", "features/layouts/pages/my-layouts-page.tsx"),
    route("/new", "features/layouts/pages/new-layout-page.tsx"),
    route("/users/:username", "features/layouts/pages/user-layouts-page.tsx"),
    route("/:layoutId", "features/layouts/pages/layout-page.tsx"),
    route("/:layoutId/edit", "features/layouts/pages/layout-editor-page.tsx"),
  ]),
  ...prefix("items", [
    index("features/items/pages/items-page.tsx"),
    route("/:itemId", "features/items/pages/item-page.tsx"),
  ]),
] satisfies RouteConfig;
