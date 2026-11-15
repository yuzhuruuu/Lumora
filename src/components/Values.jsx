import styles from '../styles/Values.module.css'

const values = [
  { icon: '🎯', title: 'Professional', desc: 'Kompetensi dan kredibilitas dalam setiap aspek layanan yang kami berikan.' },
  { icon: '💡', title: 'Innovative',   desc: 'Solusi teknologi yang relevan dan terus berkembang mengikuti kebutuhan bisnis.' },
  { icon: '✨', title: 'Elegant',      desc: 'Identitas yang berkelas, minimalis, dan terstruktur dalam setiap tampilan.' },
  { icon: '🔒', title: 'Trustworthy',  desc: 'Kepercayaan dibangun melalui kualitas, keamanan, dan konsistensi layanan.' },
  { icon: '🤲', title: 'Approachable', desc: 'Tetap ramah dan mudah dijangkau oleh seluruh pelaku UMKM Indonesia.' },
]

export default function Values() {
  return (
    <section id="values" className={styles.section}>
      <div className={styles.grid}>
        {values.map(v => (
          <div key={v.title} className={styles.cell}>
            <div className={styles.icon}>{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
