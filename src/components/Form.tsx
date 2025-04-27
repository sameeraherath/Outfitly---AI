import { useState } from "react";

interface FormData {
  gender: string;
  weather: string;
  occasion: string;
  style: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [gender, setGender] = useState("male");
  const [weather, setWeather] = useState("sunny");
  const [occasion, setOccasion] = useState("casual");
  const [style, setStyle] = useState("casual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ gender, weather, occasion, style });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-md"
    >
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unisex">Unisex</option>
      </select>

      <select
        value={weather}
        onChange={(e) => setWeather(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="cold">Cold</option>
        <option value="hot">Hot</option>
      </select>

      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="casual">Casual</option>
        <option value="work">Work</option>
        <option value="party">Party</option>
        <option value="gym">Gym</option>
      </select>

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
        <option value="sporty">Sporty</option>
        <option value="streetwear">Streetwear</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
      >
        Get Outfit
      </button>
    </form>
  );
}
