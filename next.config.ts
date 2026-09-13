import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  },
  async redirects() {
    return [
      { source: "/capabilities", destination: "/services", permanent: true },
      { source: "/studios", destination: "/services", permanent: true },
      { source: "/studios/capabilities", destination: "/services", permanent: true },
      { source: "/studios/slot-studio", destination: "/services#game-production", permanent: true },
      { source: "/studios/engineering", destination: "/technology", permanent: true },
      { source: "/studios/live-casino-studio", destination: "/services#live-casino", permanent: true },
      { source: "/services/live-casino-development", destination: "/services#live-casino", permanent: true }
    ];
  }
};

export default nextConfig;
