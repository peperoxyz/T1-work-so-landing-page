/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pjs: ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
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
