// Dummy data for prototype
const dummyData = {
  currentUser: {
    id: 1,
    name: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@hajjumroh.com',
    role: 'Admin Sistem',
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=059669&color=fff'
  },

  stats: {
    totalJamaah: 1247,
    keberangkatanTerdekat: '15 Mei 2026',
    pembayaranPending: 23,
    revenueBulanIni: 'Rp 2.450.000.000'
  },

  jamaah: [
    {
      id: 1,
      nik: '3201012345670001',
      nama: 'Siti Aminah',
      gender: 'Perempuan',
      noPaspor: 'A1234567',
      noHp: '081234567890',
      alamat: 'Jl. Merdeka No. 123, Jakarta Pusat',
      paket: 'Umroh Reguler 12 Hari',
      keberangkatan: 'CGK-20260520-REGULER',
      tanggalKeberangkatan: '2026-05-20',
      statusPembayaran: 'Lunas',
      statusDokumen: 'Lengkap',
      createdAt: '2026-03-15'
    },
    {
      id: 2,
      nik: '3201012345670002',
      nama: 'Muhammad Rizki',
      gender: 'Laki-laki',
      noPaspor: 'A2345678',
      noHp: '081234567891',
      alamat: 'Jl. Sudirman No. 45, Bandung',
      paket: 'Haji Plus 40 Hari',
      keberangkatan: 'CGK-20260615-HAJIPLUS',
      tanggalKeberangkatan: '2026-06-15',
      statusPembayaran: 'Cicilan 2/3',
      statusDokumen: 'Menunggu Visa',
      createdAt: '2026-02-10'
    },
    {
      id: 3,
      nik: '3201012345670003',
      nama: 'Fatimah Zahra',
      gender: 'Perempuan',
      noPaspor: 'A3456789',
      noHp: '081234567892',
      alamat: 'Jl. Asia Afrika No. 78, Surabaya',
      paket: 'Umroh Ramadhan 15 Hari',
      keberangkatan: 'SUB-20260310-RAMADHAN',
      tanggalKeberangkatan: '2026-03-10',
      statusPembayaran: 'Lunas',
      statusDokumen: 'Lengkap',
      createdAt: '2025-12-20'
    }
  ],

  paket: [
    {
      id: 1,
      nama: 'Umroh Reguler 12 Hari',
      tipe: 'Umroh',
      durasi: '12 Hari',
      harga: 28500000,
      deskripsi: 'Paket umroh ekonomis dengan fasilitas lengkap',
      hotel: 'Hotel Bintang 3 (200m dari Masjidil Haram)',
      maskapai: 'Garuda Indonesia / Saudia',
      fasilitas: ['Tiket PP', 'Visa', 'Hotel', 'Transportasi', 'Makan 3x', 'Tour Guide', 'Perlengkapan'],
      itinerary: '5 Hari Mekkah, 5 Hari Madinah, 2 Hari Perjalanan',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800'
    },
    {
      id: 2,
      nama: 'Umroh Ramadhan 15 Hari',
      tipe: 'Umroh',
      durasi: '15 Hari',
      harga: 45000000,
      deskripsi: 'Paket spesial umroh di bulan Ramadhan',
      hotel: 'Hotel Bintang 4 (100m dari Masjidil Haram)',
      maskapai: 'Garuda Indonesia',
      fasilitas: ['Tiket PP', 'Visa', 'Hotel Bintang 4', 'Transportasi', 'Makan 3x', 'Tour Guide', 'Perlengkapan', 'Ziarah Lengkap'],
      itinerary: '7 Hari Mekkah, 6 Hari Madinah, 2 Hari Perjalanan',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800'
    },
    {
      id: 3,
      nama: 'Haji Plus 40 Hari',
      tipe: 'Haji',
      durasi: '40 Hari',
      harga: 125000000,
      deskripsi: 'Paket haji plus dengan kenyamanan maksimal',
      hotel: 'Hotel Bintang 5 (50m dari Masjidil Haram)',
      maskapai: 'Garuda Indonesia',
      fasilitas: ['Tiket PP', 'Visa', 'Hotel Bintang 5', 'Transportasi VIP', 'Makan 3x', 'Tour Guide', 'Perlengkapan Premium', 'Handling Khusus'],
      itinerary: '20 Hari Mekkah, 18 Hari Madinah, 2 Hari Perjalanan',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800'
    }
  ],

  keberangkatan: [
    {
      id: 1,
      kode: 'CGK-20260520-REGULER',
      paket: 'Umroh Reguler 12 Hari',
      tanggalBerangkat: '2026-05-20',
      tanggalKembali: '2026-05-31',
      bandara: 'Soekarno-Hatta (CGK)',
      maskapai: 'Garuda Indonesia',
      totalJamaah: 45,
      kuotaMax: 50,
      status: 'Open'
    },
    {
      id: 2,
      kode: 'CGK-20260615-HAJIPLUS',
      paket: 'Haji Plus 40 Hari',
      tanggalBerangkat: '2026-06-15',
      tanggalKembali: '2026-07-24',
      bandara: 'Soekarno-Hatta (CGK)',
      maskapai: 'Garuda Indonesia',
      totalJamaah: 28,
      kuotaMax: 30,
      status: 'Open'
    },
    {
      id: 3,
      kode: 'SUB-20260310-RAMADHAN',
      paket: 'Umroh Ramadhan 15 Hari',
      tanggalBerangkat: '2026-03-10',
      tanggalKembali: '2026-03-24',
      bandara: 'Juanda (SUB)',
      maskapai: 'Saudia',
      totalJamaah: 50,
      kuotaMax: 50,
      status: 'Closed'
    }
  ],

  pembayaran: [
    {
      id: 1,
      jamaahNama: 'Siti Aminah',
      paket: 'Umroh Reguler 12 Hari',
      totalBiaya: 28500000,
      terbayar: 28500000,
      sisa: 0,
      status: 'Lunas',
      metodePembayaran: 'Transfer Bank',
      tanggalLunas: '2026-04-15',
      riwayat: [
        { tanggal: '2026-03-15', jumlah: 10000000, metode: 'Transfer BCA', bukti: 'bukti1.jpg' },
        { tanggal: '2026-04-01', jumlah: 10000000, metode: 'Transfer BCA', bukti: 'bukti2.jpg' },
        { tanggal: '2026-04-15', jumlah: 8500000, metode: 'Transfer BCA', bukti: 'bukti3.jpg' }
      ]
    },
    {
      id: 2,
      jamaahNama: 'Muhammad Rizki',
      paket: 'Haji Plus 40 Hari',
      totalBiaya: 125000000,
      terbayar: 83333334,
      sisa: 41666666,
      status: 'Cicilan 2/3',
      metodePembayaran: 'Transfer Bank',
      tanggalLunas: null,
      riwayat: [
        { tanggal: '2026-02-10', jumlah: 41666667, metode: 'Transfer Mandiri', bukti: 'bukti4.jpg' },
        { tanggal: '2026-03-10', jumlah: 41666667, metode: 'Transfer Mandiri', bukti: 'bukti5.jpg' }
      ]
    }
  ],

  dokumen: [
    {
      jamaahId: 1,
      jamaahNama: 'Siti Aminah',
      dokumen: [
        { jenis: 'KTP', status: 'Verified', file: 'ktp_siti.pdf', uploadDate: '2026-03-15' },
        { jenis: 'KK', status: 'Verified', file: 'kk_siti.pdf', uploadDate: '2026-03-15' },
        { jenis: 'Paspor', status: 'Verified', file: 'paspor_siti.pdf', uploadDate: '2026-03-16' },
        { jenis: 'Foto 4x6', status: 'Verified', file: 'foto_siti.jpg', uploadDate: '2026-03-16' },
        { jenis: 'Vaksin Meningitis', status: 'Verified', file: 'vaksin_siti.pdf', uploadDate: '2026-03-20' },
        { jenis: 'Visa', status: 'Verified', file: 'visa_siti.pdf', uploadDate: '2026-04-10' }
      ]
    },
    {
      jamaahId: 2,
      jamaahNama: 'Muhammad Rizki',
      dokumen: [
        { jenis: 'KTP', status: 'Verified', file: 'ktp_rizki.pdf', uploadDate: '2026-02-10' },
        { jenis: 'KK', status: 'Verified', file: 'kk_rizki.pdf', uploadDate: '2026-02-10' },
        { jenis: 'Paspor', status: 'Verified', file: 'paspor_rizki.pdf', uploadDate: '2026-02-11' },
        { jenis: 'Foto 4x6', status: 'Verified', file: 'foto_rizki.jpg', uploadDate: '2026-02-11' },
        { jenis: 'Vaksin Meningitis', status: 'Verified', file: 'vaksin_rizki.pdf', uploadDate: '2026-02-15' },
        { jenis: 'Visa', status: 'Pending', file: null, uploadDate: null }
      ]
    }
  ],

  aktivitasTerbaru: [
    { icon: 'user-plus', text: 'Jamaah baru terdaftar: Siti Aminah', time: '2 jam lalu', type: 'success' },
    { icon: 'credit-card', text: 'Pembayaran diterima: Rp 10.000.000 dari Muhammad Rizki', time: '5 jam lalu', type: 'info' },
    { icon: 'file-check', text: 'Dokumen visa diverifikasi: Fatimah Zahra', time: '1 hari lalu', type: 'success' },
    { icon: 'plane', text: 'Keberangkatan baru dibuat: CGK-20260520-REGULER', time: '2 hari lalu', type: 'warning' },
    { icon: 'alert-circle', text: 'Pembayaran jatuh tempo: 3 jamaah', time: '3 hari lalu', type: 'danger' }
  ],

  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    pendapatan: [850000000, 920000000, 1100000000, 1350000000, 2450000000],
    jamaah: [28, 35, 42, 51, 67]
  }
};
