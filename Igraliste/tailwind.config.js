/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
         screens: {
           xs: "270px",
        //   sm: "380px",
        //   md: "640px",
        //   lg: "768px",
        //   xl: "1024px",
        //   "2xl": "1256px",
        //   "3xl": "1536px",
         },
    },
  },
  plugins: [],
};
