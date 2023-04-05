module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      xs: "320px", // mobile
      sm: "576px", // mobile
      md: "768px", // tablet
      lg: "992px", // tablet
      xl: "1280px", // laptop
      "2xl": "1448px", // laptop
      "3xl": "1600px", // laptop
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
