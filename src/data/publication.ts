export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  poster?: string;
  bibtex?: string;
  tldr?: string;
  keywords?: string[];
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "IEEE RA-L",
    title:
      "Safe Planning in Unknown Environments using Conformalized Semantic Maps",
    authors:
      "David Smith Sundarsingh, Yifei Li, Tianji Tang, George J. Pappas, Nikolay Atanasov, Yiannis Kantaros",
    paperUrl: "https://arxiv.org/abs/2509.25124",
    tldr: "A semantic planner for reach-avoid tasks that integrates conformal prediction to quantify semantic map uncertainty without assuming noise distributions, achieving tasks with user-defined probability.",
    keywords: ["Semantic Mapping", "Conformal Prediction", "Planning under Uncertainty"],
  },
];
