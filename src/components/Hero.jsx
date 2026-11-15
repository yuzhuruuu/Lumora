import { useLang } from '../context/LanguageContext'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>{t.hero.eyebrow}</span>
            </div>
            <h1 className={styles.title}>
              {t.hero.titleLine1}<br />
              <em>{t.hero.titleLine2}</em>
            </h1>
            <p className={styles.desc}>
              {t.hero.desc}
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">{t.hero.ctaPrimary}</a>
              <a href="#services" className="btn-ghost">{t.hero.ctaSecondary} &nbsp;→</a>
            </div>
          </div>

          <div className={styles.visual}>
            <img
              src="/Logo/Light/Group 8.png"
              alt="Lumora Inovasi Utama"
              className={styles.logoMark}
            />
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {t.hero.stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
