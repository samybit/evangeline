import { FLOWERS } from "@/lib/flowers";
import Image from "next/image";
import Link from "next/link";

export default function DirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-5xl text-stone-900 mb-12 text-center">Botanical Index</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLOWERS.map((flower) => (
          <Link href={`/flower/${flower.id}`} key={flower.id} className="group block">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl mb-4 bg-stone-200">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h2 className="font-serif text-2xl text-stone-800">{flower.name}</h2>
            <p className="text-stone-500 italic text-sm">{flower.scientificName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}