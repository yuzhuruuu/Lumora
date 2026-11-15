import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Vision.module.css'

const missions = [
  'Mengembangkan aplikasi berbasis web yang sesuai dengan kebutuhan dan permasalahan UMKM.',
  'Menyediakan solusi teknologi informasi yang mudah digunakan, efektif, dan terjangkau.',
  'Membantu UMKM meningkatkan efisiensi pengelolaan operasional melalui digitalisasi proses bisnis.',
  'Mengutamakan kualitas, keamanan, dan kepuasan klien dalam setiap pengembangan produk.',
  'Membangun hubungan kerja sama jangka panjang melalui layanan teknologi yang berkelanjutan.',
]

export default function Vision() {
  const ref = useFadeUp()

  return (
    <section id="vision" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.eyebrow}><span className="tag">Arah Perusahaan</span></div>
        <div className={styles.grid}>

          <div className={`${styles.visi} fade-up`}>
            <div className={styles.blockLabel}>Visi</div>
            <h2>Menjadi mitra teknologi terpercaya untuk UMKM Indonesia</h2>
            <div className="divider" style={{ margin: '24px 0' }} />
            <p>
              Menjadi perusahaan pengembangan perangkat lunak yang inovatif dan terpercaya dalam
              menyediakan solusi digital untuk mendukung pertumbuhan dan perkembangan UMKM di Indonesia.
            </p>
          </div>

          <div className={`${styles.misi} fade-up d2`}>
            <div className={styles.blockLabel}>Misi</div>
            <h2>Lima komitmen Lumora</h2>
            <div className="divider" style={{ margin: '24px 0' }} />
            <ul className={styles.misiList}>
              {missions.map((m, i) => (
                <li key={i}>
                  <span className={styles.misiNum}>{i + 1}</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
