// tailwind.config.ts

import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if using pages directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border-color)", // Define a custom border color
      },
      borderColor: {
        border: "var(--border-color)", // Now, `border-border` corresponds to `border-color: var(--border-color)`
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;