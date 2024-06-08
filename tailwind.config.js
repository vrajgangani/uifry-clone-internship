/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: "#FF5555",
    },

    extend: {
      fontFamily: {
        regular: ["Clash Display Regular"],
        medium: ["Clash Display Med"],
        semi: ["Clash Display semi"],
        lig: ["Clash Display Lig"],
        bold: ["Clash Display"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
