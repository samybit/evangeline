import { FLOWERS } from "@/lib/flowers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";
import BotanistChat from "@/components/chat/BotanistChat";
import ImageMagnifier from "@/components/ui/ImageMagnifier";

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
          <div className="relative w-full h-[50vh] lg:h-full bg-stone-200">
            <ImageMagnifier src={flower.image} alt={flower.name} />
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

          {/* AI Chat Trigger Placeholder */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <BotanistChat flowerName={flower.name} />
          </div>

        </div>
      </div>
    </div>
  );
}