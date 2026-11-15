import { useLang } from '../context/LanguageContext'
import { Award, Zap, Gem, ShieldCheck, HeartHandshake } from 'lucide-react'
import styles from '../styles/Values.module.css'

const iconMap = {
  professional: Award,
  innovative: Zap,
  elegant: Gem,
  trustworthy: ShieldCheck,
  approachable: HeartHandshake,
}

export default function Values() {
  const { t } = useLang()

  return (
    <section id="values" className={styles.section}>
      <div className={styles.grid}>
        {t.values.items.map(v => {
          const IconComponent = iconMap[v.key] || Award
          return (
            <div key={v.key} className={styles.cell}>
              <div className={styles.iconWrap}>
                <IconComponent className={styles.iconSvg} size={24} strokeWidth={1.7} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
