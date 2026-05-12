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
    image: "https://images.unsplash.com/photo-1593011311094-1aebf1da5e8d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "spider-lily",
    name: "Red Spider Lily",
    scientificName: "Lycoris radiata",
    shortMeaning: "Final Goodbyes, Reincarnation",
    fullMeaning: "Legend has it that these flowers grow along the banks of the Sanzu River, guiding the dead to the afterlife. Because the leaves and the flowers of this plant never appear at the same time, it symbolizes lovers who are bound to be separated, making it a poignant symbol of final goodbyes.",
    origin: "China, Korea, and Nepal",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    shortMeaning: "Adoration, Loyalty, Longevity",
    fullMeaning: "Sunflowers physically turn their heads to follow the sun across the sky, a behavior known as heliotropism. Because of this unwavering focus, Victorian floriography assigned them the meaning of absolute adoration, loyalty, and steadfast faith.",
    origin: "North and Central America",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "lavender",
    name: "Lavender",
    scientificName: "Lavandula",
    shortMeaning: "Serenity, Grace, Devotion",
    fullMeaning: "Known primarily for its soothing scent, lavender has historically represented purity, silence, and devotion. In ancient times, it was used in holy rituals and purification baths. Giving someone lavender signals a deep, peaceful devotion to them.",
    origin: "Mediterranean, Middle East, and India",
    image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "white-lily",
    name: "White Lily",
    scientificName: "Lilium candidum",
    shortMeaning: "Purity, Majesty, Rebirth",
    fullMeaning: "The white lily is deeply entrenched in ancient mythology and various religions. The Greeks believed it sprouted from the milk of Hera, the queen of the gods. Today, it is heavily associated with purity, mourning, and the restoration of the soul.",
    origin: "Balkans and Middle East",
    image: "https://images.unsplash.com/photo-1599833975775-4927ed5d97f5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    scientificName: "Prunus serrulata",
    shortMeaning: "Transience of Life, Renewal",
    fullMeaning: "In Japanese culture (where it is known as Sakura), the cherry blossom represents the fragile, fleeting nature of life. Their brilliant, breathtaking bloom lasts only a few days before falling to the earth, serving as a reminder to appreciate the present moment.",
    origin: "East Asia (Japan, China, Korea)",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "orchid",
    name: "Orchid",
    scientificName: "Orchidaceae",
    shortMeaning: "Refined Beauty, Strength, Luxury",
    fullMeaning: "During the Victorian era, orchids were exceedingly rare and found only in the tropics, making them a symbol of extreme luxury and refined taste. The ancient Greeks, however, associated them with virility and strength.",
    origin: "Worldwide (Primarily Tropics)",
    image: "https://images.unsplash.com/photo-1565010619717-380d3ce30948?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "red-rose",
    name: "Red Rose",
    scientificName: "Rosa",
    shortMeaning: "Deep Love, Passion, Desire",
    fullMeaning: "Perhaps the most universally recognized flower in the world, the red rose has been a symbol of passionate love across countless cultures, from ancient Roman goddess Venus to modern Valentine's Day. The deeper the red, the deeper the stated affection.",
    origin: "Asia, North America, Europe",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "daisy",
    name: "Daisy",
    scientificName: "Bellis perennis",
    shortMeaning: "Innocence, Purity, True Love",
    fullMeaning: "The daisy's name comes from the Old English 'dæges eage' (day's eye), because its petals open at dawn and close at dusk. In Celtic mythology, it was believed that gods sprinkled daisies over the earth to cheer up grieving parents, making them symbols of innocence.",
    origin: "Europe and North Africa",
    image: "https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "iris",
    name: "Iris",
    scientificName: "Iris",
    shortMeaning: "Wisdom, Courage, Hope",
    fullMeaning: "Named after the Greek goddess of the rainbow who served as a messenger to the gods, the iris symbolizes eloquence and communication. A purple iris specifically denotes wisdom and compliments, while a blue iris implies faith and hope.",
    origin: "Northern Hemisphere",
    image: "https://images.unsplash.com/photo-1616857467615-568ebbaecf13?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "hydrangea",
    name: "Hydrangea",
    scientificName: "Hydrangea macrophylla",
    shortMeaning: "Gratitude, Honest Emotion, Apology",
    fullMeaning: "In Japan, hydrangeas are associated with heartfelt emotion and apologies, stemming from an ancient legend where an emperor gave them to the family of the girl he loved to apologize for neglecting her. Conversely, Victorians sometimes viewed them as symbols of boastfulness due to their massive blooms but few seeds.",
    origin: "Asia and the Americas",
    image: "https://images.unsplash.com/photo-1536006478335-e1b1d40fb178?q=80&w=1000&auto=format&fit=crop",
  }
];