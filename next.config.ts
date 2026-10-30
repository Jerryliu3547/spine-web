import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
// When deploying to GitHub Pages without a custom domain, GitHub serves from /<repo-name>
const defaultBasePath = isGithubActions && !isCustomDomain ? "/spine-web" : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? defaultBasePath;

const isExport = isGithubActions || process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: basePath ? basePath : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Rewrites are only for dynamic Node dev server and not supported with static export
  ...(isExport
    ? {}
    : {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: "http://127.0.0.1:8000/api/:path*",
            },
          ];
        },
      }),
};

export default nextConfig;
