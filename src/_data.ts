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

  location: "Morocco",
  locationLink: "https://www.google.com/maps/place/morocco",

  about:
    "I’m a <strong> CS student </strong> and <strong>full-stack JavaScript/TypeScript developer</strong>,maybe an Arch linux user, linux distros enthousiast  .",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong> in websites databases,  <strong>Deno</strong> for websites hosting."
   ,
 skills: [
    "JavaScript",
    "TypeScript",
"Html",
"Css",
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
        url: "https://www.linkedin.com/in//",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "I’m focused on growing as a <strong> front-end developer</strong> by building sleek, responsive interfaces, exploring <strong>cybersecurity</strong> fundamentals, and sharing my workflow and tips as a <strong> Linux</strong> enthusiast. ",

  projects: [
    {
      title: "",
      active: true,
      description: "",
      links: [
        {
          type: "",
          href: "",
        },
        {
          type: "",
          href: "",
        },
      ],
    },
    {
      title: "",
      active: true,
      description: "",
      links: [
        {
          type: "",
          href: "",
        },
      ],
    },
    {
      title: "",
      active: true,
      description: "",
      links: [
        {
          type: "",
          href: "",
        },
        {
          type: "",
          href: "",
        },
      ],
    },
    {
      title: "",
      active: true,
      description: "",
      links: [
        {
          type: "",
          href: "",
        },
      ],
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