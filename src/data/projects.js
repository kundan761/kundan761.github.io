import Figma from "../Images/Figma.png"
import Voyawander from "../Images/Voyawander.png"
import Bonvoyage from "../Images/Bonvoyage.png"
import Trendsetter from "../Images/Trendsetter.png"
import Pingify from "../Images/Pingify.png"
import TrackIt from "../Images/TrackIt.png"
import Nextcent from "../Images/NextCent.png"
import { SiHtml5, SiJavascript, SiReact, SiRedux, SiChakraui, SiRazorpay, SiCss, SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiStripe, SiSocketdotio, SiRedis, SiTailwindcss } from "react-icons/si";

export const projectsData = [
  {
    title: "Trendsetter",
    image: Trendsetter,
    desc: "A production-ready fashion marketplace built end-to-end with TypeScript on both frontend and backend. Features JWT auth with refresh tokens, Stripe payments with webhook verification, Cloudinary-powered image management, AI-generated product descriptions via Gemini, and a full admin panel with live analytics.",
    liveLink: "https://trendsetter-six.vercel.app/",
    githubLink: "https://github.com/kundan761/Trendsetter",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Stripe", Icon: SiStripe, color: "text-[#635BFF]" }
    ]
  },
  {
    title: "Pingify",
    image: Pingify,
    desc: "A full MERN-stack real-time chat application with end-to-end encrypted 1:1 messaging, typing indicators, read receipts, message reactions, group chats with role-based permissions, and Redis-powered live notifications.",
    liveLink: "https://pingify-one.vercel.app",
    githubLink: "https://github.com/kundan761/Pingify",
    tech: [
      { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Express", Icon: SiExpress, color: "text-black dark:text-white" },
      { name: "Socket.io", Icon: SiSocketdotio, color: "text-black dark:text-white" },
      { name: "Redis", Icon: SiRedis, color: "text-[#DC382D]" }
    ]
  },
  {
    title: "TrackIt",
    image: TrackIt,
    desc: "A production-ready project management platform with Kanban, List, and Calendar task views, role-based team collaboration, real-time notifications, and visual analytics for tracking project health.",
    liveLink: "https://track-it-kappa-fawn.vercel.app/",
    githubLink: "https://github.com/kundan761/TrackIt",
    tech: [
      { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Redux", Icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" }
    ]
  },
  {
    title: "Nextcent",
    image: Nextcent,
    desc: "A lightweight Figma-inspired design tool clone, built to recreate an intuitive prototyping layout for experimenting with design concepts in a simple, distraction-free interface.",
    liveLink: "https://github.com/kundan761/Nextcent",
    githubLink: "https://github.com/kundan761/Nextcent",
    tech: [
      { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", Icon: SiCss, color: "text-[#1572B6]" }
    ]
  },
  {
    title: "Figma-Design-Clone",
    image: Figma,
    desc: "A hands-on replica of Figma's design workflow — recreating its layout, tool panels, and interface behavior to explore how modern design tools are built.",
    liveLink: "https://bounty-invention-713.netlify.app/",
    githubLink: "https://github.com/kundan761/Figma-Design-Clone",
    tech: [
      { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", Icon: SiCss, color: "text-[#1572B6]" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" }
    ]
  },
  {
    title: "Voyawander",
    image: Voyawander,
    desc: "A travel discovery and booking platform for exploring destinations and planning trips, with integrated Razorpay payments for a seamless booking experience.",
    liveLink: "https://project-quasar-7896.netlify.app/",
    githubLink: "https://github.com/kundan761/Voyawander",
    tech: [
      { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", Icon: SiCss, color: "text-[#1572B6]" },
      { name: "Razorpay", Icon: SiRazorpay, color: "text-[#02042B]" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" }
    ]
  },
  {
    title: "Bon Voyage",
    image: Bonvoyage,
    desc: "An online vacation booking platform offering a curated selection of destinations and accommodations, built to make finding and booking your ideal getaway effortless.",
    liveLink: "https://65ae04d77f6077f381dc06a8--cheery-sprite-5f8d56.netlify.app/",
    githubLink: "https://github.com/kundan761/Bon_Voyage-Travel",
    tech: [
      { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Redux", Icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Chakra-UI", Icon: SiChakraui, color: "text-[#319795]" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" }
    ]
  }
];