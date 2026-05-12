export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-serif text-xl text-stone-200 mb-4">Flora & Fable</p>
        <p className="text-sm tracking-wider uppercase">Speaking the language of petals and stems.</p>
        <p className="mt-8 text-xs text-stone-500">&copy; {new Date().getFullYear()} Flora & Fable. All rights reserved.</p>
      </div>
    </footer>
  );
}