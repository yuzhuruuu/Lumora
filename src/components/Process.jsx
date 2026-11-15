import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Process.module.css'

const steps = [
  { num: '01', title: 'Konsultasi Awal',       desc: 'Diskusi kebutuhan, permasalahan, dan tujuan usaha Anda. Gratis dan tanpa komitmen.' },
  { num: '02', title: 'Analisis & Proposal',   desc: 'Kami menyusun solusi yang sesuai dengan kebutuhan dan anggaran usaha Anda.' },
  { num: '03', title: 'Kesepakatan & Kontrak', desc: 'Penetapan lingkup pekerjaan, timeline, dan biaya secara transparan dan tertulis.' },
  { num: '04', title: 'Pengembangan',          desc: 'Tim kami membangun sistem sesuai spesifikasi dengan komunikasi berkala selama proses berlangsung.' },
  { num: '05', title: 'Serah Terima & Dukungan', desc: 'Pelatihan penggunaan, serah terima sistem, dan layanan pemeliharaan pasca-pengembangan.' },
]

export default function Process() {
  const ref = useFadeUp()

  return (
    <section id="process" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className="tag">Alur Kerja Sama</span>
          <h2 className="section-title light fade-up">Bagaimana kami bekerja<br />bersama Anda</h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead light fade-up">
            Proses yang transparan dan terstruktur dari konsultasi awal hingga sistem siap digunakan.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={`${styles.step} fade-up d${i % 3 + 1}`}>
              <div className={styles.num}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
