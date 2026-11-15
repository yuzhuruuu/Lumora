import styles from '../styles/Footer.module.css'

const services = [
  { href: '#services', label: 'Website Profil Bisnis' },
  { href: '#services', label: 'Website Katalog Produk' },
  { href: '#services', label: 'Sistem Inventaris' },
  { href: '#services', label: 'Sistem Pemesanan' },
  { href: '#services', label: 'Pencatatan Transaksi' },
  { href: '#services', label: 'E-Commerce Add-on' },
]
const company = [
  { href: '#about', label: 'Tentang Lumora' },
  { href: '#solutions', label: 'Solusi UMKM' },
  { href: '#vision', label: 'Visi & Misi' },
  { href: '#why', label: 'Keunggulan' },
  { href: '#process', label: 'Alur Kerja Sama' },
  { href: '#pricing', label: 'Paket Layanan' },
  { href: '#contact', label: 'Hubungi Kami' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/Logo/Light/Logo Lumora fix (1).png" alt="Logo Lumora" className={styles.logoIcon} />
              <img src="/Logo/Light/Group 7.png" alt="Lumora Inovasi Utama" className={styles.logoText} />
            </div>
            <p>
              PT Lumora Inovasi Utama adalah software house yang membantu UMKM tumbuh lebih
              terstruktur melalui solusi teknologi berbasis web yang disesuaikan dengan kebutuhan usaha.
            </p>
          </div>
          <div className={styles.col}>
            <h4>Layanan</h4>
            <ul>
              {services.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Perusahaan</h4>
            <ul>
              {company.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 PT Lumora Inovasi Utama. Seluruh hak dilindungi.</p>
          <p className={styles.kbli}>KBLI 62199 · 62191 · 62209 &nbsp;|&nbsp; Teknologi Informasi</p>
        </div>
      </div>
    </footer>
  )
}
