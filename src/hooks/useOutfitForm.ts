import { useState } from "react";
import { FormData } from "@/types";
import { FORM_CONFIG } from "@/config/constants";

/**
 * Custom hook to manage outfit form state and logic
 */
export function useOutfitForm(onSubmitCallback: (data: FormData) => void) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    gender: FORM_CONFIG.DEFAULT_VALUES.gender,
    weather: FORM_CONFIG.DEFAULT_VALUES.weather,
    occasion: FORM_CONFIG.DEFAULT_VALUES.occasion,
    style: FORM_CONFIG.DEFAULT_VALUES.style,
    age: FORM_CONFIG.DEFAULT_VALUES.age,
  });
  const [ageError, setAgeError] = useState("");
  const totalSteps = FORM_CONFIG.TOTAL_STEPS;

  // Update form data for a specific field
  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Validate age field
  const validateAge = () => {
    // Clear any previous error
    setAgeError("");

    // Age can be empty, that's fine
    if (!formData.age) return true;

    // Check if age is a valid number
    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum)) {
      setAgeError("Please enter a valid number");
      return false;
    }

    // Check if age is within a reasonable range
    if (ageNum < 1 || ageNum > 120) {
      setAgeError("Please enter a valid age between 1 and 120");
      return false;
    }

    return true;
  };

  // Move to next step
  const handleNextStep = () => {
    // Validate age before proceeding if on age step
    if (step === 5) {
      if (!validateAge()) return;
    }
    setStep(Math.min(step + 1, totalSteps));
  };

  // Move to previous step
  const handlePreviousStep = () => {
    setStep(Math.max(step - 1, 1));
  };

  // Submit the form
  const handleSubmit = () => {
    if (validateAge()) {
      onSubmitCallback(formData);
    }
  };

  return {
    formData,
    step,
    totalSteps,
    ageError,
    updateField,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  };
}
