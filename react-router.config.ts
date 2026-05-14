import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,  //Turn off this github page deployment
  basename: "/Profile/",

  async prerender() {
    return ["/", "/projects"];
  },
} satisfies Config;
