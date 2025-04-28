import { FormData, OutfitResponse } from "@/types";
import { getOutfitSuggestion } from "@/utils/geminiApi";

/**
 * Creates a prompt for the AI based on user form data
 */
export function createOutfitPrompt(data: FormData): string {
  return `
    Suggest a complete outfit for a ${data.age ? data.age + " year old " : ""}${
    data.gender
  } 
    in ${data.weather} weather for a ${data.occasion} occasion with a ${
    data.style
  } style.
    Include specific recommendations for tops, bottoms, shoes, and accessories that work well together.
    Format your response in a clear, easy-to-read way.
  `;
}

/**
 * Outfit service to handle getting outfit recommendations
 */
export const outfitService = {
  /**
   * Get outfit recommendations based on user input
   */
  async getRecommendation(data: FormData): Promise<OutfitResponse> {
    try {
      const prompt = createOutfitPrompt(data);
      return await getOutfitSuggestion(prompt);
    } catch (error) {
      console.error("Error in outfitService:", error);
      return {
        text: "An unexpected error occurred while generating your outfit recommendation.",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
};
