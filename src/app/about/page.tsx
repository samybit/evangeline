"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { BookOpen, Leaf, Sparkles } from "lucide-react";

export default function AboutPage() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-14684623350315286799?q=80&w=2000&auto=format&fit=crop"
          alt="Vintage botanical illustration feel"
          fill
          priority
          className="object-cover opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-50/10 via-stone-50/50 to-stone-50" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="relative z-10 text-center max-w-3xl px-4"
        >
          <p className="text-emerald-800 font-medium tracking-[0.2em] uppercase text-sm mb-6">The Art of Floriography</p>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 leading-tight">
            Reviving the ancient <br className="hidden md:block" />
            <span className="italic text-stone-600">language of flowers.</span>
          </h1>
        </motion.div>
      </section>

      {/* The Narrative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="prose prose-lg prose-stone md:prose-xl mx-auto text-center"
        >
          <p className="text-stone-700 leading-relaxed font-light">
            For centuries, humans have projected their deepest emotions onto the delicate petals of flowers.
            In the Victorian era, floriography became a highly sophisticated means of cryptological communication.
            A single bloom, depending on its color, arrangement, and condition, could deliver a message of profound
            love, bitter resentment, or secret longing without a single word being spoken.
          </p>
          <p className="text-stone-700 leading-relaxed font-light mt-8">
            <strong className="font-serif font-normal text-2xl text-stone-900">Flora & Fable</strong> was born from a desire to rescue these lost definitions. We are a digital archive bridging the gap between historical botany and modern technology, allowing you to discover the hidden narratives growing all around us.
          </p>
        </motion.div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              icon: BookOpen,
              title: "Historical Lore",
              desc: "Tracing the mythological and literary origins of botanical symbolism across different global cultures."
            },
            {
              icon: Leaf,
              title: "Botanical Science",
              desc: "Providing accurate scientific classifications and practical care guides for every specimen we document."
            },
            {
              icon: Sparkles,
              title: "AI Interpretation",
              desc: "Utilizing modern artificial intelligence to instantly analyze combinations and suggest meaningful floral arrangements."
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2, ease: "easeOut" } }
              }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="w-12 h-12 bg-stone-50 text-emerald-800 flex items-center justify-center rounded-full mb-6">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-4">{pillar.title}</h3>
              <p className="text-stone-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Origin Image / Closing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative h-[400px] rounded-3xl overflow-hidden flex items-center justify-center"
        >
          <Image
            src="https://images.unsplash.com/photo-15424178235051463746?q=80&w=2000&auto=format&fit=crop"
            alt="Botanical Garden"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/40" />
          <div className="relative z-10 text-center px-4">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-6">Speak through nature.</h2>
            <p className="text-stone-200 tracking-widest uppercase text-sm">Welcome to the garden.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}