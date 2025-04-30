"use client";

import { useState } from "react";
import Form from "@/components/Form";
import OutfitCard from "@/components/OutfitCard";
import { FormData, OutfitResponse } from "@/types";
import { outfitService } from "@/services/outfitService";

export default function RecommendPage() {
  const [outfit, setOutfit] = useState<OutfitResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await outfitService.getRecommendation(data);
      setOutfit(response);
    } catch (error) {
      console.error("Error in form submission:", error);
      setOutfit({
        text: "An unexpected error occurred. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-purple-700 pb-2 pt-4">
            Get Outfit Recommendations
          </h1>
          <p className="text-gray-600">
            Tell us about your needs and we&apos;ll suggest the perfect outfit
          </p>
        </header>

        <Form onSubmit={handleFormSubmit} />

        <OutfitCard outfit={outfit} isLoading={loading} />
      </div>
    </main>
  );
}
