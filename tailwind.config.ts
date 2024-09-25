import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './docs-demo/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

export default config
