export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "October 2026",
    title: "Presenting at IROS 2026",
    description:
      "Presenting our IEEE RA-L paper \"Safe Planning in Unknown Environments using Conformalized Semantic Maps\" and our workshop paper \"Memory-Aware Multi-Sensor Perception for Efficient and Safe Navigation in Dynamic Environments\" at <a href='https://2026.ieee-iros.org/' target='_blank' rel='noopener noreferrer'>IROS 2026</a>, including the <a href='https://mit-spark.github.io/Longterm-Perception-WS/' target='_blank' rel='noopener noreferrer'>2nd LTP Workshop</a>.",
  },
  {
    date: "September 2026",
    title: "Workshop paper accepted at IROS 2026",
    description:
      "Our work \"Memory-Aware Multi-Sensor Perception for Efficient and Safe Navigation in Dynamic Environments\" has been accepted to the <a href='https://mit-spark.github.io/Longterm-Perception-WS/' target='_blank' rel='noopener noreferrer'>2nd LTP Workshop</a> at IROS 2026 and selected for a spotlight presentation.",
  },
  {
    date: "September 2026",
    title: "Paper submitted to ICRA 2027",
    description:
      "Submitted \"Memory-Aware Multi-Sensor Perception for Efficient and Safe Navigation in Dynamic Environments\" to the IEEE International Conference on Robotics and Automation (ICRA 2027).",
  },
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
