import { createContext, useContext, useState, useEffect } from 'react'
import { content } from '../locales/content'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lumora_lang')
      if (saved === 'id' || saved === 'en') return saved
    }
    return 'id'
  })

  const setLang = (newLang) => {
    setLangState(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lumora_lang', newLang)
    }
  }

  const t = content[lang] || content.id

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}
