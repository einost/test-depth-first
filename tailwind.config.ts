import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const colors = require('tailwindcss/colors');
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        50: '#eaf1f3',
        100: '#cddfe3',
        200: '#9ebcc4',
        300: '#6f98a4',
        400: '#4b7988',
        500: '#1c4650',
        600: '#173941',
        700: '#122d34',
        800: '#0d2227',
        900: '#09181c',
        950: '#040d0f',
      },
    },
  },
  plugins: [
    ({ addBase, theme }: PluginAPI) => {
      const colors = theme('colors') as Record<
        string,
        string | Record<string, string>
      >;
      const cssVariables: Record<string, string> = {};

      Object.keys(colors).forEach((key) => {
        const colorValue = colors[key];
        if (typeof colorValue === 'object') {
          Object.keys(colorValue).forEach((shade) => {
            cssVariables[`--color-${key}-${shade}`] = colorValue[
              shade
            ] as string;
          });
        } else {
          cssVariables[`--color-${key}`] = colorValue;
        }
      });

      addBase({
        ':root': cssVariables,
      });
    },
  ],
};
export default config;
