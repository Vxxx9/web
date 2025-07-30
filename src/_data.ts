const ascii = `Youkoso, to my portfolio!
`;

export const resume = {
  name: "Yahya",
  ascii,

  location: "Morocco, Casablanca",
  locationLink: "https://www.google.com/maps/place/morocco,casablanca",

  about:
    "I’m a <strong>CS student</strong> and a <strong>front-end</strong> focuser , maybe a beginner developer. I'm also a <strong>Linux distros enthusiast</strong>, maybe an <a href='https://archlinux.org/' target='_blank' class='underline break-all' style='color: #8fc8f9ec'>Arch</a> daily user!",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility, not that high level.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong> in website databases, and <strong>Deno</strong> for hosting web.",

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
    email: "yvxxx9@gmail.com",
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
        url: "https://www.linkedin.com/in/YahyaYX", 
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "Diving into linux distros universe starting from <strong>Fedora</strong> to <strong>Arch</strong>, <strong>Parrot OS</strong>, and I want to develop my web development skills to mastering — why not, inchaAllah.",

  projects: [
    {
      title: "Private Project",
      active: false,
      description: "I prefer not to say",
      links: [],
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
