export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  // {
  //   date: "Oct 2025 — Present",
  //   title: "Graduate Researcher",
  //   company: "University of Pennsylvania",
  //   description:
  //     "Conducting safety-oriented evaluation on state-of-the-art VLAs by designing out-of-distribution tasks and analyzing failure modes",
  //   companyUrl: "https://www.grasp.upenn.edu/",
  // },
  {
    date: "Jan 2023 — Sep 2025",
    title: "Undergraduate Researcher",
    company: "Dr. Yiannis Kantaros's Lab, Washington University in St. Louis",
    description:
      "Developed a semantic planner for reach-avoid tasks integrating conformal prediction to quantify semantic map uncertainty. Manuscript accepted to IEEE RA-L.",
    companyUrl: "https://sites.wustl.edu/kantaroslab/",
  },
  {
    date: "Jan 2022 — May 2025",
    title: "Assistant in Instruction",
    company: "Dept. of Computer Science & Engineering, Washington University in St. Louis",
    description:
      "Teaching assistant for Data Structures & Algorithms and Video Game Development. Led weekly office hours (20+ students) and discussion sessions; assisted grading and developed grading guides for 60+ TAs.",
    companyUrl: "https://cse.wustl.edu/",
  },
  {
    date: "Jul 2023 — Sep 2023",
    title: "Intern — Backend Developer",
    company: "China Industrial Design Institute",
    description:
      "Built backend for a digital transformation application using Node.js, Java Spring Boot, and SQL, launching with 5+ initial customers",
  },
];
