export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  shortMeaning: string;
  fullMeaning: string;
  origin: string;
  image: string;
}

export const FLOWERS: Flower[] = [
  {
    id: "peony",
    name: "Peony",
    scientificName: "Paeonia",
    shortMeaning: "Romance, Prosperity, Good Fortune",
    fullMeaning: "In floriography, the peony represents a happy life, happy marriage, good health, and prosperity. It is often considered a symbol of bashfulness due to the ancient Greek myth of Paeon, a healer who was turned into a flower by Zeus to save him from the wrath of his jealous teacher, Asclepius.",
    origin: "Asia, Europe, and Western North America",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "blue-lotus",
    name: "Blue Lotus",
    scientificName: "Nymphaea caerulea",
    shortMeaning: "Spiritual Rebirth, Wisdom, Tranquility",
    fullMeaning: "The Blue Lotus was sacred to the ancient Egyptians. Because it submerges into the water at night and re-emerges with the sun in the morning, it became heavily associated with rebirth, the sun, and creation itself. It was frequently used in spiritual rituals.",
    origin: "Egypt and East Africa",
    image: "https://images.unsplash.com/photo-1720419359118-93acec7b2496?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "spider-lily",
    name: "Red Spider Lily",
    scientificName: "Lycoris radiata",
    shortMeaning: "Final Goodbyes, Reincarnation",
    fullMeaning: "Legend has it that these flowers grow along the banks of the Sanzu River, guiding the dead to the afterlife. Because the leaves and the flowers of this plant never appear at the same time, it symbolizes lovers who are bound to be separated, making it a poignant symbol of final goodbyes.",
    origin: "China, Korea, and Nepal",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop",
  }
];