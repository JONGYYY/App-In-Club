import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--brand)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      boxShadow: {
        elevation1: "var(--shadow-1)",
        elevation2: "var(--shadow-2)",
        elevation3: "var(--shadow-3)",
        elevation4: "var(--shadow-4)",
      },
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
} satisfies Config;
