import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, flowerName } = await req.json();

    // Simulate network delay for realism
    // swap the setTimeout block with an actual call to the Vercel AI SDK using an OpenAI or Gemini key
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // A simple mock router to give contextual responses based on the suggestion chips
    let reply = `That is a fascinating question about the ${flowerName}. In floriography, its nuances are endless.`;

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("care")) {
      reply = `To care for the ${flowerName}, ensure it receives adequate sunlight but protect it from harsh afternoon rays. Keep the soil evenly moist, but never waterlogged.`;
    } else if (lowerMessage.includes("pair")) {
      reply = `The ${flowerName} pairs beautifully with delicate, structural foliage or small, white accent flowers like Baby's Breath or Queen Anne's Lace to let its primary colors shine.`;
    } else if (lowerMessage.includes("myth") || lowerMessage.includes("story")) {
      reply = `Ah, the lore of the ${flowerName} is quite rich. Ancient texts suggest it was born from a fallen star, bringing a piece of the cosmos to the soil.`;
    }

    return NextResponse.json({ reply });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}