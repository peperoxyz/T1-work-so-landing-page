/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        144: "36rem",
        256: "64rem",
        512: "128rem",
      },
    },
  },
  plugins: [],
};
