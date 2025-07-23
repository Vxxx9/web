 const ascii = `
  ██╗   ██╗ █████╗ ██╗  ██╗██╗   ██╗ █████╗ 
╚██╗ ██╔╝██╔══██╗██║  ██║╚██╗ ██╔╝██╔══██╗
 ╚████╔╝ ███████║███████║ ╚████╔╝ ███████║
  ╚██╔╝  ██╔══██║██╔══██║  ╚██╔╝  ██╔══██║
   ██║   ██║  ██║██║  ██║   ██║   ██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
`;

export const resume = {
  name: "Yahya",
  ascii,

  location: "Morocco, Casablanca",
  locationLink: "https://www.google.com/maps/place/morocco,casablanca",

  about:
    "Welcome to my personal portfolio  I m a <strong>CS student</strong> and a passionate <strong>front-end  JavaScript/TypeScript developer</strong>.I'm also a <strong>Linux distros enthusiast</strong>, maybe even an <strong>Arch Linux</strong> user!",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility not that high level.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong> in website databases, and <strong>Deno</strong> for hosting web .",

  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Deno",
    "Linux",
    "Arch",
    "Git",
  ],

  contact: {
    email: "not.now@pm.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vxxx9",
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Aixx9",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "I plan to continue improving my skills in <strong>JavaScript</strong> and <strong>TypeScript</strong>, and to explore more about <strong>Deno</strong>. I also want to contribute to open-source projects and learn more about web development.and continue exploring and mastring in linux distros inchaalah .",

  projects: [
    {
      title: "analysing",
      active: true,
      description: "",
      links: [
        { type: "", href: "" },
        { type: "", href: "" },
      ],
    },
    {
      title: "analysing",
      active: true,
      description: "",
      links: [{ type: "", href: "" }],
    },
    {
      title: "analysing",
      active: true,
      description: "",
      links: [
        { type: "", href: "" },
        { type: "", href: "" },
      ],
    },
    {
      title: "analysing",
      active: true,
      description: "",
      links: [{ type: "", href: "" }],
    },
  ],
} as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}
