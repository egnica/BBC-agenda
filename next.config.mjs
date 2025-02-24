/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/BusinessBankingConference_2025/agenda",
  assetPrefix: "/BusinessBankingConference_2025/agenda",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mybarlow.barlowresearch.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
