/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "code-75": "'Code 75', sans-serif",
        cyber: "'Cyberpunk', sans-serif",
        matrix: "'Matrix Dots', sans-serif",
        "code-jd": "'JD Code', sans-serif",
        "code-mono": "'Mono Code', sans-serif",
      },
      colors: {
        matrix: {
          "dark-green": "#003B00",
          green: "#008F11",
          "light-green": "#00FF41",
        },
      },
    },
    screens: {
      tiny: "360px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1336px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
