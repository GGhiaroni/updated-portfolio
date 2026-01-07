import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white">
      <div className="text-lg tracking-tight font-medium">
        <span className="font-grotesk font-bold">GABRIEL</span>
        <span className="italic font-light opacity-80 ml-1">tiziano</span>
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
        <Link href="#index" className="hover:text-white transition-colors">
          Index
        </Link>
        <Link href="#about" className="hover:text-white transition-colors">
          About
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors">
          Contact
        </Link>
      </nav>

      <Link
        href="#contact"
        className="text-sm font-medium hover:underline underline-offset-4 decoration-neutral-500"
      >
        Get in touch
      </Link>
    </header>
  );
}
