export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "January 2026",
    title: "Paper accepted at IEEE RA-L",
    description:
      "Our work \"Safe Planning in Unknown Environments using Conformalized Semantic Maps\" has been accepted to IEEE Robotics and Automation Letters.",
  },
  // {
  //   date: "August 2025",
  //   title: "Started M.S. in Robotics at Penn",
  //   description:
  //     "Joined the GRASP Laboratory at the University of Pennsylvania for my master's in Robotics.",
  // },
  // {
  //   date: "May 2025",
  //   title: "Graduated from WashU",
  //   description:
  //     "Graduated Cum Laude from Washington University in St. Louis with a B.S. in Computer Engineering and Computer Science.",
  // },
];
