import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
  brand: {
    25: "#FBF7FF",
    50: "#F4ECFF",
    100: "#E6D9FF",
    200: "#CDB3FF",
    300: "#B38CFF",
    400: "#9966FF",
    500: "#8040FF",
    600: "#662FCC",
    700: "#4D2399",
    800: "#331966",
    900: "#1A0D33",
    950: "#100822",
  },
}

      
    },
  },
  plugins: [],
}
export default config
