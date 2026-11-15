import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import { Mail, Code2, Building2, Target } from 'lucide-react'
import styles from '../styles/Contact.module.css'

const iconMap = {
  email: Mail,
  industry: Code2,
  company: Building2,
  target: Target,
}

export default function Contact() {
  const ref = useFadeUp()
  const { t } = useLang()
  const [status, setStatus] = useState('idle') // idle | sent

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      e.target.reset()
    }, 3500)
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.info}>
            <span className="tag">{t.contact.tag}</span>
            <h2 className={`${styles.tagline} fade-up`}>
              {t.contact.taglineLine1}<br />
              <em>{t.contact.taglineLine2}</em>
            </h2>
            <p className={`${styles.desc} fade-up`}>
              {t.contact.desc}
            </p>
            <div className={`${styles.items} fade-up`}>
              {t.contact.items.map(it => {
                const IconComponent = iconMap[it.key] || Mail
                return (
                  <div key={it.key} className={styles.item}>
                    <div className={styles.itemIcon}>
                      <IconComponent className={styles.iconSvg} size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className={styles.itemLabel}>{it.label}</div>
                      <div className={styles.itemVal}>{it.val}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={`${styles.form} fade-up d2`}>
            <h3 className={styles.formTitle}>{t.contact.form.title}</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.label}>{t.contact.form.nameLabel}</label>
                  <input className={styles.input} type="text" placeholder={t.contact.form.namePlaceholder} required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>{t.contact.form.businessLabel}</label>
                  <input className={styles.input} type="text" placeholder={t.contact.form.businessPlaceholder} />
                </div>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{t.contact.form.contactLabel}</label>
                <input className={styles.input} type="text" placeholder={t.contact.form.contactPlaceholder} required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{t.contact.form.serviceLabel}</label>
                <select className={`${styles.input} ${styles.select}`}>
                  <option value="">{t.contact.form.serviceDefault}</option>
                  {t.contact.form.services.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{t.contact.form.descLabel}</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder={t.contact.form.descPlaceholder}
                />
              </div>
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sent'}
                style={status === 'sent' ? { background: 'var(--olive)' } : {}}
              >
                {status === 'sent' ? t.contact.form.btnSuccess : t.contact.form.btnSubmit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
