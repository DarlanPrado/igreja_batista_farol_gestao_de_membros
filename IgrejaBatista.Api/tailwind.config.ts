import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        gold: {
            '50': '#ffffe7',
            '100': '#feffc1',
            '200': '#fffd86',
            '300': '#fff441',
            '400': '#ffe60d',
            '500': '#ffd700',
            '600': '#d19e00',
            '700': '#a67102',
            '800': '#89580a',
            '900': '#74480f',
            '950': '#442604',
        },
        
      }
    }
  }
}
