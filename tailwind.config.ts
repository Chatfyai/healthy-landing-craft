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
				'scale-x': {
					'0%': {
						transform: 'scaleX(0)'
					},
					'100%': {
						transform: 'scaleX(1)'
					}
				},
				'scroll': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-50%)'
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
				'slide-horizontal': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'slide-vertical': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100%)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-20px) translateX(10px) rotate(1deg)'
					},
					'50%': {
						transform: 'translateY(-10px) translateX(-5px) rotate(-1deg)'
					},
					'75%': {
						transform: 'translateY(-30px) translateX(-10px) rotate(0.5deg)'
					}
				},
				'float-medium': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) scale(1)'
					},
					'33%': {
						transform: 'translateY(-15px) translateX(8px) scale(1.05)'
					},
					'66%': {
						transform: 'translateY(-25px) translateX(-12px) scale(0.95)'
					}
				},
				'float-fast': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0)'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(15px)'
					}
				},
				'float-reverse': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(25px) translateX(-20px) rotate(2deg)'
					}
				},
				'float-particle': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) scale(1)',
						opacity: '0.6'
					},
					'25%': {
						transform: 'translateY(-30px) translateX(15px) scale(1.2)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateY(-50px) translateX(-10px) scale(0.8)',
						opacity: '1'
					},
					'75%': {
						transform: 'translateY(-25px) translateX(20px) scale(1.1)',
						opacity: '0.7'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'scale(1.3)',
						opacity: '0.8'
					}
				},
				'initial-pulse': {
					'0%': {
						transform: 'scale(1)'
					},
					'2%': {
						transform: 'scale(1.05)'
					},
					'4%': {
						transform: 'scale(1)'
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
				'scale-x': 'scale-x 0.8s ease-out 1.5s forwards',
				'scroll': 'scroll 30s linear infinite',
				'slide-right': 'slide-right 20s linear infinite',
				'slide-horizontal': 'slide-horizontal 25s linear infinite',
				'slide-vertical': 'slide-vertical 30s linear infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'float-medium': 'float-medium 6s ease-in-out infinite',
				'float-fast': 'float-fast 4s ease-in-out infinite',
				'float-reverse': 'float-reverse 10s ease-in-out infinite',
				'float-particle': 'float-particle 12s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'initial-pulse': 'initial-pulse 3s ease-out',
				'initial-pulse-delay': 'initial-pulse 3s ease-out 0.3s',
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
