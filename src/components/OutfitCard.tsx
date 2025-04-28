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
  // Return loading state
  if (isLoading) {
    return (
      <Card className="mt-8 max-w-md">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5 w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </Card>
    );
  }

  // No outfit data
  if (!outfit) return null;

  // Error state
  if (outfit.error) {
    return (
      <Card variant="error" className="mt-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">⚠️ Error</h2>
        <p className="text-gray-700">{outfit.text}</p>
      </Card>
    );
  }

  // Success state
  return (
    <Card className="mt-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-purple-600">
        🎽 Your Outfit Suggestion
      </h2>
      <p className="text-gray-700">{outfit.text}</p>
    </Card>
  );
}
