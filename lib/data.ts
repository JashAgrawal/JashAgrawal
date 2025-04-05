import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
SiTypescript;
import {
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiBlockchaindotcom,
  SiCivicrm,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
//@ts-ignore
import Autobackend from "@/public/autobackend.png";
//@ts-ignore
import VV from "@/public/vangaurd_vogue.png";
//@ts-ignore
import SP from "@/public/sp.png";
//@ts-ignore
import IW from "@/public/iw.png";
//@ts-ignore
import EzzCopy from "@/public/ezz.png";
//@ts-ignore
import SummarizeAI from "@/public/summarize.png";
//@ts-ignore
import SlidesAI from "@/public/slides.png";
//@ts-ignore
import Mailer from "@/public/mailer.png";
//@ts-ignore
import StartupAI from "@/public/Startup.png";
//@ts-ignore
import FriendsTV from "@/public/friends.png";

export const skillsDataMap = [
  { text: "CRM", icon: React.createElement(SiCivicrm), color: "#3178c6" },
  { text: "HTML", icon: React.createElement(FaHtml5), color: "#e34c26" },
  { text: "CSS", icon: React.createElement(FaCss3Alt), color: "#264de4" },
  {
    text: "JavaScript",
    icon: React.createElement(SiJavascript),
    color: "#f7df1e",
  },
  {
    text: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#3178c6",
  },
  { text: "React", icon: React.createElement(FaReact), color: "#61dbfb" },
  {
    text: "React Native",
    icon: React.createElement(TbBrandReactNative),
    color: "#61dbfb",
  },
  { text: "Next.js", icon: React.createElement(SiNextdotjs), color: "#38bdf8" },
  { text: "Node.js", icon: React.createElement(FaNodeJs), color: "#68a063" },
  { text: "Git", icon: React.createElement(FaGitAlt), color: "#f34f29" },
  {
    text: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    color: "#38b2ac",
  },
  { text: "Prisma", icon: React.createElement(SiPrisma), color: "#38bdf8" },
  { text: "MongoDB", icon: React.createElement(SiMongodb), color: "#4ea94b" },
  { text: "Redux", icon: React.createElement(SiRedux), color: "#764abc" },
  { text: "Express", icon: React.createElement(SiExpress), color: "#38bdf8" },
  { text: "SQL", icon: React.createElement(SiMysql), color: "#4479a1" },
  { text: "Python", icon: React.createElement(FaPython), color: "#3776ab" },
  {
    text: "Web3",
    icon: React.createElement(SiBlockchaindotcom),
    color: "#00a1d9",
  },
];
export const skills = Object.fromEntries(
  skillsDataMap.map((skill) => [skill.text.toLowerCase(), skill])
);
export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full stack Developer Intern",
    company: "Brained",
    location: "Remote",
    description:
      "Developed resilient Restful APIs with NodeJS, adeptly managing MongoDB and SQL databases. Proficient in Git for efficient project management. Collaborated with cross-functional teams to integrate APIs with ReactJS and Redux frontend. Skilled in client communication, translating business needs into tech solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "04/2021 - 10/2021",
  },
  {
    title: "Web Devleopment Intern",
    company: "The Sparks Foundation",
    location: "Remote",
    description:
      "Utilized MongoDB, Express, React, and Node.js to craft a dynamic application seamlessly integrating frontend and backend. Implemented RESTful APIs for efficient frontend-backend communication, enabling swift data retrieval and storage. Employed Git for version control to uphold codebase integrity",
    icon: React.createElement(LuGraduationCap),
    date: "11/2022 - 12/2022",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Refr",
    location: "Remote",
    description: `Built interactive, responsive pixel-perfect UIs for a complete
mobile app from scratch. Developed a social recommendation app that lets users earn
credits that can be used as cash in the app. Developed a vendor-side web app for businesses listed in the
social recommendation app.
`,
    icon: React.createElement(CgWorkAlt),
    date: "07/2023 - 10/2023",
  },
  {
    title: "Free Lancer",
    company: "Jash Agrawal Tech",
    location: "Remote",
    description: `As a freelancer, I utilized MongoDB, Express, React, and Node.js to create dynamic applications that seamlessly integrated frontend and backend functionality. Implemented RESTful APIs for efficient communication and employed Git for version control to ensure codebase integrity. I am open to new opportunities`,
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 03/2024",
  },
  {
    title: "Full stack Developer",
    company: "VSure Consultancy",
    location: "Remote",
    description:
      "Developed robust,scalable web solutions for clients with NextJs, PostgreSql, and much more. Proficient in Git for efficient project management. Collaborated with cross-functional teams to integrate APIs with ReactJS and Redux frontend. Skilled in client communication, translating business needs into tech solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AutoBackend",
    description:
      "I worked on this awesome startup project for 6 years.Where Users can automatically generate complete backend code with database queries",
    tags: [
      skills["react"],
      skills["redux"],
      skills["next.js"],
      skills["node.js"],
      skills["sql"],
    ],
    imageUrl: Autobackend,
    link: "https://autobackend.vercel.app/",
    di: 1,
  },
  {
    title: "StartupAI",
    description:
      "An AI tool that analyzes startup ideas, covering market, legal, growth, and funding aspects, with role-specific AI advisors for tailored insights.",
    tags: [skills["react"], skills["tailwind"], skills["gemini"]],
    imageUrl: StartupAI,
    link: "https://startup.jashagrawal.in/",
    di: 3,
  },
  {
    title: "Mailer",
    description:
      "An advanced email marketing platform for creating sender accounts, designing dynamic templates, managing lists, sending emails, and tracking opens.",
    tags: [skills["react"], skills["tailwind"], skills["node.js"]],
    imageUrl: Mailer,
    link: "https://mailer.jashagrawal.in/",
    di: 4,
  },
  {
    title: "EzzCopy",
    description:
      "A simple yet effective key-value pair manager where users can store values under specific keys and copy them with a single click, making it perfect for quick access to frequently used data.",
    tags: [skills["react"], skills["tailwind"]],
    imageUrl: EzzCopy,
    link: "https://ezzcopy.jashagrawal.in/",
    di: 11,
  },
  {
    title: "SummarizeAI",
    description:
      "An AI-powered summarization tool that allows users to quickly summarize PDFs, documents, web pages, blogs, and YouTube videos using their own API key in a click.",
    tags: [skills["react"], skills["tailwind"], skills["gemini"]],
    imageUrl: SummarizeAI,
    link: "https://summarize.jashagrawal.in/",
    di: 5,
  },
  {
    title: "SlidesAI",
    description:
      "An AI-powered tool that transforms startup ideas into complete, downloadable pitch decks, perfect for effortless investor presentations.",
    tags: [skills["react"], skills["tailwind"], skills["gemini"]],
    imageUrl: SlidesAI,
    link: "https://slides.jashagrawal.in/",
    di: 6,
  },

  {
    title: "Friends TV",
    description:
      "Website to watch Tv Shows and Movies for free. Your go-to platform for streaming anything for free. ",
    tags: [
      skills["react"],
      skills["next.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: FriendsTV,
    link: "https://friends-tv.vercel.app/",
    di: 2,
  },
  {
    title: "Vangaurd Vogue",
    description:
      "Vanguard Vogue: Anime apparel e-commerce site. Collaborated closely with the client to craft a custom interface.",
    tags: [
      skills["react"],
      skills["redux"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: VV,
    link: "https://vangaurd-vogue.vercel.app/",
    di: 7,
  },
  {
    title: "Ielts Wizardz",
    description:
      "Designed and built website for IELTS Wizardz, showcasing their comprehensive study abroad services.",
    tags: [
      skills["react"],
      skills["crm"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: IW,
    link: "https://www.ieltswizardz.com/",
    di: 8,
  },
  {
    title: "Surya Prakash Silk Mills",
    description:
      "Engineered a captivating website for Surya Prakash Silk Mills, meticulously presenting their exquisite range of products.",
    tags: [
      skills["react"],
      skills["next.js"],
      skills["node.js"],
      skills["typescript"],
      skills["tailwind"],
    ],
    imageUrl: SP,
    link: "https://suryaprakashsilkmills.com/",
    di: 9,
  },
];

export const descriptionData = `Hey there, I'm Jash Agrawal, a dedicated Full Stack Developer with a flair for JavaScript, React, Redux, NodeJs, and SQL. With a Bachelor's in Computer Engineering from the University Of Mumbai, I'm all about crafting solutions that make a difference.

Problem-solving is my jam. There's nothing quite like the rush of cracking a tough nut and finding the perfect solution.

Currently, I'm immersed in building a groundbreaking application that aims to revolutionize the way businesses connect with their customers. Picture this: a platform where businesses can list their stores and seamlessly transform our client app into their very own e-commerce powerhouse. Users can browse, order, book appointments, or dive into an educational adventure – all within one app. It's a game-changer, and I'm thrilled to be a part of it.

Outside of coding, you'll find me kicking a football around, hitting the gym, or diving into a gaming session. I believe in the mantra of 'work hard, party hard.'

If you're looking for someone to bring innovation and dedication to your team, or if you just want to chat about exciting opportunities, hit me up! Let's create something amazing together.`;
