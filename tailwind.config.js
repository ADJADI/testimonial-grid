/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        grayBlue: "hsl(210, 46%, 95%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightBlue: "hsl(210, 46%, 95%)",
      },
      textColor: {
        grayBlue: "hsl(210, 46%, 95%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightBlue: "hsl(210, 46%, 95%)",
        darkBlue: "hsl(217, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
