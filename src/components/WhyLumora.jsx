import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import styles from '../styles/WhyLumora.module.css'

export default function WhyLumora() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="why" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div>
            <span className="tag">{t.why.tag}</span>
            <h2 className="section-title fade-up" style={{ whiteSpace: 'pre-line' }}>
              {t.why.title}
            </h2>
            <div className="divider" />
            <div className={styles.list}>
              {t.why.whys.map((w, i) => (
                <div key={w.num} className={`${styles.item} fade-up d${i % 3}`}>
                  <span className={styles.num}>{w.num}</span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.visual} fade-up d2`}>
            <p className={styles.visualTitle} style={{ whiteSpace: 'pre-line' }}>
              {t.why.cardTitle}
            </p>
            <div className="divider" />
            {t.why.approaches.map(a => (
              <div key={a.title} className={styles.row}>
                <span className={styles.dot} />
                <p><strong>{a.title}</strong> — {a.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
