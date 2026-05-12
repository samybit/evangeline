"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Send, User, Flower2 } from "lucide-react";

interface Message {
  role: "user" | "botanist";
  content: string;
}

export default function BotanistChat({ flowerName }: { flowerName: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "botanist",
      content: `Hello. I am the resident botanist. What would you like to know about the ${flowerName}?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SUGGESTIONS = [
    `How do I care for the ${flowerName}?`,
    `What flowers pair well with it?`,
    `Tell me a myth about it.`
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/botanist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, flowerName }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "botanist", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "botanist", content: "I seem to have lost my connection to the garden. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full group flex items-center justify-between bg-stone-900 hover:bg-emerald-900 text-stone-50 p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-left">
          <div className="flex flex-col">
            <span className="font-serif text-xl mb-1 flex items-center">
              Ask the Botanist <Sparkles className="w-4 h-4 ml-2 text-emerald-400" />
            </span>
            <span className="text-sm text-stone-400 group-hover:text-stone-300 transition-colors">
              Discover care tips, pairing suggestions, or more lore.
            </span>
          </div>
          <ArrowRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md border-l-0 bg-stone-50 p-0 flex flex-col h-full">
        <SheetHeader className="p-6 border-b border-stone-200 bg-white">
          <SheetTitle className="font-serif text-2xl text-stone-800 flex items-center">
            <Flower2 className="w-5 h-5 mr-2 text-emerald-700" />
            The Botanist
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-grow p-6">
          <div className="flex flex-col space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 ${msg.role === "user"
                    ? "bg-stone-900 text-stone-50 rounded-tr-sm"
                    : "bg-white border border-stone-200 text-stone-800 rounded-tl-sm shadow-sm"
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 rounded-2xl rounded-tl-sm p-4 shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-6 bg-white border-t border-stone-200">
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
                className="text-xs bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 text-stone-600 px-3 py-1.5 rounded-full transition-colors border border-stone-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex items-center space-x-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="bg-stone-50 border-stone-200 focus-visible:ring-emerald-700"
            />
            <Button type="submit" size="icon" disabled={isLoading} className="bg-emerald-800 hover:bg-emerald-900 text-white">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}