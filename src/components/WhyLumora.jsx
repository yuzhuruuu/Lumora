import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/WhyLumora.module.css'

const whys = [
  {
    num: '01', title: 'Dibuat seukuran usahamu',
    desc: 'Kami tidak menjual template satu ukuran untuk semua. Setiap sistem dikembangkan berdasarkan kebutuhan, skala, dan proses operasional masing-masing usaha.',
  },
  {
    num: '02', title: 'Dijelaskan dalam bahasa usahamu',
    desc: 'Kami mengutamakan kemudahan komunikasi — tanpa istilah teknis yang membingungkan — agar Anda benar-benar memahami sistem yang dibangun.',
  },
  {
    num: '03', title: 'Mulai dari satu masalah',
    desc: 'Tidak perlu langsung membangun sistem lengkap. Mulai dari kebutuhan prioritas, lalu kembangkan bertahap seiring pertumbuhan usaha Anda.',
  },
  {
    num: '04', title: 'Tetap ada setelah sistem jadi',
    desc: 'Hubungan kami tidak berhenti saat proyek selesai. Kami memberikan dukungan dan pemeliharaan sistem jangka panjang sesuai kesepakatan layanan.',
  },
]

const approaches = [
  { title: 'Sejajar (Approachable)', desc: 'Ramah, terbuka, dan tidak menggurui dalam berkomunikasi dengan klien.' },
  { title: 'Jernih (Clear)',         desc: 'Menggunakan bahasa sederhana, terstruktur, dan mudah dipahami.' },
  { title: 'Praktis (Practical)',    desc: 'Berorientasi pada kebutuhan dan solusi nyata yang dihadapi UMKM.' },
  { title: 'Jujur (Transparent)',    desc: 'Terbuka dalam menyampaikan informasi layanan, biaya, proses, dan kemampuan sistem.' },
]

export default function WhyLumora() {
  const ref = useFadeUp()

  return (
    <section id="why" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div>
            <span className="tag">Mengapa Lumora</span>
            <h2 className="section-title fade-up">Pendekatan yang berbeda<br />untuk UMKM</h2>
            <div className="divider" />
            <div className={styles.list}>
              {whys.map((w, i) => (
                <div key={w.num} className={`${styles.item} fade-up d${i % 3}`}>
                  <span className={styles.num}>{w.num}</span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.visual} fade-up d2`}>
            <p className={styles.visualTitle}>Karakter komunikasi<br />yang kami junjung</p>
            <div className="divider" />
            {approaches.map(a => (
              <div key={a.title} className={styles.row}>
                <span className={styles.dot} />
                <p><strong>{a.title}</strong> — {a.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
