import styles from '../styles/Hero.module.css'

const stats = [
  { num: 'B2B',  label: 'Model Bisnis' },
  { num: 'Web',  label: 'Platform Utama' },
  { num: 'UMKM', label: 'Target Pasar' },
  { num: '5+',   label: 'Jenis Layanan' },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Software House · B2B · UMKM</span>
            </div>
            <h1 className={styles.title}>
              Rapi dulu,<br /><em>besar kemudian.</em>
            </h1>
            <p className={styles.desc}>
              PT Lumora Inovasi Utama mengembangkan website dan sistem informasi
              berbasis web yang disesuaikan dengan kebutuhan operasional UMKM —
              praktis, terjangkau, dan terus berkembang bersama usaha Anda.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">Mulai Konsultasi</a>
              <a href="#services" className="btn-ghost">Lihat Layanan &nbsp;→</a>
            </div>
          </div>

          <div className={styles.visual}>
            <img
              src="/Logo/Light/Group 8.png"
              alt="Lumora"
              className={styles.logoMark}
            />
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(s => (
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
