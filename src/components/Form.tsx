"use client";

import { Sparkles } from "lucide-react";
import { FormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { FORM_OPTIONS } from "@/config/constants";
import { useOutfitForm } from "@/hooks/useOutfitForm";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function OutfitForm({ onSubmit }: FormProps) {
  const {
    formData,
    step,
    totalSteps,
    ageError,
    fieldError,
    updateField,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  } = useOutfitForm(onSubmit);

  const SelectionButton = ({
    selected,
    onClick,
    children,
    color = "purple",
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    color?: "purple";
  }) => {
    const colorStyles = {
      purple: selected ? "bg-purple-500 text-white" : "bg-gray-200",
      blue: selected ? "bg-blue-500 text-white" : "bg-gray-200",
      green: selected ? "bg-green-500 text-white" : "bg-gray-200",
      amber: selected ? "bg-amber-500 text-white" : "bg-gray-200",
    };

    return (
      <button
        type="button"
        onClick={onClick}
        className={`p-4 rounded-xl ${colorStyles[color]}`}
      >
        {children}
      </button>
    );
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

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1 w-5 mx-1 rounded-full ${
                  idx + 1 <= step ? "bg-purple-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                What&apos;s your name?
              </h3>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => updateField("username", e.target.value)}
                className={`w-full p-3 border rounded-lg mb-1 ${
                  fieldError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
                required
              />
              {fieldError && (
                <p className="text-red-500 text-sm">{fieldError}</p>
              )}
              <p className="text-gray-500 text-xs mt-2">
                We&apos;ll personalize your outfit recommendations
              </p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                I&apos;m shopping for
              </h3>
              <div className="flex space-x-4 justify-center">
                {FORM_OPTIONS.GENDER.map((option) => (
                  <SelectionButton
                    key={option.id}
                    selected={formData.gender === option.id}
                    onClick={() => updateField("gender", option.id)}
                    color="purple"
                  >
                    {option.label}
                  </SelectionButton>
                ))}
              </div>
              {fieldError && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {fieldError}
                </p>
              )}
            </div>
          )}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Weather conditions
              </h3>
              <div className="flex space-x-4 justify-center">
                {FORM_OPTIONS.WEATHER.map((option) => (
                  <SelectionButton
                    key={option.id}
                    selected={formData.weather === option.id}
                    onClick={() => updateField("weather", option.id)}
                    color="purple"
                  >
                    {option.label}
                  </SelectionButton>
                ))}
              </div>
              {fieldError && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {fieldError}
                </p>
              )}
            </div>
          )}
          {step === 4 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Occasion
              </h3>
              <div className="flex space-x-4 justify-center">
                {FORM_OPTIONS.OCCASION.map((option) => (
                  <SelectionButton
                    key={option.id}
                    selected={formData.occasion === option.id}
                    onClick={() => updateField("occasion", option.id)}
                    color="purple"
                  >
                    {option.label}
                  </SelectionButton>
                ))}
              </div>
              {fieldError && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {fieldError}
                </p>
              )}
            </div>
          )}
          {step === 5 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                How old are you?
              </h3>
              <input
                type="text"
                value={formData.age}
                onChange={(e) => updateField("age", e.target.value)}
                className={`w-full p-3 border rounded-lg mb-1 ${
                  ageError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your age"
                required
              />
              {ageError && <p className="text-red-500 text-sm">{ageError}</p>}
              <p className="text-gray-500 text-xs mt-2">
                This helps us suggest age-appropriate outfits
              </p>
            </div>
          )}
          {step === 6 && (
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Style preference
              </h3>
              <div className="flex space-x-4 justify-center">
                {FORM_OPTIONS.STYLE.map((option) => (
                  <SelectionButton
                    key={option.id}
                    selected={formData.style === option.id}
                    onClick={() => updateField("style", option.id)}
                    color="purple"
                  >
                    {option.label}
                  </SelectionButton>
                ))}
              </div>
              {fieldError && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {fieldError}
                </p>
              )}
            </div>
          )}

          {step === 7 && (
            <div className="text-center">
              <Button
                onClick={handleSubmit}
                fullWidth
                size="lg"
                className="flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get My Outfit
              </Button>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button onClick={handlePreviousStep} variant="outline" size="sm">
                Previous
              </Button>
            )}
            {step < 7 && (
              <Button
                onClick={handleNextStep}
                variant="primary"
                size="sm"
                className="ml-auto"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
