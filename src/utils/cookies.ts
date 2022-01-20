import {Language, Theme} from '../types/types'

const languageKey = 'language'
const themeKey = 'theme'

export const setLanguage = (language: Language): void => localStorage.setItem(languageKey, language + '')
export const getLanguage = (): Language | null => localStorage.getItem(languageKey) as Language
export const clearLanguage = (): void => localStorage.removeItem(languageKey)
export const initLanguage = (defaultLanguage: Language): Language => {
  const language = getLanguage()
  if (language) return language
  setLanguage(defaultLanguage)
  return defaultLanguage
}

export const setTheme = (theme: Theme): void => localStorage.setItem(themeKey, theme)
export const getTheme = (): Theme | null => localStorage.getItem(themeKey) as Theme
export const clearTheme = (): void => localStorage.removeItem(themeKey)
export const initTheme = (defaultTheme: Theme): Theme => {
  const theme = getTheme()
  if (theme) return theme
  setTheme(defaultTheme)
  return defaultTheme
}
