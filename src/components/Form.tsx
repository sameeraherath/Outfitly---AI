"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface FormData {
  gender: string;
  weather: string;
  occasion: string;
  style: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function OutfitForm({ onSubmit }: FormProps) {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("male");
  const [weather, setWeather] = useState("sunny");
  const [occasion, setOccasion] = useState("casual");
  const [style, setStyle] = useState("casual");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    onSubmit({ gender, weather, occasion, style });
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
            Style Finder
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Personalize your perfect outfit step-by-step
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                I&apos;m shopping for
              </h3>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setGender("male")}
                  className={`p-4 rounded-xl ${
                    gender === "male"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`p-4 rounded-xl ${
                    gender === "female"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("unisex")}
                  className={`p-4 rounded-xl ${
                    gender === "unisex"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Unisex
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Weather conditions
              </h3>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setWeather("sunny")}
                  className={`p-4 rounded-xl ${
                    weather === "sunny"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Sunny
                </button>
                <button
                  onClick={() => setWeather("rainy")}
                  className={`p-4 rounded-xl ${
                    weather === "rainy"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Rainy
                </button>
                <button
                  onClick={() => setWeather("cold")}
                  className={`p-4 rounded-xl ${
                    weather === "cold"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Cold
                </button>
                <button
                  onClick={() => setWeather("hot")}
                  className={`p-4 rounded-xl ${
                    weather === "hot" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Hot
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Occasion
              </h3>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setOccasion("casual")}
                  className={`p-4 rounded-xl ${
                    occasion === "casual"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Casual
                </button>
                <button
                  onClick={() => setOccasion("work")}
                  className={`p-4 rounded-xl ${
                    occasion === "work"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => setOccasion("party")}
                  className={`p-4 rounded-xl ${
                    occasion === "party"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Party
                </button>
                <button
                  onClick={() => setOccasion("gym")}
                  className={`p-4 rounded-xl ${
                    occasion === "gym"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Gym
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Style preference
              </h3>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setStyle("casual")}
                  className={`p-4 rounded-xl ${
                    style === "casual"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Casual
                </button>
                <button
                  onClick={() => setStyle("formal")}
                  className={`p-4 rounded-xl ${
                    style === "formal"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Formal
                </button>
                <button
                  onClick={() => setStyle("sporty")}
                  className={`p-4 rounded-xl ${
                    style === "sporty"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Sporty
                </button>
                <button
                  onClick={() => setStyle("streetwear")}
                  className={`p-4 rounded-xl ${
                    style === "streetwear"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Streetwear
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Find My Perfect Outfit
              </button>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={handlePreviousStep}
                className="text-sm text-gray-500 hover:text-purple-500"
              >
                Previous
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={handleNextStep}
                className="text-sm text-purple-500 hover:text-purple-700 ml-auto"
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
