import { GoogleGenerativeAI } from "@google/generative-ai";
import { OutfitResponse } from "@/types";

// Initialize the API with proper error handling for missing API key
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Only show warning in development environment
if (!API_KEY && process.env.NODE_ENV !== "production") {
  console.warn(
    "NEXT_PUBLIC_GEMINI_API_KEY is not set. Please add it to your .env.local file: NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here"
  );
}

// Initialize with an empty string if API key is missing, but handle properly in actual API calls
const genAI = new GoogleGenerativeAI(API_KEY || "");

/**
 * Gets an outfit suggestion from the Gemini AI model
 * @param prompt - The prompt to send to the Gemini model
 * @returns Promise containing the outfit suggestion or error message
 */
export async function getOutfitSuggestion(
  prompt: string
): Promise<OutfitResponse> {
  try {
    if (!API_KEY) {
      return {
        text: "API key is missing. Please add your Gemini API key to the .env.local file.",
        error: "API_KEY_MISSING",
      };
    }

    // Updated to use gemini-1.5-pro model which is available in the latest API version
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      if (!text || text.trim() === "") {
        return {
          text: "Received empty response from Gemini API. Please try again.",
          error: "EMPTY_RESPONSE",
        };
      }

      return { text };
    } catch (apiError: unknown) {
      // Handle specific Gemini API errors
      console.error("Gemini API error details:", apiError);

      const errorMessage =
        apiError instanceof Error ? apiError.message : String(apiError);

      // Check for rate limiting or quota issues
      if (errorMessage.includes("quota")) {
        return {
          text: "API quota exceeded. Please try again later or check your Gemini API plan.",
          error: "QUOTA_EXCEEDED",
        };
      }

      // Check for invalid API key
      if (errorMessage.includes("key")) {
        return {
          text: "Invalid API key. Please check your Gemini API key in the .env file.",
          error: "INVALID_API_KEY",
        };
      }

      // Return more specific error message
      return {
        text: "There was an issue with the Gemini API. Please try again later.",
        error:
          apiError instanceof Error ? apiError.message : "GEMINI_API_ERROR",
      };
    }
  } catch (error) {
    console.error("Error generating outfit suggestion:", error);
    return {
      text: "Sorry, I couldn't generate an outfit suggestion right now. Please check your network connection and try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
