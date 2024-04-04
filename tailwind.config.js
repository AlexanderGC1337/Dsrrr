/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#313170",
          "secondary": "#F7951F",
          "accent": "#4338ca",
          "neutral": "#221F20",
          "base-100": "#f3f4f6",
          "info": "#e7e5e4",
          "success": "#00ff00",
          "warning": "#fbbf24",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
