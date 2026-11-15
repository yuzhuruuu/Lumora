import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Solutions.module.css'

const useCases = [
  {
    id: 'kuliner',
    badge: 'Prioritas Utama',
    sector: 'UMKM Kuliner & F&B',
    subtitle: 'Katering, bakery, coffee shop, & usaha kuliner berbasis pre-order',
    problemTitle: 'Tantangan Operasional yang Sering Dialami:',
    problems: [
      'Pesanan via chat WhatsApp sering tercecer atau terlewat saat jam ramai.',
      'Menu dan varian produk sulit dijelaskan berulang-ulang ke calon pembeli.',
      'Rekap transaksi harian dan nota masih ditulis manual di buku catatan.',
      'Sulit memantau kuota pesanan pre-order yang masuk setiap harinya.',
    ],
    solutionTitle: 'Solusi Digital dari Lumora:',
    solutions: [
      'Website katalog menu digital yang menarik, jelas, dan mudah diakses via link/QR.',
      'Sistem pemesanan & form pre-order terstruktur yang langsung merekap pesanan.',
      'Pencatatan status order (menunggu, diproses, selesai, terkirim).',
      'Rekap transaksi otomatis untuk melihat omzet harian dan mingguan tanpa hitung manual.',
    ],
    outcome: 'Hasil: Pesanan tertata rapi, tidak ada order tercecer, waktu admin berkurang hingga 70%.',
  },
  {
    id: 'sembako',
    badge: 'Pasar Sekunder',
    sector: 'UMKM Sembako & Retail',
    subtitle: 'Toko sembako, kelontong, mini mart, & perdagangan retail',
    problemTitle: 'Tantangan Operasional yang Sering Dialami:',
    problems: [
      'Sering terjadi selisih antara stok barang fisik di rak dengan catatan di buku.',
      'Keterlambatan restock karena barang habis tanpa disadari sebelumnya.',
      'Pencatatan barang masuk dan keluar dari supplier masih konvensional.',
      'Kesulitan melacak riwayat transaksi harian dan laba bersih per kategori barang.',
    ],
    solutionTitle: 'Solusi Digital dari Lumora:',
    solutions: [
      'Sistem informasi inventaris berbasis web yang ringan dan mudah digunakan.',
      'Pencatatan keluar-masuk barang secara real-time dengan status mutasi jelas.',
      'Notifikasi pengingat untuk persediaan barang yang mulai menipis (minimum stock).',
      'Rekap penjualan harian terintegrasi untuk memantau performa toko secara berkala.',
    ],
    outcome: 'Hasil: Selisih stok terminimalisir, stok selalu terpantau, operasional toko lebih terkendali.',
  },
]

export default function Solutions() {
  const ref = useFadeUp()
  const [activeTab, setActiveTab] = useState('kuliner')
  const current = useCases.find(c => c.id === activeTab)

  return (
    <section id="solutions" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className="tag">Simulasi Penerapan</span>
          <h2 className="section-title fade-up">
            Dirancang untuk kebutuhan<br />riil di lapangan
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead fade-up" style={{ margin: '0 auto' }}>
            Berdasarkan analisis pasar dan riset operasional UMKM di Indonesia, Lumora menghadirkan
            solusi terfokus yang menyasar permasalahan paling mendesak pada setiap jenis usaha.
          </p>
        </div>

        {/* Tab switch */}
        <div className={`${styles.tabs} fade-up`}>
          {useCases.map(c => (
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
                <span className={styles.colIcon}>⚠️</span> {current.problemTitle}
              </h4>
              <ul className={styles.listProblem}>
                {current.problems.map((p, idx) => (
                  <li key={idx}>
                    <span className={styles.crossIcon}>✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solutions */}
            <div className={styles.columnSolution}>
              <h4 className={styles.colHeaderSolution}>
                <span className={styles.colIcon}>✨</span> {current.solutionTitle}
              </h4>
              <ul className={styles.listSolution}>
                {current.solutions.map((s, idx) => (
                  <li key={idx}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.outcomeBar}>
            <span className={styles.outcomeIcon}>💡</span>
            <p className={styles.outcomeText}>{current.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
