import type { NextConfig } from "next";

const cspValue = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data: https://fonts.gstatic.com;
  img-src 'self' data: blob: https: https://*.google-analytics.com https://cdn.sanity.io;
  frame-src 'self' https://my.matterport.com https://www.youtube.com https://www.youtube-nocookie.com https://*.sanity.io;
  connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://*.sanity.io https://*.api.sanity.io https://*.apicdn.sanity.io wss://*.api.sanity.io;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  worker-src 'self' blob:;
  upgrade-insecure-requests;
`.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=()" },
  { key: "Content-Security-Policy", value: cspValue },
];

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/h3o4j0c6/**",
      },
    ],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
