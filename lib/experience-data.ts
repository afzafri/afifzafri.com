export interface Experience {
  id: number;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  current: boolean;
  responsibilities: string[];
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Team Lead",
    company: "Red Ant Technology Sdn Bhd",
    employmentType: "Full-time",
    period: "Jan 2024 – Present",
    location: "Petaling Jaya, Selangor, Malaysia (Hybrid)",
    current: true,
    responsibilities: [
      "Lead and manage the development team to ensure timely delivery and high-quality standards across projects",
      "Continue hands-on backend development using PHP and Laravel",
      "Work closely with clients to gather requirements and deliver tailored enterprise solutions",
      "Foster effective communication, collaboration, and technical alignment within the team",
      "Introduced new tools to boost productivity and incorporate AI and LLM technologies into the development workflow"
    ]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Red Ant Technology Sdn Bhd",
    employmentType: "Full-time",
    period: "Jul 2019 – Jan 2024",
    location: "Greater Kuala Lumpur",
    current: false,
    responsibilities: [
      "Specialized in Laravel web application development and RESTful API design for enterprise-level solutions",
      "Delivered multiple large-scale projects for enterprise clients",
      "Led the migration of legacy systems to modern, Laravel-based applications",
      "Mentored and trained interns and junior developers, ensuring adherence to best practices and code quality standards"
    ]
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Red Ant Technology Sdn Bhd",
    employmentType: "Internship",
    period: "Feb 2019 – Jul 2019",
    location: "Selangor, Malaysia",
    current: false,
    responsibilities: [
      "Introduced the Laravel framework to the team and led the transition for ongoing development",
      "Initiated backend development for Leaf CRM as the sole backend developer",
      "Collaborated with the mobile app team to design and implement RESTful APIs"
    ]
  },
  {
    id: 4,
    role: "Part-Time Laravel Programmer",
    company: "Code Technology Sdn. Bhd.",
    employmentType: "Part-time",
    period: "Dec 2016 – Jan 2017",
    location: "Kuala Lumpur, Malaysia (Remote)",
    current: false,
    responsibilities: [
      "Developed a Laravel web application with RESTful APIs",
      "Built a hybrid mobile application"
    ]
  },
  {
    id: 5,
    role: "IT Intern & Web Application Programmer",
    company: "Cement Industries of Malaysia Berhad (CIMA)",
    employmentType: "Internship",
    period: "Apr 2016 – Jun 2016",
    location: "Perlis, Malaysia",
    current: false,
    responsibilities: [
      "Developed intranet web and hybrid mobile applications for inventory management and infrastructure department",
      "Assisted the Infrastructure team with networking and IT support tasks"
    ]
  }
];
