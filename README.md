# PT Lumora Inovasi Utama — Web Landing Page

Landing page resmi company profile **PT Lumora Inovasi Utama**, dibangun dengan **React + Vite** berbasis brand identity dan riset operasional UMKM pada dokumen resmi perusahaan.

Tagline: *"Rapi dulu, besar kemudian."*

---

## 🎨 Spesifikasi Brand

- **Warna Utama**:
  - Forest Depth: `#193329` (Hijau tua elegan / Primary dark)
  - Warm Ivory: `#F3EEE5` (Krem hangat / Primary light background)
  - Champagne Beige: `#D8BE9A` (Aksen emas champagne / Accent)
  - Muted Olive: `#898B68` (Hijau zaitun lembut / Supporting)
  - Soft Sage: `#AEB7A9` (Hijau sage lembut / Muted text & border)
- **Tipografi**:
  - Headings: `Cormorant Garamond` (Serif elegan & prestisius)
  - Body: `Inter` (Sans-serif bersih & sangat mudah dibaca)
- **Aset Logo**: Berada di folder `/public/Logo/` (versi Dark & Light lengkap).

---

## 📁 Struktur Proyek

```
lumora-web/
├── public/
│   └── Logo/                # File logo resmi (Dark & Light)
├── src/
│   ├── components/          # Komponen modular terpisah
│   │   ├── Navbar.jsx       # Header navigasi & logo responsif
│   │   ├── Hero.jsx         # Section hero utama + stats bar
│   │   ├── About.jsx        # Tentang Lumora & keunggulan
│   │   ├── Services.jsx     # 6 katalog layanan utama & add-on
│   │   ├── Solutions.jsx    # Simulasi penerapan riil (Kuliner & Sembako)
│   │   ├── WhyLumora.jsx    # Karakter komunikasi & pendekatan UMKM
│   │   ├── Pricing.jsx      # Paket layanan Starter, Business, & Custom
│   │   ├── Process.jsx      # 5 tahap alur kerja sama
│   │   ├── Vision.jsx       # Visi & 5 Misi perusahaan
│   │   ├── Values.jsx       # 5 Brand values (Professional, Innovative, etc.)
│   │   ├── Contact.jsx      # Form interaktif & detail kontak
│   │   └── Footer.jsx       # Footer navigasi & nomor KBLI resmi
│   ├── hooks/
│   │   ├── useFadeUp.js     # Animasi scroll reveal (IntersectionObserver)
│   │   └── useNavbar.js     # Sticky dynamic navbar hook
│   ├── styles/              # CSS Modules scoped per-komponen & global.css
│   ├── App.jsx              # App root
│   └── main.jsx             # Entry point React
├── vercel.json              # Konfigurasi deploy Vercel
├── vite.config.js           # Konfigurasi Vite
└── package.json
```

---

## 🚀 Menjalankan Secara Lokal

Pastikan Anda berada di direktori `lumora-web`:

```bash
cd lumora-web

# Install dependencies jika belum
pnpm install

# Jalankan server development
pnpm dev
```

Buka URL yang tampil di terminal (biasanya `http://localhost:5173`).

---

## 🌐 Panduan Deploy ke Vercel

### Opsi 1: Lewat Git & GitHub (Direkomendasikan)
1. Inisialisasi git dan push folder `lumora-web` ke repository GitHub Anda:
   ```bash
   cd lumora-web
   git init
   git add .
   git commit -m "feat: initial lumora company profile landing page"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com).
3. Klik **"Add New Project"** lalu pilih repositori GitHub Anda.
4. Vercel akan otomatis mendeteksi konfigurasi Vite (`pnpm run build` dan folder output `dist`).
5. Klik **"Deploy"** — website langsung online dalam hitungan detik!

### Opsi 2: Lewat Vercel CLI Langsung
```bash
cd lumora-web
npx vercel
```
Ikuti instruksi login dan konfirmasi di terminal.

---

© PT Lumora Inovasi Utama. KBLI 62199 · 62191 · 62209.
