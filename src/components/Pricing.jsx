import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import { Check, Store } from 'lucide-react'
import styles from '../styles/Pricing.module.css'

export default function Pricing() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="pricing" className={styles.section} ref={ref}>
      <div className="container">

        <div className={`${styles.header} fade-up`}>
          <span className="tag">{t.pricing.tag}</span>
          <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>
            {t.pricing.title}
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead" style={{ margin: '0 auto' }}>
            {t.pricing.lead}
          </p>
        </div>

        <div className={styles.grid}>
          {t.pricing.plans.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.featured : ''} fade-up d${i + 1}`}
            >
              {p.badge && <div className={styles.badge}>{p.badge}</div>}
              <div className={styles.plan}>{p.plan}</div>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.price}>{p.price}</div>
              {p.subPrice && <div className={styles.subPrice}>{p.subPrice}</div>}
              <div className={styles.note}>{p.note}</div>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {p.features.map(f => (
                  <li key={f}>
                    <Check size={14} strokeWidth={2.4} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`${styles.btn} ${p.featured ? styles.btnFilled : styles.btnOutline}`}
              >
                {p.btn}
              </a>
            </div>
          ))}

          <div className={`${styles.addon} fade-up d3`}>
            <div className={styles.addonMain}>
              <div className={styles.addonIconBadge}>
                <Store size={22} strokeWidth={1.8} />
              </div>
              <div>
                <div className={styles.addonLabel}>{t.pricing.addon.label}</div>
                <div className={styles.addonName}>{t.pricing.addon.name}</div>
                <div className={styles.addonDesc}>{t.pricing.addon.desc}</div>
              </div>
            </div>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btnOutline}`}
              style={{ whiteSpace: 'nowrap', padding: '14px 28px' }}
            >
              {t.pricing.addon.btn}
            </a>
          </div>
        </div>

        <p className={styles.disclaimer}>
          {t.pricing.disclaimer}
        </p>
      </div>
    </section>
  )
}
