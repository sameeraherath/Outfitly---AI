export const APP_NAME = "Outfitly";

// Form configuration
export const FORM_CONFIG = {
  TOTAL_STEPS: 7, 
  DEFAULT_VALUES: {
    username: "",
    gender: "",
    weather: "",
    occasion: "",
    style: "",
    age: "",
  },
};

// Options for each form field
export const FORM_OPTIONS = {
  GENDER: [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "unisex", label: "Unisex" },
  ],
  WEATHER: [
    { id: "sunny", label: "Sunny" },
    { id: "rainy", label: "Rainy" },
    { id: "cold", label: "Cold" },
    { id: "hot", label: "Hot" },
  ],
  OCCASION: [
    { id: "casual", label: "Casual" },
    { id: "work", label: "Work" },
    { id: "party", label: "Party" },
    { id: "gym", label: "Gym" },
  ],
  STYLE: [
    { id: "casual", label: "Casual" },
    { id: "formal", label: "Formal" },
    { id: "sporty", label: "Sporty" },
    { id: "streetwear", label: "Streetwear" },
  ],
};
