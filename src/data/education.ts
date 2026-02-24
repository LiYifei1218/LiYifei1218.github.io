export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025 — 2027 (Expected)",
    institution: "University of Pennsylvania",
    degree: "M.S.E. in Robotics",
  },
  {
    year: "2021 — 2025",
    institution: "Washington University in St. Louis",
    degree:
      "Cum Laude\nB.S. in Computer Engineering;\nB.S. in Computer Science;\nminor in Psychological & Brain Science",
  },
];
