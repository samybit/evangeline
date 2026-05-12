import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_FLOWERS = [
  {
    id: "peony",
    name: "Peony",
    meaning: "Romance, Prosperity, Good Fortune",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop", // Placeholder
  },
  {
    id: "blue-lotus",
    name: "Blue Lotus",
    meaning: "Spiritual Rebirth, Wisdom, Tranquility",
    image: "https://images.unsplash.com/photo-1593011311094-1aebf1da5e8d?q=80&w=1000&auto=format&fit=crop", // Placeholder
  },
  {
    id: "spider-lily",
    name: "Red Spider Lily",
    meaning: "Final Goodbyes, Reincarnation",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop", // Placeholder
  }
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4 md:p-8">

      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6 leading-tight">
          Every bloom has a <span className="italic text-emerald-800">story.</span>
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          Explore the ancient art of floriography. Discover what your favorite flowers are whispering.
        </p>
      </div>

      {/* The 3-Column Proud Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl h-[70vh] min-h-[600px]">
        {HERO_FLOWERS.map((flower) => (
          <Link
            href={`/flower/${flower.id}`}
            key={flower.id}
            className="group relative overflow-hidden rounded-2xl cursor-pointer flex flex-col justify-end"
          >
            {/* Background Image */}
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="font-serif text-3xl text-stone-100 mb-2">{flower.name}</h2>
              <p className="text-stone-300 text-sm tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {flower.meaning}
              </p>
              <div className="flex items-center text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span className="text-sm font-medium">Read its story</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}