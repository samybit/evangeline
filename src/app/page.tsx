import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FLOWERS } from "@/lib/flowers";

export default function Home() {
  const heroFlowers = FLOWERS.slice(0, 3);

  return (
    <div className="w-full h-[calc(100vh-5rem)] flex flex-col md:flex-row bg-stone-950">
      {heroFlowers.map((flower) => (
        <Link
          href={`/flower/${flower.id}`}
          key={flower.id}
          // Removed border-r, border-stone-800/20, and last:border-0 here
          className="group relative flex-1 h-full overflow-hidden cursor-pointer flex flex-col justify-end"
        >
          <Image
            src={flower.image}
            alt={flower.name}
            fill
            priority
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/40 to-transparent transition-opacity duration-700" />

          <div className="relative z-10 p-10 md:p-14 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-3">{flower.name}</h2>
            <p className="text-stone-300 text-sm md:text-base tracking-widest uppercase mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
              {flower.shortMeaning}
            </p>
            <div className="flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
              <span className="text-sm font-medium tracking-wide uppercase">Read its story</span>
              <ArrowRight className="w-5 h-5 ml-3" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}