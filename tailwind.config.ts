import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			shine: "shine 3s ease-out infinite",
		  },
		  keyframes: {
			shine: {
			  "0%": { backgroundPosition: "200% 0" },
			  "25%": { backgroundPosition: "-200% 0" },
			  "100%": { backgroundPosition: "-200% 0" },
			},
		  },
  		fontFamily: {
  			heading: [
  				'var(--font-heading)',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			brand: {
  				'25': '#FBF7FF',
  				'50': '#F4ECFF',
  				'100': '#E6D9FF',
  				'200': '#CDB3FF',
  				'300': '#B38CFF',
  				'400': '#9966FF',
  				'500': '#8040FF',
  				'600': '#662FCC',
  				'700': '#4D2399',
  				'800': '#331966',
  				'900': '#1A0D33',
  				'950': '#100822'
  			},
			"discord-background": "#36393f",
		"discord-brand-color": "#5865f2",
        "discord-gray": "#36393f",
        "discord-text": "#dcddde",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
