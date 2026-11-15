import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import {
  Globe,
  Layers,
  ClipboardList,
  ShoppingBag,
  ReceiptText,
  Store,
} from 'lucide-react'
import styles from '../styles/Services.module.css'

const iconMap = {
  profile: Globe,
  catalog: Layers,
  inventory: ClipboardList,
  order: ShoppingBag,
  transaction: ReceiptText,
  ecommerce: Store,
}

export default function Services() {
  const ref = useFadeUp()
  const { t } = useLang()

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="tag">{t.services.tag}</span>
            <h2 className="section-title light fade-up" style={{ whiteSpace: 'pre-line' }}>
              {t.services.title}
            </h2>
          </div>
          <div>
            <div className="divider" />
            <p className="section-lead light fade-up">
              {t.services.lead}
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {t.services.items.map((s, i) => {
            const IconComponent = iconMap[s.key] || Globe
            return (
              <div key={s.num} className={`${styles.card} fade-up d${(i % 3) + 1}`}>
                <div className={styles.cardTop}>
                  <span className={styles.num}>{s.num}</span>
                  <div className={styles.iconWrap}>
                    <IconComponent className={styles.icon} size={22} strokeWidth={1.6} />
                  </div>
                </div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
