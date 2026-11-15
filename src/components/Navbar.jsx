import { useState } from 'react'
import { useNavbar } from '../hooks/useNavbar'
import styles from '../styles/Navbar.module.css'

const links = [
  { href: '#about', label: 'Tentang' },
  { href: '#services', label: 'Layanan' },
  { href: '#solutions', label: 'Solusi UMKM' },
  { href: '#pricing', label: 'Paket' },
  { href: '#process', label: 'Proses' },
  { href: '#vision', label: 'Visi & Misi' },
]

export default function Navbar() {
  const { scrolled } = useNavbar()
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <img src="/Logo/Light/Logo Lumora fix (1).png" alt="Logo Lumora" className={styles.logoIcon} />
            <img src="/Logo/Light/Group 7.png" alt="Lumora Inovasi Utama" className={styles.logoText} />
          </a>

          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
                Hubungi Kami
              </a>
            </li>
          </ul>

          <button
            className={`${styles.hamburger} ${open ? styles.active : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
