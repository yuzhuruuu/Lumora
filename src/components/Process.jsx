import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import styles from '../styles/Process.module.css'

export default function Process() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="process" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className="tag">{t.process.tag}</span>
          <h2 className="section-title light fade-up" style={{ whiteSpace: 'pre-line' }}>
            {t.process.title}
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead light fade-up">
            {t.process.lead}
          </p>
        </div>

        <div className={styles.steps}>
          {t.process.steps.map((s, i) => (
            <div key={s.num} className={`${styles.step} fade-up d${i % 3 + 1}`}>
              <div className={styles.numWrap}>
                <div className={styles.num}>{s.num}</div>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
