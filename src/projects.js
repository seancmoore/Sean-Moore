// Edit this file to add / change projects. Each project becomes a floating 3D card.
// accent: drives the card's color glow. tags: short chips. links: appear in the detail panel.
export const projects = [
  {
    title: "Edgeable",
    subtitle: "Sports Prediction Market Service",
    blurb:
      "Edgeable is my sports prediction market service: I use data and modeling to find an edge in prediction markets, and subscribers get the picks. This portal is the self-serve side of the business. Subscribers log in to check their remaining subscription time; admins see every subscriber's status at a glance. Built on Firebase Auth, Firestore, and Hosting.",
    tags: ["Firebase", "Auth", "Firestore"],
    accent: "#a78bfa",
    links: [{ label: "Visit live", url: "https://edgeable.vip" }],
  },
  {
    title: "EBK",
    subtitle: "Elite Ball Knowledge",
    blurb:
      "A multi-game NFL trivia hub built on ~39,000 player-seasons of nflverse data. Includes an endless Higher/Lower streak game plus Stat Line, Career Path, and an Immaculate-Grid clone. Mobile-first with glassmorphism UI and anime.js motion.",
    tags: ["JavaScript", "Firebase", "Python", "Data"],
    accent: "#38bdf8",
    links: [
      { label: "Play live", url: "https://eliteballknowledge.web.app" },
      { label: "GitHub", url: "https://github.com/seancmoore/ebk" },
    ],
  },
  {
    title: "Outside-the-Box",
    subtitle: "Thinking Certification",
    blurb:
      "A 50-level assessment in which candidates earn a certificate that stamps their problem solving, lateral thinking, and decision making upon completion. A finalist in the 21st annual Stony Brook University Game Programming Competition.",
    tags: ["TypeScript", "Canvas", "Assessment", "SBU finalist"],
    accent: "#f59e0b",
    links: [
      { label: "Play live", url: "https://outside-the-box-game.web.app" },
      { label: "GitHub", url: "https://github.com/seancmoore/outside-the-box-game" },
      { label: "Competition", url: "https://www3.cs.stonybrook.edu/~games/" },
    ],
  },
  {
    title: "Brook Hill Events",
    subtitle: "Summer Program Events Platform",
    blurb:
      "The events platform I built as Program Manager at The Brook Hill Alliance, a summer study-abroad program in NYC. As a coordinator I watched on-campus activities go under-attended: students had no single place to see what was happening or commit to showing up. When I moved up to manager I built one. Schedules and shareable flyers for 70+ sessions and excursions, roster-verified RSVPs, tournament team sign-ups, and a live staff dashboard. Technically simple on purpose; the win was engagement, and the program's on-campus activity reviews rose with it.",
    tags: ["Firebase", "Firestore", "Cloud Functions", "Ops"],
    accent: "#C9A84C",
    links: [
      { label: "Visit live", url: "https://brookhill-events.web.app" },
      { label: "GitHub", url: "https://github.com/seancmoore/brookhill-events" },
    ],
  },
  {
    title: "More soon",
    subtitle: "Work in progress",
    blurb:
      "I'm always building. This slot is a placeholder for the next project. Check back, or reach out if you want to know what I'm working on right now.",
    tags: ["Coming soon"],
    accent: "#34d399",
    links: [],
    placeholder: true,
  },
];

export const profile = {
  name: "Sean Moore",
  tagline: "Developer & founder of Edgeable",
  about:
    "I'm a small-business owner and self-taught developer. I run Edgeable and build web apps: games, data-driven tools, and Firebase-powered products, usually shipping the whole thing end to end, from data pipeline to deployed site.",
  email: "seanchristmoore@gmail.com",
  links: [
    { label: "Email", url: "mailto:seanchristmoore@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/seanchristmoore" },
    { label: "GitHub", url: "https://github.com/seancmoore" },
  ],
};
