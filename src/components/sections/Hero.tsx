export function Hero() {
  return (
    <section
      id="index"
      className="min-h-screen w-full flex flex-col justify-end pb-12 px-6 md:px-12 pt-32"
    >
      <div className="flex flex-col items-start justify-end flex-1 mb-12">
        <span className="mb-4 text-xs md:text-sm font-medium tracking-widest text-neutral-500 uppercase">
          Fullstack Developer
        </span>

        <h1 className="flex flex-col leading-[0.85] tracking-tighter">
          <span className="text-[12vw] md:text-[11.5vw] font-grotesk font-bold text-white">
            GABRIEL
          </span>

          <span className="text-[12vw] md:text-[11.5vw] font-light italic text-neutral-200 ml-[2vw]">
            Tiziano
          </span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end w-full border-t border-white/10 pt-8 gap-8">
        <div className="max-w-md">
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Building scalable web applications with React, Next.js, TypeScript
            and PostgreSQL. Passionate about creating elegant solutions and
            pixel-perfect interfaces.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-neutral-600 uppercase tracking-wider text-[10px] font-bold">
              Location
            </span>
            <span className="text-neutral-200">Curitiba, Brasil</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-neutral-600 uppercase tracking-wider text-[10px] font-bold">
              Available
            </span>
            <span className="text-neutral-200 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
