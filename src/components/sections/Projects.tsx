import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub, SiVercel } from "react-icons/si";

const projects = [
  {
    id: "01",
    title: "solidify",
    category: "[web app]",
    description:
      "A complete ecosystem where you can closely monitor your performance. Improve yourself with the help of Google AI and know exactly what to study from personalized study plans by Gemini. Take notes in notebooks you create, inspired by Notion. Use the Pomodoro Timer to time and record your study sessions, which you can later access in the Study Tracker area, with an easy and intuitive overview of your performance over the last few days, weeks, and months. Also take advantage of the LoFi player to help you concentrate. Happy studying!",
    tags: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Zod",
      "ShadCN",
      "Tailwind",
      "Gemini AI",
      "Blocknote",
    ],
    images: [
      "/projects/solidify/login.png",
      "/projects/solidify/dashboard.png",
      "/projects/solidify/cadernos.png",
      "/projects/solidify/jornadas-ativas.png",
      "/projects/solidify/study-tracker.png",
      "/projects/solidify/pomodoro.png",
      "/projects/solidify/lofi-radio.png",
    ],
    gitHubLink: "https://github.com/GGhiaroni/solidify",
    vercelLink: "https://solidify-vxpu.vercel.app",
  },
  {
    id: "02",
    title: "Visto.io",
    category: "[WEB APP]",
    description:
      "Professional Real Estate Inspection platform designed to streamline property audits for tenant turnover and sales transactions.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    images: ["/projects/placeholder.png", "/projects/placeholder.png"],
  },
  {
    id: "03",
    title: "PathFinder",
    category: "[AI PLATFORM]",
    description:
      "Highly customizable travel planning application powered by Generative AI with Google Gemini.",
    tags: ["Next.js", "Google Gemini", "Unsplash API", "Server Actions"],
    images: ["/projects/placeholder.png"],
  },
];

export function Projects() {
  return (
    <section id="work" className="w-full py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-24 w-full">
          <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
            <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              my latest works
            </span>
            <span className="text-xs font-mono text-neutral-500">
              (2023—2026)
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-grotesk font-bold text-white tracking-tight mt-8">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <div
              key={`${project.id}-${project.title}`}
              className="group flex flex-col gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                  <h3 className="text-4xl md:text-5xl font-grotesk font-medium text-white hover:text-neutral-300 transition-colors cursor-pointer">
                    <span className="text-neutral-600 font-mono text-xl md:text-2xl mr-4 font-light">
                      {project.id}.
                    </span>
                    {project.title}
                  </h3>

                  <span className="hidden md:block text-xs font-bold text-neutral-600 tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                  <div className="col-span-7">
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="col-span-5 flex flex-col justify-end items-start md:items-end gap-4">
                    <span className="md:hidden text-xs font-bold text-neutral-600 tracking-widest uppercase">
                      {project.category}
                    </span>

                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium border border-neutral-800 text-neutral-400 rounded hover:border-neutral-600 hover:text-white transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-5xl mx-auto">
                <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl bg-neutral-900/50 border border-white/5 transition-all duration-700 group-hover:border-white/10 group-hover:scale-[1.01]">
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />
                </div>
              </div>

              <div className="flex items-center gap-8 mt-4">
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-white transition-all duration-300 group/link"
                  >
                    <SiGithub
                      size={20}
                      className="group-hover/link:scale-110 transition-transform"
                    />
                    <span className="tracking-tight">View Source</span>
                  </a>
                )}

                {project.vercelLink && (
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-white transition-all duration-300 group/link"
                  >
                    <SiVercel
                      size={18}
                      className="group-hover/link:scale-110 transition-transform"
                    />
                    <span className="tracking-tight">Live Demo</span>
                    <FiExternalLink
                      size={14}
                      className="opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
