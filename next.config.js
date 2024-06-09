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
          destination:'https://drive.google.com/file/d/1NLJ-RXEM3u-oVF-o4wlwehA8pBs6tb9K/view?usp=sharing',
          permanent: true
        },
        {
          source:"/autobackend",
          destination:'https://autobackend.vercel.app/',
          permanent: true
        },
        {
          source:"/cjflixx",
          destination:'https://cjflixx.vercel.app/',
          permanent: true
        },
        {
          source:"/vangaurd-vogue",
          destination:'https://vangaurd-vogue.vercel.app/',
          permanent: true
        },
        {
          source:"/ielts-wizardz",
          destination:'https://www.ieltswizardz.com/',
          permanent: true
        },
        {
          source:"/sp-mills",
          destination:'https://suryaprakashsilkmills.com/',
          permanent: true
        },

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
