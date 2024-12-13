/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/signin.{js,jsx,ts,tsx}",
    "./src/app/signup_email.{js,jsx,ts,tsx}",
    "./src/app/signup_num.{js,jsx,ts,tsx}",
    "./src/app/welcome.{js,jsx,ts,tsx}",
    "./src/cart/**/*.{js,jsx,ts,tsx}",
    "./src/menu/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

