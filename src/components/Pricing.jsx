import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Pricing.module.css'

const plans = [
  {
    plan: 'Website', name: 'Starter', price: 'Fleksibel',
    note: 'Harga disesuaikan kebutuhan. Konsultasi gratis.',
    features: ['Website profil bisnis','Halaman beranda & kontak','Informasi layanan/produk','Desain responsif (mobile-friendly)','Domain & hosting (opsional)'],
    featured: false,
  },
  {
    plan: 'Website', name: 'Business', price: 'Fleksibel',
    note: 'Paket lengkap untuk usaha yang ingin tampil profesional secara online.',
    features: ['Semua fitur Starter','Katalog produk / menu digital','Halaman galeri & portofolio','Form pemesanan atau reservasi','Integrasi WhatsApp','Panduan penggunaan'],
    featured: true, badge: 'Paling Populer',
  },
  {
    plan: 'Sistem Informasi', name: 'Custom Web System', price: 'Custom',
    note: 'Dikembangkan khusus sesuai proses bisnis Anda.',
    features: ['Sistem inventaris barang','Sistem pemesanan / pre-order','Pencatatan & rekap transaksi','Laporan operasional','Multi-user (opsional)','Pelatihan penggunaan'],
    featured: false,
  },
]

export default function Pricing() {
  const ref = useFadeUp()

  return (
    <section id="pricing" className={styles.section} ref={ref}>
      <div className="container">

        <div className={`${styles.header} fade-up`}>
          <span className="tag">Paket Layanan</span>
          <h2 className="section-title">Pilih paket yang sesuai<br />dengan kebutuhan usaha</h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p className="section-lead" style={{ margin: '0 auto' }}>
            Harga dan fitur dapat disesuaikan berdasarkan kebutuhan dan kompleksitas sistem yang diinginkan.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.featured : ''} fade-up d${i + 1}`}
            >
              {p.badge && <div className={styles.badge}>{p.badge}</div>}
              <div className={styles.plan}>{p.plan}</div>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.price}>{p.price}</div>
              <div className={styles.note}>{p.note}</div>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a
                href="#contact"
                className={`${styles.btn} ${p.featured ? styles.btnFilled : styles.btnOutline}`}
              >
                {p.featured ? 'Mulai Sekarang' : 'Konsultasi'}
              </a>
            </div>
          ))}

          <div className={`${styles.addon} fade-up d3`}>
            <div>
              <div className={styles.addonLabel}>Layanan Tambahan</div>
              <div className={styles.addonName}>E-Commerce Add-on 🛍️</div>
              <div className={styles.addonDesc}>
                Tambahkan fitur toko online ke website atau sistem yang sudah ada — termasuk keranjang belanja,
                manajemen pesanan, dan integrasi pembayaran. Dikembangkan bertahap sesuai kesiapan usaha Anda.
              </div>
            </div>
            <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`} style={{ whiteSpace: 'nowrap', padding: '14px 28px' }}>
              Pelajari Lebih
            </a>
          </div>
        </div>

        <p className={styles.disclaimer}>
          * Semua harga bersifat estimasi dan ditentukan melalui diskusi kebutuhan.
          Komponen harga meliputi kompleksitas sistem, jumlah halaman/fitur, dan durasi pengembangan.
        </p>
      </div>
    </section>
  )
}
