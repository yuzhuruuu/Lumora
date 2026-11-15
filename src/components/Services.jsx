import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Services.module.css'

const services = [
  {
    num: '01', icon: '🌐', name: 'Website Profil Bisnis',
    desc: 'Halaman web yang menampilkan identitas, layanan, lokasi, dan kontak usaha Anda secara profesional agar mudah ditemukan calon pelanggan.',
    tags: ['Profil', 'Kontak', 'Lokasi'],
  },
  {
    num: '02', icon: '📦', name: 'Website Katalog Produk',
    desc: 'Tampilkan produk atau menu usaha Anda secara terstruktur dan menarik. Mudah diperbarui sesuai perubahan stok atau harga.',
    tags: ['Katalog', 'Menu', 'Galeri'],
  },
  {
    num: '03', icon: '📋', name: 'Sistem Informasi Inventaris',
    desc: 'Kelola barang masuk, barang keluar, dan pantau jumlah persediaan secara akurat — tidak perlu khawatir selisih stok lagi.',
    tags: ['Stok', 'Barang Masuk', 'Laporan'],
  },
  {
    num: '04', icon: '🛒', name: 'Sistem Pemesanan',
    desc: 'Kelola pesanan dari pelanggan secara terstruktur — cocok untuk usaha kuliner, pre-order, atau bisnis berbasis pesanan via chat.',
    tags: ['Pesanan', 'Pre-Order', 'Tracking'],
  },
  {
    num: '05', icon: '💰', name: 'Sistem Pencatatan Transaksi',
    desc: 'Catat penjualan harian dan buat rekap transaksi otomatis. Dapatkan laporan sederhana untuk memahami kinerja usaha.',
    tags: ['Transaksi', 'Laporan', 'Rekap'],
  },
  {
    num: '06', icon: '🛍️', name: 'E-Commerce Add-on',
    desc: 'Layanan tambahan bagi usaha yang ingin merambah perdagangan online. Dikembangkan sesuai kebutuhan dan kesiapan sistem yang sudah ada.',
    tags: ['Online Store', 'Pembayaran', 'Custom'],
  },
]

export default function Services() {
  const ref = useFadeUp()

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="tag">Layanan Kami</span>
            <h2 className="section-title light fade-up">Solusi digital<br />untuk setiap kebutuhan</h2>
          </div>
          <div>
            <div className="divider" />
            <p className="section-lead light fade-up">
              Dari website profil bisnis hingga sistem informasi terintegrasi — kami menyediakan
              solusi yang dapat dimulai dari kebutuhan paling mendasar usaha Anda.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.num} className={`${styles.card} fade-up d${(i % 3) + 1}`}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
