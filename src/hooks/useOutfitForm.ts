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
    gender: "",
    weather: "",
    occasion: "",
    style: "",
    age: "",
  });
  const [ageError, setAgeError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const totalSteps = FORM_CONFIG.TOTAL_STEPS;

  // Update form data for a specific field
  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFieldError("");
  };

  // Validate age field
  const validateAge = () => {
    // Clear any previous error
    setAgeError("");

    // Age is required
    if (!formData.age) {
      setAgeError("Age is required");
      return false;
    }

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

  // Validate current step's field
  const validateCurrentStep = () => {
    setFieldError("");
    
    // Check the required field based on the current step
    switch (step) {
      case 1:
        if (!formData.username) {
          setFieldError("Please enter your name");
          return false;
        }
        break;
      case 2:
        if (!formData.gender) {
          setFieldError("Please select your gender");
          return false;
        }
        break;
      case 3:
        if (!formData.weather) {
          setFieldError("Please select the weather");
          return false;
        }
        break;
      case 4:
        if (!formData.occasion) {
          setFieldError("Please select an occasion");
          return false;
        }
        break;
      case 5:
        return validateAge();
      case 6:
        if (!formData.style) {
          setFieldError("Please select a style");
          return false;
        }
        break;
    }
    
    return true;
  };

  // Move to next step
  const handleNextStep = () => {
    // Validate current step before proceeding
    if (!validateCurrentStep()) return;
    
    setStep(Math.min(step + 1, totalSteps));
  };

  // Move to previous step
  const handlePreviousStep = () => {
    setStep(Math.max(step - 1, 1));
  };

  // Submit the form
  const handleSubmit = () => {
    if (validateCurrentStep()) {
      onSubmitCallback(formData);
    }
  };

  return {
    formData,
    step,
    totalSteps,
    ageError,
    fieldError,
    updateField,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  };
}
