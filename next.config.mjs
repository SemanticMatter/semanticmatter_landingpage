/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesSite = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && !isUserOrOrgPagesSite && repoName
    ? `/${repoName}`
    : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
