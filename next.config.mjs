/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS === "true"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/UnitedShieldRemodeling" : "",
  assetPrefix: isProd ? "/UnitedShieldRemodeling/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig