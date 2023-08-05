module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".glass": {
          opacity: "0.7",
          backdropFilter: "blur(50px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        "@screen sm": {
          ".glass": {
            // Custom styles for small screens
          },
        },
        "@screen md": {
          ".glass": {
            // Custom styles for medium screens
          },
        },
        "@screen lg": {
          ".glass": {
            // Custom styles for large screens
          },
        },
        "@screen xl": {
          ".glass": {
            // Custom styles for extra-large screens
          },
        },
        "@screen 2xl": {
          ".glass": {
            // Custom styles for 2xl screens
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
