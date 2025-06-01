
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#4D9E14',
					foreground: '#F8F9FA'
				},
				secondary: {
					DEFAULT: '#7CB342',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#689F38',
					foreground: '#F8F9FA'
				},
				natural: {
					green: '#4D9E14',
					'green-light': '#7CB342',
					'green-dark': '#2E7D32',
					orange: '#FF9800',
					'orange-warm': '#F57C00',
					'orange-light': '#FFB74D',
					'off-white': '#F8F9FA',
					'gray-medium': '#ADB5BD',
					'gray-dark': '#343A40'
				},
				whatsapp: {
					DEFAULT: '#25D366',
					dark: '#128C7E',
					light: '#DCF8C6'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F8F9FA',
					foreground: '#ADB5BD'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				'pulse-whatsapp': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)'
					},
					'50%': {
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-right': 'slide-right 20s linear infinite',
				'pulse-whatsapp': 'pulse-whatsapp 2s infinite'
			},
			fontFamily: {
				'title': ['Montserrat', 'sans-serif'],
				'body': ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
