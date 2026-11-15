import { useState } from 'react'
import { useNavbar } from '../hooks/useNavbar'
import { useLang } from '../context/LanguageContext'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const { scrolled } = useNavbar()
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <img src="/Logo/Light/Logo Lumora fix (1).png" alt="Logo Lumora" className={styles.logoIcon} />
            <img src="/Logo/Light/Group 7.png" alt="Lumora Inovasi Utama" className={styles.logoText} />
          </a>

          <div className={styles.rightGroup}>
            <ul className={`${styles.links} ${open ? styles.open : ''}`}>
              {t.nav.links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
                  {t.nav.cta}
                </a>
              </li>
            </ul>

            {/* Language Switcher */}
            <div className={styles.langSwitch}>
              <button
                type="button"
                className={`${styles.langBtn} ${lang === 'id' ? styles.langActive : ''}`}
                onClick={() => setLang('id')}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <span className={styles.langDivider}>/</span>
              <button
                type="button"
                className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
                onClick={() => setLang('en')}
                title="English"
              >
                EN
              </button>
            </div>

            <button
              className={`${styles.hamburger} ${open ? styles.active : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
