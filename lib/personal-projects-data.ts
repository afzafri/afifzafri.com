export const projectTypes = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'library', label: 'Library' },
  { key: 'research', label: 'Research' },
];

export const personalProjects = [
  {
    id: "character-art",
    title: "Character Art",
    subtitle: "KOReader Plugin: See Book Characters as Fan Art",
    description: "A KOReader plugin that turns a highlighted character name into fan art from the book's wiki, without leaving the page. It works just like the built-in dictionary. It resolves messy highlights to the right wiki article, gathers credited artwork, and speaks plain MediaWiki so it works with Fandom and independent wikis alike. Contains no AI: it only fetches and displays what a wiki already hosts, crediting the original artists.",
    stack: ["Lua", "KOReader", "MediaWiki API"],
    timeline: "Sep 2026 - Present",
    github: "https://github.com/afzafri/charart.koplugin",
    tag: "New",
    type: "library"
  },
  {
    id: "modkit-swatch",
    title: "ModKit Swatch",
    subtitle: "Gunpla & Model Kit Paint Color Matcher",
    description: "Upload a reference photo of your Gunpla or scale model, click to sample any color, and instantly get ranked paint matches across Mr. Color, Tamiya, Gaianotes, Jumpwind, Hobby Mio, and more. Uses CIE2000 Delta E color science for perceptually accurate matching. Fully client-side, no backend required.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "chroma-js"],
    timeline: "Mar 2026 - Present",
    github: "https://github.com/afzafri/modkit-swatch",
    demo: "https://modkitswatch.afifzafri.com",
    type: "web"
  },
  {
    id: "link2book",
    title: "Link2Book",
    subtitle: "Web Article to EPUB Converter",
    description: "Converts web article links into clean EPUB books. Uses Playwright with stealth to render JavaScript-heavy pages, extract full article content, and package it with embedded images into a valid EPUB 3 file, ready for Apple Books, Kindle, or any e-reader.",
    stack: ["Next.js", "TypeScript", "Playwright", "JSZip", "sharp"],
    timeline: "Feb 2026 - Present",
    github: "https://github.com/afzafri/link2book",
    demo: "https://link2book.afifzafri.com",
    type: "web"
  },
  {
    id: "talk-like-human",
    title: "Talk Like Human",
    subtitle: "AI Text Humanizer",
    description: "A web app that rewrites AI-generated or robotic text to sound natural, fluid, and genuinely human. Supports multiple tone modes and is powered by OpenAI or Anthropic via a clean provider abstraction.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Anthropic API"],
    timeline: "Feb 2026 - Present",
    github: "https://github.com/afzafri/talk-like-human",
    demo: "https://humanize.afifzafri.com",
    type: "web"
  },
  {
    id: "iptv-player",
    title: "IPTV Player Web App",
    subtitle: "Browser-Based IPTV Channel Player",
    description: "A simple web application for loading and playing IPTV channels from M3U playlists, featuring channel search and a built-in video player.",
    stack: ["JavaScript", "HTML5"],
    timeline: "Nov 2023 - Present",
    github: "https://github.com/afzafri/IPTV-Player-Web-App",
    demo: "https://afzafri.github.io/IPTV-Player-Web-App/",
    type: "web"
  },
  {
    id: "web-comic-reader",
    title: "Web Comic Reader",
    subtitle: "Digital Comic Book Reader",
    description: "A browser-based reader supporting CBR/CBZ/CBT comic formats, allowing users to read digital comics directly in the browser.",
    stack: ["HTML5", "JavaScript"],
    timeline: "Apr 2017 - Present",
    github: "https://github.com/afzafri/Web-Comic-Reader",
    demo: "https://afzafri.github.io/Web-Comic-Reader/",
    type: "web"
  },
  {
    id: "whatsapp-express",
    title: "Whatsapp Express",
    subtitle: "Quick WhatsApp Messaging",
    description: "A simple tool to send WhatsApp messages directly to any number without saving contacts, utilizing WhatsApp's click-to-chat URL scheme.",
    stack: ["JavaScript"],
    features: [
      "Works on both mobile and desktop browsers",
      "No contact saving required",
      "Utilizes WhatsApp URL scheme"
    ],
    timeline: "Mar 2017 - Present",
    github: "https://github.com/afzafri/Whatsapp-Express",
    demo: "https://afzafri.github.io/Whatsapp-Express/",
    type: "web"
  },
  {
    id: "uitm-timetable-generator",
    title: "UiTM Timetable Generator",
    subtitle: "Automated Class Schedule Generator",
    description: "A web application that fetches and generates class timetables from UiTM's iCress system automatically, simplifying schedule management for students.",
    stack: ["PHP", "JavaScript"],
    timeline: "Apr 2016 - Present",
    github: "https://github.com/afzafri/UiTM-Timetable-Generator",
    demo: "https://uitmtimetable.com",
    type: "web"
  },
  {
    id: "coaching-assessment-system",
    title: "Coaching Assessment System",
    subtitle: "Employer-Employee Evaluation Portal",
    description: "A web-based coaching evaluation platform enabling organizations to assess coaching relationships through structured surveys, performance tracking, and automated reporting.",
    stack: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    features: [
      "Role-based user management (admin, employer, employee)",
      "7-question coaching evaluation with automated scoring",
      "Results dashboard with employee feedback",
      "Email notifications for account management",
      "Session control and security enforcement"
    ],
    timeline: "Aug 2019 - Aug 2020",
    client: "Universiti Teknologi MARA (Perak) - Faculty of Business and Management",
    tag: "Freelance",
    type: "web"
  },
  {
    id: "waktu-solat-api",
    title: "Waktu Solat API",
    subtitle: "Malaysian Prayer Times API",
    description: "PHP library that fetches prayer time data from JAKIM's e-Solat website and returns structured JSON data for integration into applications.",
    stack: ["PHP"],
    timeline: "May 2016 - Jan 2020",
    github: "https://github.com/afzafri/Waktu-Solat-API",
    type: "library"
  },
  {
    id: "backpack-track",
    title: "BackPack Track",
    subtitle: "Travel Planning & Budget Management App",
    description: "A comprehensive mobile application for travelers to organize trips, track expenses, and manage itineraries with real-time budget monitoring and collaborative planning features.",
    stack: ["Android (Java)", "Laravel 5.8", "MySQL", "SQLite", "OAuth2"],
    features: [
      "Multi-user trip collaboration with role-based access",
      "Real-time budget tracking with expense categorization",
      "Cloud synchronization with offline capability",
      "Expense analytics and budget comparison",
      "Itinerary planning with destination scheduling"
    ],
    timeline: "Aug 2018 - Jan 2019",
    context: "Final Year Project (Bachelor's Degree)",
    tag: "FYP",
    github: "https://github.com/afzafri/BackPack-Track-Admin-Panel",
    paper: "https://ir.uitm.edu.my/id/eprint/25147/",
    type: "mobile"
  },
  {
    id: "e-nr-system",
    title: "E-NR Student Registration System",
    subtitle: "Non-Resident Student Management",
    description: "A registration system for managing non-resident student records at UiTM Seremban with administrator access and data management capabilities.",
    stack: ["PHP", "JavaScript", "MySQL"],
    timeline: "Jul 2018 - Dec 2018",
    client: "Universiti Teknologi MARA (Seremban) - E-NR Student Representative",
    tag: "Freelance",
    type: "web"
  },
  {
    id: "pmsp-system",
    title: "PMSP System for Solid Waste Management",
    subtitle: "Research Data Analysis Tool",
    description: "A web-based application for calculating and visualizing solid waste management research data through interactive graphs and charts.",
    stack: ["JavaScript"],
    timeline: "Mar 2018 - Jun 2018",
    context: "Developed for Universiti Teknologi MARA research",
    tag: "Freelance",
    paper: "https://ideas.repec.org/a/arp/tjssrr/2018p83-89.html",
    type: "research"
  },
  {
    id: "postal-tracking-apis",
    title: "Malaysia Postal Tracking APIs",
    subtitle: "Unofficial Package Tracking Libraries",
    description: "PHP packages for tracking shipments across Malaysian courier services including Pos Laju and Ninja Van.",
    stack: ["PHP"],
    timeline: "Dec 2016 - Present",
    packagist: "https://packagist.org/packages/afzafri/",
    services: ["Pos Laju", "Ninja Van"],
    type: "library"
  }
];
