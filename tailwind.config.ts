import { type Config } from "tailwindcss"

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate1: "hsl(var(--slate1) / <alpha-value>)",
        slate2: "hsl(var(--slate2) / <alpha-value>)",
        slate3: "hsl(var(--slate3) / <alpha-value>)",
        slate4: "hsl(var(--slate4) / <alpha-value>)",
        slate5: "hsl(var(--slate5) / <alpha-value>)",
        slate6: "hsl(var(--slate6) / <alpha-value>)",
        slate7: "hsl(var(--slate7) / <alpha-value>)",
        slate8: "hsl(var(--slate8) / <alpha-value>)",
        slate9: "hsl(var(--slate9) / <alpha-value>)",
        slate10: "hsl(var(--slate10) / <alpha-value>)",
        slate11: "hsl(var(--slate11) / <alpha-value>)",
        slate12: "hsl(var(--slate12) / <alpha-value>)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
