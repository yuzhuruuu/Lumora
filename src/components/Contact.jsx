import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'
import styles from '../styles/Contact.module.css'

const info = [
  { icon: '📧', label: 'Email',       val: 'lumora.inovasiutama@gmail.com' },
  { icon: '📍', label: 'Bidang Usaha', val: 'Teknologi Informasi · Software House' },
  { icon: '🏢', label: 'Perusahaan',  val: 'PT Lumora Inovasi Utama' },
  { icon: '🎯', label: 'Target Klien', val: 'UMKM Kuliner, Retail, dan Sembako' },
]

const layananOptions = [
  'Website Profil Bisnis',
  'Website Katalog Produk',
  'Sistem Informasi Inventaris',
  'Sistem Pemesanan',
  'Sistem Pencatatan Transaksi',
  'E-Commerce Add-on',
  'Belum tahu, butuh konsultasi',
]

export default function Contact() {
  const ref = useFadeUp()
  const [status, setStatus] = useState('idle') // idle | sent

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => { setStatus('idle'); e.target.reset() }, 3500)
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.info}>
            <span className="tag">Hubungi Kami</span>
            <h2 className={`${styles.tagline} fade-up`}>
              Siap memulai<br /><em>bersama Lumora?</em>
            </h2>
            <p className={`${styles.desc} fade-up`}>
              Ceritakan kebutuhan usaha Anda kepada kami. Konsultasi awal gratis dan tanpa komitmen —
              kami akan menyusun solusi yang sesuai dengan situasi dan anggaran Anda.
            </p>
            <div className={`${styles.items} fade-up`}>
              {info.map(it => (
                <div key={it.label} className={styles.item}>
                  <div className={styles.itemIcon}>{it.icon}</div>
                  <div>
                    <div className={styles.itemLabel}>{it.label}</div>
                    <div className={styles.itemVal}>{it.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.form} fade-up d2`}>
            <h3 className={styles.formTitle}>Mulai Konsultasi</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.label}>Nama</label>
                  <input className={styles.input} type="text" placeholder="Nama Anda" required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Nama Usaha</label>
                  <input className={styles.input} type="text" placeholder="Nama usaha Anda" />
                </div>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>WhatsApp / Email</label>
                <input className={styles.input} type="text" placeholder="Nomor WA atau alamat email" required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Jenis Layanan yang Diminati</label>
                <select className={`${styles.input} ${styles.select}`}>
                  <option value="">Pilih layanan...</option>
                  {layananOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Ceritakan kebutuhan Anda</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Apa permasalahan bisnis yang ingin Anda selesaikan?"
                />
              </div>
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sent'}
                style={status === 'sent' ? { background: 'var(--olive)' } : {}}
              >
                {status === 'sent' ? 'Pesan Terkirim ✓' : 'Kirim Pesan →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
