import { FormData, OutfitResponse } from "@/types";
import { getOutfitSuggestion } from "@/utils/geminiApi";

export function createOutfitPrompt(data: FormData): string {
  const greeting = data.username ? `Hello ${data.username}! ` : "Hi there! ";
  return `
    ${greeting}I'd love to help you find the perfect outfit today! 
    
    Let me create a stylish look for a ${
      data.age ? data.age + " year old " : ""
    }${data.gender}
    that's ideal for ${data.weather} weather and perfect for your ${
    data.occasion
  }.
    I'll make sure it matches your preferred ${data.style} style.

    Please write the answer in simple, friendly English.
    Keep it conversational and easy to understand, with one short paragraph (less than 200 words).
    Include specific, helpful suggestions for Tops, Bottoms, Shoes, and Accessories that work well together.
  `;
}

export const outfitService = {
  async getRecommendation(data: FormData): Promise<OutfitResponse> {
    try {
      const prompt = createOutfitPrompt(data);
      return await getOutfitSuggestion(prompt);
    } catch (error) {
      console.error("Error in outfitService:", error);
      return {
        text: "Oops! We couldn't generate your outfit recommendation right now. Please try again in a moment or refresh the page. We're working on getting this fixed for you!",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
};
