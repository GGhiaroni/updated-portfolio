import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="w-full relative">
      <Header />
      <Hero />
      <Projects />
      <div className="h-screen flex items-center justify-center text-neutral-800">
        Próxima Seção: Projetos (Scroll Down)
      </div>
    </main>
  );
}
