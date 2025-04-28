/**
 * Theme configuration for the application
 * This helps maintain consistent styling across components
 */

export const THEME = {
  COLORS: {
    primary: {
      light: "#EBE3FB",
      main: "#8B5CF6",
      dark: "#6D28D9",
      gradient: "from-purple-600 to-pink-600",
      gradientHover: "from-purple-700 to-pink-700",
    },
    secondary: {
      light: "#F3F4F6",
      main: "#9CA3AF",
      dark: "#4B5563",
    },
    success: {
      light: "#ECFDF5",
      main: "#10B981",
      dark: "#047857",
    },
    error: {
      light: "#FEF2F2",
      main: "#EF4444",
      dark: "#B91C1C",
    },
    warning: {
      light: "#FFFBEB",
      main: "#F59E0B",
      dark: "#B45309",
    },
    info: {
      light: "#EFF6FF",
      main: "#3B82F6",
      dark: "#1D4ED8",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },
  },
  SPACING: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  BORDER_RADIUS: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    xxl: "1.5rem",
    pill: "9999px",
  },
  SHADOWS: {
    sm: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    md: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    lg: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    xl: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  },
  BREAKPOINTS: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
};
