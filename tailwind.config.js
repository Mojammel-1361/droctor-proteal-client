/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#37CDBE",

          neutral: "#191A3E",

          "base-100": "#FAFAFA",

          info: "#3194F6",

          success: "#5EC992",

          warning: "#F7E02B",

          error: "#E60400",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
