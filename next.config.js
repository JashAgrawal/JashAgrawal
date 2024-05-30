/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
      return [
        {
          source:"/linkedIn",
          destination:'https://www.linkedin.com/in/agrawaljash/',
          permanent: true
        },
        {
          source:"/github",
          destination:'https://github.com/JashAgrawal',
          permanent: true
        },
        {
          source:"/resume",
          destination:'https://drive.google.com/file/d/1Vk3leP9pnI4X5ERl9XOym4garRRbstEY/view?usp=sharing',
          permanent: true
        }
      ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
