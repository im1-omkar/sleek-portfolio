import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.penguin.co.uk",
        pathname: "/dam-assets/books/9780140146905/9780140146905-jacket-large.jpg",
        search: "",
      },
    ],
  },
};

export default nextConfig;
