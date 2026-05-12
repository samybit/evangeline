import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-emerald-700" />
            <span className="font-serif text-2xl tracking-wide text-stone-800">Flora & Fable</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase text-stone-600">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Showcase</Link>
            <Link href="/directory" className="hover:text-emerald-700 transition-colors">Directory</Link>
            <Link href="/about" className="hover:text-emerald-700 transition-colors">Our Story</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}