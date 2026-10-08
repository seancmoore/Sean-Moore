// Edit this file to add / change projects. Each project becomes a row in the Work accordion.
//
// Fields per project:
//   title, subtitle   row header
//   meta              short facts shown above the blurb: role, dates, status
//   blurb             the story, one paragraph
//   tags              short chips
//   accent            the color the blob turns when the row is hovered
//   links             buttons; the first one is solid, the rest are ghost
//   sections          optional sub-blocks inside the row: { heading, text, tags, links }
//   placeholder       true = "nothing to show" row
export const projects = [
  {
    title: "EBK",
    subtitle: "Elite Ball Knowledge",
    meta: ["Solo build", "2026", "Live, six sports"],
    blurb:
      "A trivia platform covering six sports: the NFL, college football, the NBA, MLB, the NHL, and the Premier League. Each sport gets the same set of games, including a daily player grid, an endless higher/lower streak game, and head-to-head rooms. Accounts, leaderboards, and rarity scoring run on Firebase. Every game draws on real player-season stats from a data pipeline built per league, and the same data feeds the content pipeline below.",
    tags: ["JavaScript", "Firebase", "Data"],
    accent: "#38bdf8",
    links: [
      { label: "Play live", url: "https://eliteballknowledge.web.app" },
      { label: "GitHub", url: "https://github.com/seancmoore/ebk" },
    ],
    sections: [
      {
        heading: "Content pipeline",
        text:
          "EBK publishes its own content. The pipeline takes the game's data, like daily grid results and how often each player gets picked, and turns it into short-form video with headless Chromium and ffmpeg. Videos post automatically to Instagram and YouTube Shorts, and the YouTube channel is past 175 uploads. How each batch performs decides what goes into the next one.",
        tags: ["Headless Chromium", "ffmpeg", "YouTube Shorts", "Instagram"],
        links: [
          { label: "Watch on YouTube", url: "https://www.youtube.com/channel/UCqfMhumbXkyvJACM_kr3KAQ" },
          { label: "Instagram", url: "https://www.instagram.com/elite.ball.knowledge/" },
        ],
      },
    ],
  },
  {
    title: "Outside-the-Box",
    subtitle: "Thinking Certification",
    meta: ["Stony Brook", "2025 to 2026", "Competition finalist"],
    blurb:
      "A browser puzzle game framed as a 50-question certification exam, with onboarding, timed sections, proctor feedback, and a certificate at the end. Every question punishes the obvious answer and rewards lateral thinking. It was a finalist in the Stony Brook Game Development Club's 21st Annual Game Development Competition, and all 50 levels are live.",
    tags: ["HTML5 Canvas", "TypeScript", "Puzzle", "SBU finalist"],
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
    meta: ["Program Activities Manager", "Summer 2026", "Live"],
    blurb:
      "The Brook Hill Alliance runs a study-abroad program that brings about 1,500 students to St. John's University each summer. On-campus activities had low turnout because there was no single place to see what was on or commit to going. After I was promoted to Program Activities Manager, I built and launched one. It handles schedules and shareable flyers for 70+ sessions and excursions, roster-verified RSVPs, tournament registration, song requests, and a staff dashboard with live rosters. Attendance and activity reviews both went up.",
    tags: ["Firebase", "Firestore", "Cloud Functions", "Ops"],
    accent: "#C9A84C",
    links: [
      { label: "Visit live", url: "https://brookhill-events.web.app" },
      { label: "GitHub", url: "https://github.com/seancmoore/brookhill-events" },
    ],
    sections: [
      {
        heading: "Disco nights",
        text:
          "The first piece was a song-request and RSVP app for the program's disco nights. Students check in against the roster once, then request songs and RSVP from their phone. The events hub grew out of it.",
        tags: ["Roster check-in", "Song requests", "RSVP"],
        links: [{ label: "Open the disco app", url: "https://brookhill-disco-2026.web.app" }],
      },
      {
        heading: "Daily updates",
        text:
          "A scheduled AI agent reads the master calendar and program databases and publishes the site's daily updates on its own, which removed the manual publishing step for staff.",
        tags: ["AI agent", "Automation"],
        links: [],
      },
    ],
  },
  {
    title: "More soon",
    subtitle: "Work in progress",
    blurb:
      "This slot is a placeholder for the next project. Check back, or reach out if you want to know what I'm working on right now.",
    tags: ["Coming soon"],
    accent: "#34d399",
    links: [],
    placeholder: true,
  },
];

export const profile = {
  name: "Sean Moore",
  tagline: "Operations and product.",
  about:
    "I graduated from Stony Brook in 2026 with a CS degree. I spent four years in program operations for a summer program of about 1,500 students, finishing as Program Activities Manager over a team of 15. I also design, direct, and ship AI-built web products, including EBK, a six-sport trivia platform, and the events platform for that same program. I'm looking for an operations, program, or product role that needs both.",
  workIntro: "Three shipped products, all live. Open a row for the story and the links.",
  contactLead: "Based in New York. Open to operations, program, and product roles.",
  email: "seanchristmoore@gmail.com",
  links: [
    { label: "Email", url: "mailto:seanchristmoore@gmail.com" },
    { label: "Resume", url: "/Sean_Moore_Resume.pdf" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/seanchristmoore" },
    { label: "GitHub", url: "https://github.com/seancmoore" },
  ],
};
