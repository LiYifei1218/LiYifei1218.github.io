export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "RL for Autonomous Quadcopter Racing",
    description:
      "Implementing PPO in rsl_rl framework and training an autonomous quadcopter racing policy in NVIDIA Isaac Lab.",
    technologies: ["Python", "PyTorch", "Isaac Lab", "PPO"],
  },
  {
    title: "Autonomous Pick-and-Place with 7-DOF Robot Arm",
    description:
      "Full-stack motion planning pipeline using custom FK/IK solvers with null space optimization for the Franka Emika Panda. Achieved 95% success in simulation and 70% on hardware.",
    technologies: ["Python", "ROS", "Motion Planning"],
  },
  {
    title: "HJB-Seeded Learning for Quadrotor Control",
    description:
      "Implemented HJB-seeded supervised learning pipeline by solving discretized HJB on a reduced 6D model and deploying on a 12D quadrotor simulator.",
    technologies: ["Python", "Optimal Control", "Supervised Learning"],
  },
  {
    title: "Vision-Driven Semantic SLAM and Navigation",
    description:
      "Software stack with semantic SLAM on a ground mobile robot for object-directed navigation. Achieved 90% class accuracy and 0.05m localization error.",
    technologies: ["Python", "ROS", "SLAM", "Computer Vision"],
  },
  {
    title: "Multi-Agent Path Finding",
    description:
      "Implemented Prioritized Planning and CBS, achieving ~27% fewer node expansions with heuristic-based constraint handling.",
    technologies: ["Python", "Algorithms", "MAPF"],
  },
];
