import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Safe Planning in Unknown Environments Using Conformalized Semantic Maps | Yifei Li",
  description:
    "A semantic planner for reach-avoid tasks that uses conformal prediction to quantify semantic map uncertainty without assuming sensor models or noise distributions.",
};

const ABSTRACT =
  "This paper addresses semantic planning problems in unknown environments under perceptual uncertainty. The environment contains multiple unknown semantically labeled regions or objects, and the robot must reach desired locations while maintaining class-dependent distances from them. We aim to compute robot paths that complete such semantic reach-avoid tasks with user-defined probability despite uncertain perception. Existing planning algorithms either ignore perceptual uncertainty—thus lacking correctness guarantees—or assume known sensor models and noise characteristics. In contrast, we present the first planner for semantic reach-avoid tasks that achieves user-specified mission completion rates without requiring any knowledge of sensor models or noise. This is enabled by quantifying uncertainty in semantic maps—constructed on-the-fly from perceptual measurements—using conformal prediction in a model- and distribution-free manner. We validate our approach and the theoretical mission completion rates through extensive experiments, showing that it consistently outperforms baselines in mission success rates.";

const BIBTEX = `@article{sundarsingh2026safe,
  title={Safe Planning in Unknown Environments Using Conformalized Semantic Maps},
  author={Sundarsingh, David Smith and Li, Yifei and Tang, Tianji and Pappas, George J. and Atanasov, Nikolay and Kantaros, Yiannis},
  journal={IEEE Robotics and Automation Letters},
  year={2026},
  note={Accepted},
  eprint={2509.25124},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2509.25124}
}`;

const ASSET = "/projects/conformal-semantic-planning";

function AuthorList() {
  const authors = [
    "David Smith Sundarsingh",
    "Yifei Li",
    "Tianji Tang",
    "George J. Pappas",
    "Nikolay Atanasov",
    "Yiannis Kantaros",
  ];
  return (
    <p className="text-sm text-zinc-600 leading-relaxed">
      {authors.map((name, i) => (
        <span key={name}>
          {i > 0 && (i === authors.length - 1 ? ", and " : ", ")}
          {name === "Yifei Li" ? (
            <strong className="font-semibold text-zinc-900">{name}</strong>
          ) : (
            name
          )}
        </span>
      ))}
    </p>
  );
}

export default function ConformalSemanticPlanningPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300 mb-12"
        >
          <ArrowLeft
            size={12}
            className="group-hover:-translate-x-0.5 transition-transform duration-300"
          />
          <span className="tracking-wider uppercase">Back</span>
        </Link>

        <p className="text-xs text-zinc-500 mb-3 tracking-wide uppercase">
          IEEE Robotics and Automation Letters (RA-L), 2026
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl text-zinc-900 mb-6 leading-snug">
          Safe Planning in Unknown Environments Using Conformalized Semantic
          Maps
        </h1>

        <div className="mb-8">
          <AuthorList />
        </div>

        <div className="flex flex-wrap gap-6 mb-12">
          <a
            href={`${ASSET}/paper.pdf`}
            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="tracking-wider uppercase">PDF</span>
          </a>
          <a
            href="https://arxiv.org/abs/2509.25124"
            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="tracking-wider uppercase">arXiv</span>
          </a>
          <a
            href={`${ASSET}/source.zip`}
            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="tracking-wider uppercase">TeX Source</span>
          </a>
          <span
            className="inline-flex items-center gap-2 text-xs text-zinc-400 cursor-not-allowed"
            title="Poster coming soon"
            aria-disabled="true"
          >
            <ArrowUpRight size={12} />
            <span className="tracking-wider uppercase">Poster (soon)</span>
          </span>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden border border-zinc-200 bg-white">
          <Image
            src={`${ASSET}/teaser.png`}
            alt="Overview of safe planning with conformalized semantic maps"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="font-serif text-l mb-4 tracking-wide uppercase text-zinc-800">
            Abstract
          </h2>
          <p className="font-serif text-sm leading-relaxed text-zinc-700">
            {ABSTRACT}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-l mb-4 tracking-wide uppercase text-zinc-800">
            Video
          </h2>
          <div className="rounded-lg overflow-hidden border border-zinc-200 bg-black">
            <video
              controls
              preload="metadata"
              className="w-full h-auto"
              src={`${ASSET}/video.mp4`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-l mb-4 tracking-wide uppercase text-zinc-800">
            BibTeX
          </h2>
          <pre className="text-xs text-zinc-700 bg-zinc-100 border border-zinc-200 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
            {BIBTEX}
          </pre>
        </section>

        <p className="text-xs text-zinc-400 mt-16">
          Poster coming soon.
        </p>
      </div>
    </div>
  );
}
