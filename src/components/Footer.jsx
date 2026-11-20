import { useLang } from '../context/LanguageContext'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/Logo/Light/Logo Lumora fix (1).png" alt="Logo Lumora" className={styles.logoIcon} />
              <img src="/Logo/Light/Group 7.png" alt="Lumora Inovasi Utama" className={styles.logoText} />
            </div>
            <p>{t.footer.desc}</p>
            <p className={styles.emailLine}>
              <a href="mailto:contact.lumorainovasi@gmail.com" className={styles.emailLink}>
                contact.lumorainovasi@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.col}>
            <h4>{t.footer.servicesCol}</h4>
            <ul>
              {t.services.items.map(s => (
                <li key={s.key}>
                  <a href="#services">{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h4>{t.footer.companyCol}</h4>
            <ul>
              {t.nav.links.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact">{t.nav.cta}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>{t.footer.copy}</p>
          <p className={styles.kbli}>{t.footer.kbli}</p>
        </div>
      </div>
    </footer>
  )
}
