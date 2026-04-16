import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: '#07080b',
        panel: 'rgba(20, 21, 30, 0.55)',
        border: 'rgba(148, 163, 184, 0.2)',
        text: '#e6e9f2',
        muted: '#9ba4b7'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.3), transparent 45%), radial-gradient(circle at 80% 10%, rgba(14, 165, 233, 0.25), transparent 40%), linear-gradient(160deg, #040507 0%, #0b0d12 55%, #090a0f 100%)'
      },
      boxShadow: {
        glow: '0 0 45px rgba(79, 70, 229, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
