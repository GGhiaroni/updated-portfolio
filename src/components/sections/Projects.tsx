import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "solidify",
    category: "[web app]",
    description:
      "Professional Real Estate Inspection platform designed to streamline property audits for tenant turnover and sales transactions. Facilitates detailed reporting and digital evidence management.",
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
    image: "/projects/placeholder.png",
    link: "#",
  },
  {
    id: "01",
    title: "Visto.io",
    category: "[WEB APP]",
    description:
      "Professional Real Estate Inspection platform designed to streamline property audits for tenant turnover and sales transactions. Facilitates detailed reporting and digital evidence management.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/placeholder.png",
    link: "#",
  },
  {
    id: "02",
    title: "PathFinder",
    category: "[AI PLATFORM]",
    description:
      "Highly customizable travel planning application powered by Generative AI. Features advanced personalization using Google Gemini that creates bespoke itineraries based on user preferences.",
    tags: ["Next.js", "Google Gemini", "Unsplash API", "Server Actions"],
    image: "/projects/placeholder.png",
    link: "#",
  },
  {
    id: "03",
    title: "PetMatch",
    category: "[WEB APP]",
    description:
      "Platform connecting users for pet adoption, featuring dynamic filtering and an intuitive UI tailored for user engagement.",
    tags: ["React", "TypeScript", "Styled Components"],
    image: "/projects/placeholder.png",
    link: "#",
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
            <div key={project.id} className="group flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                  <h3 className="text-4xl md:text-5xl font-grotesk font-medium text-white group-hover:text-neutral-300 transition-colors cursor-pointer">
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

              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
                <Link
                  href={project.link}
                  className="absolute inset-0 z-20"
                  aria-label={`View project ${project.title}`}
                />

                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] group-hover:bg-[#131313] transition-colors">
                    <span className="text-neutral-700 font-grotesk text-3xl mb-2 opacity-50">
                      {project.title} Preview
                    </span>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
