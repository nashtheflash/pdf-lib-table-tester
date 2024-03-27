/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
      themes: [
        "retro"
      ],
    // {
    //   mytheme: {
    //   "primary": "#6f25ff",
    //   "secondary": "#007d46",
    //   "accent": "#006cff",
    //   "neutral": "#000500",
    //   "base-100": "#ffefec",
    //   "info": "#00d4ff",
    //   "success": "#5af975",
    //   "warning": "#af4b00",
    //   "error": "#ff8885",
    //   },
    // },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
};
