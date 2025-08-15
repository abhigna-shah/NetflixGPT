import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("screens/Login/Login.tsx"),
  route("browse", "screens/Browse/Browse.tsx"),
] satisfies RouteConfig;
