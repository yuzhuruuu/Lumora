import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'
import { useLang } from '../context/LanguageContext'
import { AlertCircle, CheckCircle2, Lightbulb, Check, X } from 'lucide-react'
import styles from '../styles/Solutions.module.css'

export default function Solutions() {
  const ref = useFadeUp()
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState('kuliner')
  const current = t.solutions.tabs.find(c => c.id === activeTab) || t.solutions.tabs[0]

  return (
    <section id="solutions" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className="tag">{t.solutions.tag}</span>
          <h2 className="section-title fade-up" style={{ whiteSpace: 'pre-line' }}>
            {t.solutions.title}
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead fade-up" style={{ margin: '0 auto' }}>
            {t.solutions.lead}
          </p>
        </div>

        {/* Tab switch */}
        <div className={`${styles.tabs} fade-up`}>
          {t.solutions.tabs.map(c => (
            <button
              key={c.id}
              className={`${styles.tabBtn} ${activeTab === c.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(c.id)}
            >
              <span className={styles.tabBadge}>{c.badge}</span>
              <span className={styles.tabTitle}>{c.sector}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content Card */}
        <div className={`${styles.displayCard} fade-up d1`}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardCategory}>{current.badge}</span>
              <h3 className={styles.cardSector}>{current.sector}</h3>
              <p className={styles.cardSub}>{current.subtitle}</p>
            </div>
          </div>

          <div className={styles.comparisonGrid}>
            {/* Left: Problems */}
            <div className={styles.columnProblem}>
              <h4 className={styles.colHeaderProblem}>
                <AlertCircle className={styles.colIconProblem} size={18} strokeWidth={2} />
                <span>{current.problemTitle}</span>
              </h4>
              <ul className={styles.listProblem}>
                {current.problems.map((p, idx) => (
                  <li key={idx}>
                    <div className={styles.crossWrap}>
                      <X size={13} strokeWidth={2.4} />
                    </div>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solutions */}
            <div className={styles.columnSolution}>
              <h4 className={styles.colHeaderSolution}>
                <CheckCircle2 className={styles.colIconSolution} size={18} strokeWidth={2} />
                <span>{current.solutionTitle}</span>
              </h4>
              <ul className={styles.listSolution}>
                {current.solutions.map((s, idx) => (
                  <li key={idx}>
                    <div className={styles.checkWrap}>
                      <Check size={13} strokeWidth={2.4} />
                    </div>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.outcomeBar}>
            <div className={styles.outcomeIconWrap}>
              <Lightbulb size={20} strokeWidth={2} className={styles.outcomeIcon} />
            </div>
            <p className={styles.outcomeText}>{current.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
