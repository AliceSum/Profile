import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("projects", "routes/projects.tsx"),route("weather", "routes/weather.tsx")] satisfies RouteConfig;
