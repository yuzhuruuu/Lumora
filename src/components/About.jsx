import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/About.module.css'

const features = [
  { icon: '📐', title: 'Dibuat seukuran usahamu', desc: 'Sistem dikembangkan berdasarkan kebutuhan dan skala operasional masing-masing usaha.' },
  { icon: '💬', title: 'Bahasa yang mudah dipahami', desc: 'Teknologi dijelaskan dalam bahasa sederhana agar mudah dipahami pelaku UMKM.' },
  { icon: '🌱', title: 'Tumbuh bertahap', desc: 'Mulai dari satu kebutuhan prioritas, lanjutkan sesuai perkembangan usaha Anda.' },
  { icon: '🤝', title: 'Tetap ada setelah selesai', desc: 'Dukungan dan pemeliharaan sistem jangka panjang sesuai kesepakatan layanan.' },
]

export default function About() {
  const ref = useFadeUp()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div className={`${styles.visual} fade-up`}>
            <div className={styles.card}>
              <img src="/Logo/Light/Group 8.png" alt="PT Lumora Inovasi Utama" className={styles.cardLogo} />
              <p className={styles.cardTagline}>"Rapi dulu, besar kemudian."</p>
              <p className={styles.cardSub}>
                Membantu UMKM membangun pengelolaan bisnis yang lebih terstruktur
                melalui solusi digital yang sesuai kebutuhan dan tahapan perkembangan usaha.
              </p>
            </div>
            <div className={styles.badge}>Software House · IT</div>
          </div>

          <div className={styles.content}>
            <span className="tag">Tentang Lumora</span>
            <h2 className={`section-title fade-up`}>
              Teknologi yang tumbuh<br />bersama usaha Anda
            </h2>
            <div className="divider" />
            <p className={`${styles.desc} fade-up d1`}>
              PT Lumora Inovasi Utama adalah perusahaan software house yang berfokus pada pengembangan
              website dan sistem informasi berbasis web untuk Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia.
            </p>
            <p className={`${styles.desc} fade-up d2`}>
              Kami memahami bahwa setiap UMKM memiliki kebutuhan yang berbeda — itulah mengapa setiap
              solusi yang kami kembangkan disesuaikan dengan skala, proses, dan permasalahan spesifik usaha Anda.
            </p>

            <div className={styles.features}>
              {features.map((f, i) => (
                <div key={f.title} className={`${styles.feat} fade-up d${i + 1}`}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
