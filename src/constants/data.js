/**
 * data.js — Semua konten data website Puri Elena Kalisalak Batang.
 * Pisahkan data dari UI agar mudah diupdate tanpa menyentuh komponen.
 */

// ─── COMPANY INFO ────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Puri Elena',
  subtitle: 'Kalisalak Batang',
  tagline: 'Hunian Nyaman, Harga Aman',
  description:
    'Rumah minimalis 1 lantai dengan bangunan baru, kamar tidur yang luas dan garasi. Lokasi strategis di Kemloko, Kalisalak Atas, Kabupaten Batang, Jawa Tengah.',
  address: 'Kemloko, Kalisalak Atas, Kab. Batang, Jawa Tengah',
  phone: [
    { name: 'Farkhan', number: '0859-4462-9716', wa: '6285944629716' },
    { name: 'Alan',    number: '0857-1301-9019', wa: '6285713019019' },
  ],
  email: 'info@purielena-kalisalak.id',
  officeHours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  maps: 'https://maps.google.com/?q=Kalisalak+Atas+Batang',
};

// ─── HOUSE TYPES ─────────────────────────────────────────────────────────────
export const HOUSE_TYPES = [
  {
    id: 1,
    badge: 'Subsidi',
    type: '30/60',
    label: 'Tipe Subsidi 30/60',
    lbLt: 'LB 30 m² / LT 60 m²',
    lb: 30,
    lt: 60,
    floors: 1,
    beds: 2,
    baths: 1,
    garage: 1,
    price: 'Mulai Rp 166 Juta',
    img: '/rumah-subsidi-3060.png',
    color: '#1B5E4B',
    highlight: false,
    features: [
      'Ruang tamu & ruang keluarga',
      '2 kamar tidur luas',
      '1 kamar mandi',
      'Garasi kendaraan',
      'Dapur semi-terbuka',
      'Taman depan',
      'Sertifikat SHM',
    ],
  },
  {
    id: 2,
    badge: 'Premium',
    type: '40/84',
    label: 'Tipe Premium 40/84',
    lbLt: 'LB 40 m² / LT 84 m²',
    lb: 40,
    lt: 84,
    floors: 1,
    beds: 2,
    baths: 1,
    garage: 1,
    price: 'Hubungi Kami',
    img: '/rumah-premium-4084.png',
    color: '#c9a84c',
    highlight: true,
    features: [
      'Ruang tamu & keluarga lebih luas',
      '2 kamar tidur ekstra luas',
      '1 kamar mandi',
      'Garasi kendaraan',
      'Dapur semi-terbuka modern',
      'Halaman depan & belakang',
      'Sertifikat SHM',
    ],
  },
];

// ─── FACILITIES ───────────────────────────────────────────────────────────────
export const FACILITIES = [
  { label: '2 Kamar Tidur',  desc: 'Kamar tidur luas & nyaman' },
  { label: '1 Kamar Mandi',  desc: 'Kamar mandi bersih modern' },
  { label: 'Garasi',          desc: 'Garasi untuk 1 kendaraan' },
];

// ─── ADVANTAGES ──────────────────────────────────────────────────────────────
export const ADVANTAGES = [
  {
    title: 'Harga Terjangkau',
    desc: 'Mulai dari Rp 166 Juta. Tersedia KPR Subsidi BPJS Ketenagakerjaan dan bank rekanan.',
  },
  {
    title: 'Lokasi Strategis',
    desc: 'Kemloko, Kalisalak Atas, Kab. Batang — dekat akses jalan utama, pasar, sekolah dan fasilitas umum.',
  },
  {
    title: 'Legalitas Terjamin',
    desc: 'Sertifikat Hak Milik (SHM) dan IMB lengkap. Aman dan legal 100%.',
  },
  {
    title: 'Kualitas Bangunan',
    desc: 'Bangunan baru dengan material berkualitas. Konstruksi beton bertulang kokoh dan tahan lama.',
  },
];

// ─── STEPS ───────────────────────────────────────────────────────────────────
export const STEPS = [
  {
    step: '01',
    title: 'Hubungi Kami',
    desc: 'Hubungi marketing kami via WhatsApp atau telepon untuk informasi lebih lanjut.',
  },
  {
    step: '02',
    title: 'Survey Lokasi',
    desc: 'Jadwalkan kunjungan ke lokasi untuk melihat langsung kondisi unit dan lingkungan.',
  },
  {
    step: '03',
    title: 'Ajukan KPR / Tunai',
    desc: 'Pilih metode pembayaran: KPR bank, KPR Subsidi, atau pembayaran tunai keras.',
  },
  {
    step: '04',
    title: 'Akad & Serah Terima',
    desc: 'Proses akad kredit dan serah terima kunci unit. Rumah siap huni!',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    role: 'Pembeli Unit Tipe 30/60',
    initial: 'BS',
    rating: 5,
    text: 'Alhamdulillah, bisa punya rumah sendiri dengan harga yang sangat terjangkau. Prosesnya mudah dan marketing sangat responsif. Rumahnya bagus dan lokasi strategis.',
  },
  {
    name: 'Siti Rahayu',
    role: 'Pembeli Unit Tipe 40/84',
    initial: 'SR',
    rating: 5,
    text: 'Pelayanannya ramah sekali. Dibantu dari awal hingga akad kredit. Bonus kitchen set-nya sangat membantu. Sangat puas dengan Puri Elena Kalisalak!',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Pembeli Unit Subsidi',
    initial: 'AF',
    rating: 5,
    text: 'Rumahnya cantik, kokoh, dan bersih. Lingkungannya tenang dan nyaman untuk keluarga. Harga sesuai, fasilitas lengkap. Recommended!',
  },
];

// ─── FAQS ────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'Apakah tersedia KPR Subsidi?',
    a: 'Ya, tersedia KPR Subsidi BPJS Ketenagakerjaan, KPR BTN, dan bank rekanan lainnya. Hubungi marketing untuk informasi program terbaru.',
  },
  {
    q: 'Berapa uang muka (DP) minimal?',
    a: 'DP minimal sesuai kebijakan bank. Untuk KPR Subsidi bisa sangat ringan. Hubungi kami untuk simulasi KPR sesuai penghasilan Anda.',
  },
  {
    q: 'Apakah bangunan sudah jadi atau indent?',
    a: 'Unit ready stock tersedia. Ada juga pilihan indent untuk unit-unit tertentu. Segera booking agar dapat unit pilihan terbaik.',
  },
  {
    q: 'Apa saja bonus yang didapat?',
    a: 'Setiap pembelian unit mendapatkan FREE kitchen set ATAU kanopi (pilih salah satu), serta SHM dan IMB atas nama pembeli.',
  },
  {
    q: 'Bagaimana cara survey lokasi?',
    a: 'Hubungi marketing kami via WhatsApp atau telepon untuk membuat janji survei. Kami siap menemani Anda langsung ke lokasi.',
  },
];
