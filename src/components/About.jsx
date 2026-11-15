import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import { Ruler, MessageSquareQuote, TrendingUp, Handshake } from 'lucide-react'
import styles from '../styles/About.module.css'

const iconMap = {
  scale: Ruler,
  clarity: MessageSquareQuote,
  gradual: TrendingUp,
  support: Handshake,
}

export default function About() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div className={`${styles.visual} fade-up`}>
            <div className={styles.card}>
              <img src="/Logo/Light/Group 8.png" alt="PT Lumora Inovasi Utama" className={styles.cardLogo} />
              <p className={styles.cardTagline}>{t.about.taglineQuote}</p>
              <p className={styles.cardSub}>
                {t.about.cardSub}
              </p>
            </div>
            <div className={styles.badge}>{t.about.badge}</div>
          </div>

          <div className={styles.content}>
            <span className="tag">{t.about.tag}</span>
            <h2 className="section-title fade-up" style={{ whiteSpace: 'pre-line' }}>
              {t.about.title}
            </h2>
            <div className="divider" />
            <p className={`${styles.desc} fade-up d1`}>
              {t.about.desc1}
            </p>
            <p className={`${styles.desc} fade-up d2`}>
              {t.about.desc2}
            </p>

            <div className={styles.features}>
              {t.about.features.map((f, i) => {
                const IconComponent = iconMap[f.key] || Ruler
                return (
                  <div key={f.key} className={`${styles.feat} fade-up d${i + 1}`}>
                    <div className={styles.featIcon}>
                      <IconComponent className={styles.iconSvg} size={18} strokeWidth={1.8} />
                    </div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
