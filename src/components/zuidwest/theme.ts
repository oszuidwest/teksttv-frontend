/** ZuidWest TV editions: palettes follow the design files; each has a header logo at `/logos/<edition>.svg`. */
export const themes = {
  baronie: {
    accent: '#82ba26',
    accentDark: '#003500',
    accentMid: '#42ab33',
    accentDeep: '#008c3b',
    clockIcon: '#42ab33',
    tickerArrow: '#82ba26',
    tickerBg: '#e0eec9',
    surface: '#e9e9e9',
  },
  heerlijkheid: {
    accent: '#e57c7c',
    accentDark: '#330000',
    accentMid: '#d34848',
    accentDeep: '#cc0000',
    clockIcon: '#cc0000',
    tickerArrow: '#cc0000',
    tickerBg: '#ffd9d9',
    surface: '#e9e9e9',
  },
  markiezaat: {
    accent: '#009fe3',
    accentDark: '#000035',
    accentMid: '#0064d7',
    accentDeep: '#0033cc',
    clockIcon: '#0064d7',
    tickerArrow: '#009fe3',
    tickerBg: '#bfe7f8',
    surface: '#e9e9e9',
  },
} as const

export type ThemeName = keyof typeof themes
