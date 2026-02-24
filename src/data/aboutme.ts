export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yifei (Bruce) Li",
  title: "Masters Student in Robotics",
  institution: "University of Pennsylvania",
  description:
    "I'm currently a first-year master's student in Robotics at the <a href='https://www.grasp.upenn.edu/'>GRASP Laboratory</a>, University of Pennsylvania. My research interests span robot safety, vision-language-action models, motion planning, and reinforcement learning.<br/><br/>Previously, I completed my B.S. in Computer Engineering and Computer Science at <a href='https://washu.edu/'>Washington University in St. Louis</a>, where I worked on safe planning with conformalized semantic maps with <a href='https://engineering.washu.edu/academics/student-profiles/David-Sundarsingh.html'>David Sundarsingh</a> in <a href='https://sites.wustl.edu/kantaroslab/'>Prof. Yiannis Kantaros' lab</a>.",
  email: "liyf[at]seas.upenn.edu",
  imageUrl: "/images/profile.jpg",
  cvUrl: "/resume-feb18-2026.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=02C0MMkAAAAJ&hl",
  githubUsername: "LiYifei1218",
  linkedinUsername: "liyifei1218",
  institutionUrl: "https://www.grasp.upenn.edu/",
  altName: "李逸飞",
  // funDescription: "<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=n&d=LRd6RYhElVEmP2-k9Dy4aw0pqw_LN4er-HdO8SK1jiE'></script>",
};
