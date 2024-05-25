/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import flowbite from 'flowbite/plugin';
export default withMT({
  content: ["./index.html", "./node_modules/flowbite/**/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
});
