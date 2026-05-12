export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 text-stone-500 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-serif text-xl text-stone-800 mb-4">Flora & Fable</p>
        <p className="text-sm tracking-wider uppercase text-emerald-800/80">Speaking the language of petals and stems.</p>
        <p className="mt-8 text-xs">&copy; {new Date().getFullYear()} Flora & Fable. All rights reserved.</p>
      </div>
    </footer>
  );
}