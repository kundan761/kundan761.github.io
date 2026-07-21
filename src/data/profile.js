import Kundan_Kumar_Suraj_Resume from "../files/Kundan_Suraj_Resume.pdf";

export const profile = {
  name: 'Kundan Kumar Suraj',
  shortName: 'Kundan',
  titles: [
    'Software Engineer',
    'Full Stack Developer',
    'System Design Enthusiast',
    'Backend Developer',
    'API Developer',
  ],
  summary:
    "Software Engineer with 2+ years of experience building scalable systems, optimizing performance, and shipping full-stack products end-to-end.",
  email: 'kundankumarsuraj761@gmail.com',
  phone: '+91 9113757543',
  location: 'Bengaluru, Karnataka · India',
  socials: {
    github: 'https://github.com/kundan761',
    linkedin: 'https://www.linkedin.com/in/kundan-kumar-suraj',
    whatsapp: 'https://wa.me/919113757543',
    twitter: 'https://twitter.com/@Kundan_761',
  },
  resumeUrl: Kundan_Kumar_Suraj_Resume,
  handles: {
    leetcode: 'https://leetcode.com/u/Kundan_761',
    hackerrank: 'https://www.hackerrank.com/profile/kundankumarsura1',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // { label: 'Open Source', href: '#open-source' }, //Uncomment it when comment the Projects
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' }, // While removing this make sure to remove id as well and keep it in skill
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
