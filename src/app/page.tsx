"use client";

import { useState } from "react";
import Form from "@/components/Form";
import OutfitCard from "@/components/OutfitCard";
import { getOutfitSuggestion } from "@/utils/geminiApi";
import "@/app/globals.css";

export default function Home() {
  const [outfit, setOutfit] = useState("");
  const [loading, setLoading] = useState(false);

  interface FormData {
    gender: string;
    weather: string;
    occasion: string;
    style: string;
  }

  const handleFormSubmit = async (data: FormData) => {
    setLoading(true);
    const prompt = `Suggest an outfit for a ${data.gender} in ${data.weather} weather for a ${data.occasion} occasion with a ${data.style} style.`;
    const suggestion = await getOutfitSuggestion(prompt);
    setOutfit(suggestion);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Form onSubmit={handleFormSubmit} />
      {loading ? (
        <p className="mt-4 text-gray-500">Loading...</p>
      ) : (
        <OutfitCard outfit={outfit} />
      )}
    </main>
  );
}
