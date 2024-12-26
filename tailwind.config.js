/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "520px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        oneast: ' "Nunito", serif',
      },
      colors: {
        primaryColor: "#F26922",
        secondaryColor: "#71717A",
      },
    },
  },
  plugins: [],
};
