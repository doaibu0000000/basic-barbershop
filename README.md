# Basic Barbershop — Landing Page

Landing page untuk **Basic Barbershop** (Jl. Raya Pamanukan – Cikampek, Pagaden, Kab. Subang, Jawa Barat) — dibuat sebagai demo untuk dipresentasikan ke pemilik bisnis.

Halaman ini mobile-first, cepat, dan berorientasi konversi: satu CTA utama (booking via WhatsApp), satu CTA pendamping (petunjuk arah Google Maps). Semua foto adalah **foto asli dari Google Maps**, tanpa satu pun gambar buatan AI.

## Teknologi

- **Vite 7** (vanilla HTML/CSS/JS — tanpa framework, tanpa dependensi runtime)
- CSS murni (mobile-first, fluid type dengan `clamp()`)
- JavaScript vanilla (~90 baris: menu mobile, reveal-on-scroll, lightbox, sorot jam buka)
- Google Maps embed (tanpa API key) + data terstruktur `schema.org/BarberShop` untuk SEO lokal
- Font: Anton (judul) & Inter (isi) via Google Fonts

## Struktur

```
├── index.html              # Seluruh halaman (satu file, semua section)
├── src/
│   ├── style.css           # Tema gelap premium, mobile-first
│   └── main.js             # Interaksi ringan
├── public/
│   ├── favicon.svg         # Tiang barber
│   └── images/             # Foto asli dari Google Maps (sudah dikompres)
├── .github/workflows/      # Deploy otomatis ke GitHub Pages
├── vite.config.js          # base "./" → aman untuk Vercel & GitHub Pages
└── package.json
```

## Menjalankan di lokal

Butuh **Node.js 18+**.

```bash
npm install     # sekali saja
npm run dev     # development server (biasanya http://localhost:5173)
```

## Build produksi

```bash
npm run build     # hasil di folder dist/
npm run preview   # pratinjau hasil build di lokal
```

## Environment variable

Tidak ada — halaman ini 100% statis, tanpa kunci API, tanpa kredensial.

## Deployment

### Vercel (target utama)

1. Push repo ini ke GitHub.
2. Di Vercel: **Add New → Project → Import** repositorinya.
3. Biarkan semua default — Vercel otomatis mendeteksi Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy. Tidak perlu `vercel.json` atau pengaturan lain.

### GitHub Pages (untuk testing)

1. Push ke branch `main`.
2. Di GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy-pages.yml` akan build dan deploy otomatis.
4. Tidak perlu konfigurasi base path — `vite.config.js` memakai `base: "./"` (path relatif), jadi aset tetap beres walaupun diakses dari `username.github.io/nama-repo/`.

> Konfigurasi ini tidak saling mengganggu: hasil build yang sama bisa dideploy ke Vercel maupun GitHub Pages tanpa diubah.

## ⚠️ Data yang perlu diganti sebelum presentasi

Semua data di bawah ini diambil dari halaman Google Maps. Yang belum tersedia publik diberi **placeholder** — cari `GANTI NOMOR` di `index.html`:

| Data | Status | Lokasi |
| --- | --- | --- |
| Nomor WhatsApp | **placeholder** `6281234567890` | 5 link `wa.me` di `index.html` (header, hero, layanan, booking, footer, CTA bar) |
| Jam buka (10.00–21.00) | **perkiraan** — konfirmasi ke pemilik | `<ul class="hours">` + JSON-LD `openingHours` di `index.html` |
| Alamat | dari koordinat Maps (dekat Pagaden, Subang) — konfirmasi nomor bangunan | section Lokasi |
| Harga layanan | sengaja tidak dicantumkan (bisa ditambahkan bila pemilik setuju) | section Layanan |

## Catatan konten

- Headline hero *"Everyone deserves a good hair cut"* adalah tulisan asli di dinding toko.
- Daftar layanan (Haircut, Hair Treatment, Grooming, Coloring) diambil dari papan nama toko.
- Foto: `hero.jpg` (toko malam hari), `depan-malam.jpg` (toko malam, potret), `depan-siang.jpg` (toko siang), `interior-*.jpg` (suasana), `proses-*.jpg` (proses pangkas), `hasil.jpg` (hasil pangkas di cermin), `anak.jpg` (pelanggan anak).
- Folder `image/` di root adalah foto mentah sebelum kompresi — di-ignore dari Git.
