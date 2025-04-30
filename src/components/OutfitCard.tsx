import { OutfitResponse } from "@/types";
import { Card } from "@/components/ui/Card";

interface OutfitCardProps {
  outfit: OutfitResponse | null;
  isLoading?: boolean;
}

export default function OutfitCard({
  outfit,
  isLoading = false,
}: OutfitCardProps) {
  if (isLoading) {
    return (
      <Card className="mt-6 sm:mt-8 w-full max-w-md p-4 sm:p-6 border-purple-200 shadow-lg">
        <div className="animate-pulse">
          <div className="h-6 sm:h-8 bg-purple-100 rounded-full w-3/4 mb-4 sm:mb-6"></div>
          <div className="h-3 sm:h-4 bg-purple-50 rounded-full mb-3"></div>
          <div className="h-3 sm:h-4 bg-purple-50 rounded-full mb-3 w-5/6"></div>
          <div className="h-3 sm:h-4 bg-purple-50 rounded-full w-4/6 mb-3"></div>
          <div className="h-3 sm:h-4 bg-purple-50 rounded-full mb-3 w-11/12"></div>
          <div className="mt-3 sm:mt-4 flex items-center justify-center">
            <div className="text-sm sm:text-base text-purple-400">
              Crafting your perfect outfit...
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // No outfit data
  if (!outfit) return null;

  // Error state
  if (outfit.error) {
    return (
      <Card
        variant="error"
        className="mt-6 sm:mt-8 w-full max-w-md p-4 sm:p-6 border-red-200 shadow-md"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-600 flex items-center">
          <span className="mr-2">⚠️</span>
          <span>We hit a snag</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-700">{outfit.text}</p>
        <button className="mt-3 sm:mt-4 text-sm text-purple-600 hover:text-purple-800 transition-colors">
          Try again
        </button>
      </Card>
    );
  }

  return (
    <Card className="mt-6 sm:mt-8 w-full max-w-md p-4 sm:p-6 border-purple-200 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-600 flex items-center">
        <span className="mr-2">✨</span>
        <span>Your Perfect Outfit</span>
      </h2>
      <div className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
        {outfit.text}
      </div>
      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-purple-100 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
        <button className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
          ♥ Save this outfit
        </button>
        <button className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
          Share outfit
        </button>
      </div>
    </Card>
  );
}
