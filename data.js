/* ============ SHARED SITE DATA ============
   Edit your work, skills and work history HERE, once. Both pages read this file:
     index.html     (the chat)
     overview.html  (the quick overview page)
   Just edit the strings; nothing else needs to change. */

const CONTACT = {
  email: "padraig48hawkins@gmail.com",
  linkedin: "https://www.linkedin.com/in/padraig-hawkins-b33700150",
  outTonight: "https://outtonight.ie/"
};

/* ============ WORK AREAS ============
   Three areas, named in plain words so a recruiter sees what Padraig does at a glance:
   Social & Static, Landing Pages, Motion & Video. (AI Workflows is next.)
   Edit the strings below; nothing else needs to change. Items shown in the gallery
   are { type: "image" | "video", src, caption, w, h, poster? }. */
const CATEGORIES = {
  social: {
    title: "Social & Static",
    oneLiner: "Key visuals, banners and ad sets for social and onsite, built as template systems that scale across sizes and markets.",
    tags: ["Key Visuals", "Banners", "Social Ads", "Template Systems"],
    heroPattern: "campaign",
    miniCategories: [
      {
        label: "Key Visuals",
        items: [
          { type: "image", src: "images/6_5__iPhone__1284_x_2778.png", caption: "App Store screenshot — Crear Apuesta feature (iPhone 6.5\")", w: 3852, h: 2778 },
          { type: "image", src: "images/8x_6_9__iPhone__1290_x_2796.png", caption: "App Store screenshot — Casino features carousel (iPhone 6.9\")", w: 8000, h: 2167 },
          { type: "image", src: "images/App-Banners-World-Cup-Proof-V3.png", caption: "World Cup app banner template proof — offers, Crear Apuesta, Club Betfair", w: 8000, h: 3985 },
          { type: "image", src: "images/117830_Change_of_imagery_-_Casino.png", caption: "Casino key visual — Fortune Rabbit & Fortune Ox slots", w: 1080, h: 1080 },
          { type: "image", src: "images/4527177ad483_ds119236_heroimg_v1.png", caption: "Casino key visual — Blue Wizard, Big Circus & Age of the Gods slots", w: 728, h: 742 },
          { type: "image", src: "images/PLAYER-3_CQ7A4292_jw_comp_simp.png", caption: "Sports betting key visual — EDGE bet builder feature", w: 4480, h: 6720 },
          { type: "image", src: "images/Screen2.png", caption: "Combined sportsbook & casino key visual (Romania)", w: 2048, h: 2732 }
        ]
      },
      {
        label: "Banner Templates",
        items: [
          { type: "image", src: "images/110411_R_-300-Matched-Deposit-Offer.png", caption: "Matched deposit offer banner templates — R$300 bonus (Brazil)", w: 4132, h: 4200 },
          { type: "image", src: "images/116852-Spain-ACQ-Banner-Templates_2_Proof3.png", caption: "Acquisition banner template system — Bet €5 Get €20 (Spain)", w: 6038, h: 3100 },
          { type: "image", src: "images/117002_Spain-ACQ-B5-G20-tennis_ProofV2.png", caption: "Tennis-themed acquisition banner variants (Spain)", w: 4416, h: 4112 },
          { type: "image", src: "images/117019_App-Banners-Refresh_1_ProofV1.png", caption: "App download banner refresh — multi-format templates (Brazil)", w: 4832, h: 6656 },
          { type: "image", src: "images/117218_Spain-ACQ-B5-G20-Tennis_Proof.png", caption: "Extended tennis banner template set (Spain)", w: 8000, h: 2293 },
          { type: "image", src: "images/117286_creative-UFC_Proof.png", caption: "UFC/MMA-themed acquisition banner variants (Spain)", w: 3468, h: 3370 }
        ]
      },
      {
        label: "L Bars",
        items: [
          { type: "image", src: "images/Brand_L-Bar-CTV_Crear-Apuesta_FIGO-Version_proofOP1.png", caption: "CTV L-bar proof — bet builder ('Crear Apuesta'), option 1", w: 1280, h: 720 },
          { type: "image", src: "images/Brand_L-Bar-CTV_Crear-Apuesta_FIGO-Version_proofOP2.png", caption: "CTV L-bar proof — bet builder ('Crear Apuesta'), option 2", w: 1280, h: 720 },
          { type: "image", src: "images/ESPN_J_bar___EU_leagues_and_CONMEBOL__R_300_SUO_V2.png", caption: "ESPN J-bar — EU leagues & CONMEBOL, R$300 sign-up offer", w: 1280, h: 720 }
        ]
      },
      {
        label: "Spotify Ads",
        items: [
          { type: "image", src: "images/600x640.png", caption: "Spotify display ad — static creative", w: 600, h: 640 },
          { type: "image", src: "images/Picture_1.png", caption: "Spotify mobile — ad placement in podcast player", w: 278, h: 604 },
          { type: "image", src: "images/Picture_2.png", caption: "Spotify desktop — ad placement in playlist view", w: 500, h: 286 }
        ]
      }
    ]
  },
  landing: {
    title: "Landing Pages",
    oneLiner: "Landing page redesigns and promotional web pages, built around clear user journeys and fully responsive layouts.",
    tags: ["Landing Pages", "Promotional Pages", "User Journeys", "Responsive Layouts"],
    heroPattern: "digital",
    accent: "sky",
    gallery: [
      { type: "image", src: "images/Prospect-Page-Layout-Mock-Up-2_Proof.jpg", caption: "Prospect landing page — desktop & mobile, new-customer offer", w: 1850, h: 2463 },
      { type: "image", src: "images/DESKTOP_v3.png", caption: "Betfair Exchange desktop landing page — value proposition layout", w: 1366, h: 1328 },
      { type: "image", src: "images/Exchange-comms-V3_Proof.png", caption: "Betfair Exchange landing page proof — desktop & mobile, login variant", w: 1965, h: 1328 },
      { type: "video", src: "images/Desktop_V1.mp4", caption: "Desktop landing page — motion walkthrough", w: 1366, h: 1328, poster: "images/poster-Desktop_V1.jpg" }
    ]
  },
  motion: {
    title: "Motion & Video",
    oneLiner: "Motion graphics, video editing and podcast production, from social animations and promos to TV ad and podcast edits.",
    tags: ["Motion Graphics", "Social Animations", "Podcast Editing", "Promotional Videos"],
    heroPattern: "motion",
    accent: "maroon",
    overview: "This collection showcases my work across motion graphics, video editing, podcast production, and digital content creation. From editing raw footage and animating branded assets to producing promotional videos and social-first content, these projects highlight my end-to-end production workflow across multiple campaigns. The showreel below features a selection of podcast edits, motion graphics, campaign content, and video editing projects, providing an overview of both my creative and technical capabilities.",
    showreel: { src: "images/Showreel.mp4", poster: "images/poster-Showreel.jpg" },
    gallery: [
      { type: "video", src: "images/3072x1152_2.mp4", caption: "Football sponsorship — wide-format video ad (3072×1152)", w: 3072, h: 1152, poster: "images/poster-3072x1152_2.jpg" },
      { type: "video", src: "images/112380_Cruzeiro_-_YouTube_pre_roll.mp4", caption: "Cruzeiro sponsorship — YouTube pre-roll ad", w: 1920, h: 1080, poster: "images/poster-112380_Cruzeiro_-_YouTube_pre_roll.jpg" }
    ]
  },
  outtonight: {
    title: "Out Tonight",
    oneLiner: "A pub finder for Ireland. Can't decide where to go? Spin for it and get a pick, or plan a bar crawl, with pubs near you.",
    tags: ["Side Project", "Product Design", "Web App"],
    heroPattern: "outtonight",
    heroImage: { src: "images/out-tonight-card.jpg", alt: "Out Tonight: pub finder for Ireland. Spin for it.", w: 1200, h: 630 },
    link: { href: "https://outtonight.ie/", label: "Visit outtonight.ie" }
  }
};

/* Real skills and toolkit as given by Padraig. */
const SKILLS_DATA = {
  core: ["Digital Design", "Key Visual & Banner Design", "Landing Page Design", "Motion Graphics","Workflow & Automation", "Video & Podcast Editing", "UI/UX Design & Prototyping"],
  toolkit: ["Photoshop", "After Effects", "Premiere Pro", "Adobe XD", "Figma","Magnific AI","Flora AI", "VS Code"]
};

/* Real work history. */
const TIMELINE_DATA = [
  { date: "2026 — Present", role: "Creative Innovation Designer", company: "Flutter UKI", desc: "Developing AI-powered workflows that enhance design team efficiency, streamline production processes, and significantly reduce creative turnaround times." },
  { date: "2022 — 2026", role: "Digital Designer", company: "Betfair International", desc: "Created high-impact digital campaigns across web, app, social, and display, including key visuals, landing pages, motion graphics, video editing, and promotional assets." },
  { date: "2020 (Dec) — 2022 (Feb)", role: "Print/Graphic Designer", company: "Whiteriver Group", desc: "Designed print and digital marketing materials, branding, packaging, and large-format graphics for a wide range of clients." },
  { date: "2020 (Sep) — 2020 (Nov) — Contract", role: "Web Designer", company: "Currency fair", desc: "Migrating and rebuilding web pages with a focus on performance and usability" }
];
