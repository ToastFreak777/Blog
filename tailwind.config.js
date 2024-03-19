/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  media: false,
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
    },
  },
  plugins: [],
};
