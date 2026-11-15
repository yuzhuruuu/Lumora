import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import styles from '../styles/Vision.module.css'

export default function Vision() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="vision" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.eyebrow}><span className="tag">{t.vision.tag}</span></div>
        <div className={styles.grid}>

          <div className={`${styles.visi} fade-up`}>
            <div className={styles.blockLabel}>{t.vision.visiLabel}</div>
            <h2>{t.vision.visiTitle}</h2>
            <div className="divider" style={{ margin: '24px 0' }} />
            <p>{t.vision.visiDesc}</p>
          </div>

          <div className={`${styles.misi} fade-up d2`}>
            <div className={styles.blockLabel}>{t.vision.misiLabel}</div>
            <h2>{t.vision.misiTitle}</h2>
            <div className="divider" style={{ margin: '24px 0' }} />
            <ul className={styles.misiList}>
              {t.vision.misis.map((m, i) => (
                <li key={i}>
                  <span className={styles.misiNum}>{i + 1}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
