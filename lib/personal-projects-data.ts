export const projectTypes = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'library', label: 'Library' },
  { key: 'research', label: 'Research' },
];

export const personalProjects = [
  {
    id: "iptv-player",
    title: "IPTV Player Web App",
    subtitle: "Browser-Based IPTV Channel Player",
    description: "A simple web application for loading and playing IPTV channels from M3U playlists, featuring channel search and a built-in video player.",
    stack: ["JavaScript", "HTML5"],
    timeline: "Nov 2023 - Present",
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
    demo: "https://uitmtimetable.skrin.xyz",
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
    github: "https://github.com/afzafri/BackPack-Track",
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
  },
  {
    id: "ktmb-train-checker",
    title: "KTMB Train Checker",
    subtitle: "Train Ticket Availability Checker",
    description: "Web application for checking available KTMB train tickets, focusing on frontend development with modern UI frameworks.",
    stack: ["jQuery", "Materialize CSS", "Animate.css"],
    timeline: "Mar 2017 - Oct 2019",
    github: "https://github.com/afzafri/KTMB-Train-Ticket-Checker",
    status: "deprecated",
    type: "web"
  }
];
