// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  wordpress,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project7,
  user1,
  user2,
  user3,
  github,
  facebook,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "IT Support / Technical Support",
    company_name: "CÔNG TY TNHH TƯ VẤN & ĐÀO TẠO ĐẠI DƯƠNG",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2025 - Dec 2025",
    points: [
      "Set up and maintained 20+ Windows-based development environments.",
      "Installed and configured development tools including VS Code, MySQL, and XAMPP.",
      "Troubleshot software, system, and LAN issues for internal users.",
      "Configured IP addressing and basic network settings for office systems.",
    ],
  },
] as const;
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;
// Projects
export const PROJECTS = [
  {
    name: "Rental Room Management",
    description:
      "Room posting & search portal for renters: view room details, filter by price/area, save favorites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/HungggAnhh/QLphongtro",
  },
  {
    name: "Clothing store",
    description:
      "E-commerce system with user roles, product management, orders, statistics and MoMo payment.",
    tags: [
      {
        name: "Lavarel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/HungggAnhh/Flatshop",
  },
  {
    name: "Loopup",
    description:
      "Building a website using WordPress allows users to view and upload their products to the site.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "flatsome",
        color: "green-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "",
    live_site_link: "https://choping-133a329.ingress-alpha.ewp.live/",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/HungggAnhh",
  },
    {
    name: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/vo.mai.hung.anh.2024/",
  },
] as const;
