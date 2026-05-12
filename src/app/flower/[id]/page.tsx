import { FLOWERS } from "@/lib/flowers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";

export default async function FlowerPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const flower = FLOWERS.find((f) => f.id === id);

  if (!flower) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* Left Side: Sticky Image Column */}
        <div className="w-full lg:w-1/2 lg:h-[calc(100vh-5rem)] lg:sticky top-20">
          <div className="relative w-full h-[50vh] lg:h-full">
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side: Content & AI Button Setup */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <Link href="/" className="inline-flex items-center text-stone-500 hover:text-emerald-700 transition-colors mb-12 w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm tracking-widest uppercase">Return to Showcase</span>
          </Link>

          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-2">{flower.name}</h1>
          <p className="text-xl text-stone-500 italic mb-8">{flower.scientificName}</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Primary Meaning</h3>
              <p className="text-lg text-emerald-800 font-medium">{flower.shortMeaning}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">The Story</h3>
              <p className="text-stone-700 leading-relaxed text-lg">{flower.fullMeaning}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Origin</h3>
              <p className="text-stone-700">{flower.origin}</p>
            </div>
          </div>

          {/* AI Chat Trigger Placeholder (To be connected in Phase 3) */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <button className="w-full group flex items-center justify-between bg-stone-900 hover:bg-emerald-900 text-stone-50 p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl mb-1 flex items-center">
                  Ask the Botanist <Sparkles className="w-4 h-4 ml-2 text-emerald-400" />
                </span>
                <span className="text-sm text-stone-400 group-hover:text-stone-300">Discover care tips, pairing suggestions, or more lore.</span>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}