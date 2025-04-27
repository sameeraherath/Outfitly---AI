interface OutfitCardProps {
  outfit: string | null;
}

export default function OutfitCard({ outfit }: OutfitCardProps) {
  if (!outfit) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-purple-600">
        🎽 Your Outfit Suggestion
      </h2>
      <p className="text-gray-700">{outfit}</p>
    </div>
  );
}
