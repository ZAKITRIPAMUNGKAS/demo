// ============================================================
// DATA MODEL — Sistem Manajemen Hotel Haji & Umroh
// Versi 2.0 — Occupancy-Focused
// ============================================================
const dummyData = {

  // ── CURRENT USER ──────────────────────────────────────────
  currentUser: {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'Manager',  // 'Manager' | 'Staff'
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=059669&color=fff'
  },

  users: [
    { id: 1, name: 'Ahmad Fauzi',  username: 'ahmad',  role: 'Manager', status: 'Aktif' },
    { id: 2, name: 'Siti Sarah',   username: 'sarah',  role: 'Staff',   status: 'Aktif' },
    { id: 3, name: 'Budi Hartono', username: 'budi',   role: 'Staff',   status: 'Aktif' }
  ],

  // ── HOTEL MASTER ──────────────────────────────────────────
  // Satu hotel bisa dipakai oleh BANYAK keberangkatan (date-based)
  hotels: [
    {
        "id": 1,
        "nama": "AL MARWA RAYHAN/MOVENPICK",
        "kota": "Mekkah",
        "bintang": 5,
        "alamat": "Mekkah",
        "telepon": "+966 12 000 0001",
        "totalKamar": 50,
        "rooms": [
            {
                "id": "R1-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R1-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R1-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R1-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 2,
        "nama": "MAYSAN HARITHIA",
        "kota": "Madinah",
        "bintang": 4,
        "alamat": "Madinah",
        "telepon": "+966 14 000 0002",
        "totalKamar": 50,
        "rooms": [
            {
                "id": "R2-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R2-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R2-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R2-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 3,
        "nama": "ANJUM",
        "kota": "Mekkah",
        "bintang": 5,
        "alamat": "Mekkah",
        "telepon": "+966 12 000 0003",
        "totalKamar": 50,
        "rooms": [
            {
                "id": "R3-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R3-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R3-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R3-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 4,
        "nama": "GOLDEN TULIP ALLOTMENT",
        "kota": "Madinah",
        "bintang": 4,
        "alamat": "Madinah",
        "telepon": "+966 14 000 0004",
        "totalKamar": 50,
        "rooms": [
            {
                "id": "R4-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R4-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R4-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R4-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 5,
        "nama": "MAYSAN MAQAM ALLOTMENT",
        "kota": "Mekkah",
        "bintang": 5,
        "alamat": "Mekkah",
        "telepon": "+966 12 000 0005",
        "totalKamar": 80,
        "rooms": [
            {
                "id": "R5-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-21",
                "noKamar": "121",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-22",
                "noKamar": "122",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-23",
                "noKamar": "123",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-24",
                "noKamar": "124",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-25",
                "noKamar": "125",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-26",
                "noKamar": "126",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-27",
                "noKamar": "127",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-28",
                "noKamar": "128",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-29",
                "noKamar": "129",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-30",
                "noKamar": "130",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-31",
                "noKamar": "131",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-32",
                "noKamar": "132",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-33",
                "noKamar": "133",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-34",
                "noKamar": "134",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-35",
                "noKamar": "135",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-36",
                "noKamar": "136",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-37",
                "noKamar": "137",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-38",
                "noKamar": "138",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-39",
                "noKamar": "139",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-40",
                "noKamar": "140",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-41",
                "noKamar": "141",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-42",
                "noKamar": "142",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-43",
                "noKamar": "143",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-44",
                "noKamar": "144",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-45",
                "noKamar": "145",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-46",
                "noKamar": "146",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-47",
                "noKamar": "147",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-48",
                "noKamar": "148",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-49",
                "noKamar": "149",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-50",
                "noKamar": "150",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R5-51",
                "noKamar": "251",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-52",
                "noKamar": "252",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-53",
                "noKamar": "253",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-54",
                "noKamar": "254",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-55",
                "noKamar": "255",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-56",
                "noKamar": "256",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-57",
                "noKamar": "257",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-58",
                "noKamar": "258",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-59",
                "noKamar": "259",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-60",
                "noKamar": "260",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R5-61",
                "noKamar": "361",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-62",
                "noKamar": "362",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-63",
                "noKamar": "363",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-64",
                "noKamar": "364",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-65",
                "noKamar": "365",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-66",
                "noKamar": "366",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-67",
                "noKamar": "367",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-68",
                "noKamar": "368",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-69",
                "noKamar": "369",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R5-70",
                "noKamar": "370",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 6,
        "nama": "ODST",
        "kota": "Madinah",
        "bintang": 4,
        "alamat": "Madinah",
        "telepon": "+966 14 000 0006",
        "totalKamar": 80,
        "rooms": [
            {
                "id": "R6-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-21",
                "noKamar": "121",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-22",
                "noKamar": "122",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-23",
                "noKamar": "123",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-24",
                "noKamar": "124",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-25",
                "noKamar": "125",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-26",
                "noKamar": "126",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-27",
                "noKamar": "127",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-28",
                "noKamar": "128",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-29",
                "noKamar": "129",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-30",
                "noKamar": "130",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-31",
                "noKamar": "131",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-32",
                "noKamar": "132",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-33",
                "noKamar": "133",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-34",
                "noKamar": "134",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-35",
                "noKamar": "135",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-36",
                "noKamar": "136",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-37",
                "noKamar": "137",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-38",
                "noKamar": "138",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-39",
                "noKamar": "139",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-40",
                "noKamar": "140",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-41",
                "noKamar": "141",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-42",
                "noKamar": "142",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-43",
                "noKamar": "143",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-44",
                "noKamar": "144",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-45",
                "noKamar": "145",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-46",
                "noKamar": "146",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-47",
                "noKamar": "147",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-48",
                "noKamar": "148",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-49",
                "noKamar": "149",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-50",
                "noKamar": "150",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R6-51",
                "noKamar": "251",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-52",
                "noKamar": "252",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-53",
                "noKamar": "253",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-54",
                "noKamar": "254",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-55",
                "noKamar": "255",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-56",
                "noKamar": "256",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-57",
                "noKamar": "257",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-58",
                "noKamar": "258",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-59",
                "noKamar": "259",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-60",
                "noKamar": "260",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R6-61",
                "noKamar": "361",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-62",
                "noKamar": "362",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-63",
                "noKamar": "363",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-64",
                "noKamar": "364",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-65",
                "noKamar": "365",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-66",
                "noKamar": "366",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-67",
                "noKamar": "367",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-68",
                "noKamar": "368",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-69",
                "noKamar": "369",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R6-70",
                "noKamar": "370",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 7,
        "nama": "WAHAT AJYAD",
        "kota": "Mekkah",
        "bintang": 4,
        "alamat": "Mekkah",
        "telepon": "+966 12 000 0007",
        "totalKamar": 40,
        "rooms": [
            {
                "id": "R7-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R7-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R7-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R7-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    },
    {
        "id": 8,
        "nama": "MAYSAN TAQWA",
        "kota": "Madinah",
        "bintang": 4,
        "alamat": "Madinah",
        "telepon": "+966 14 000 0008",
        "totalKamar": 40,
        "rooms": [
            {
                "id": "R8-1",
                "noKamar": "101",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-2",
                "noKamar": "102",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-3",
                "noKamar": "103",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-4",
                "noKamar": "104",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-5",
                "noKamar": "105",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-6",
                "noKamar": "106",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-7",
                "noKamar": "107",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-8",
                "noKamar": "108",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-9",
                "noKamar": "109",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-10",
                "noKamar": "110",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-11",
                "noKamar": "111",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-12",
                "noKamar": "112",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-13",
                "noKamar": "113",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-14",
                "noKamar": "114",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-15",
                "noKamar": "115",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-16",
                "noKamar": "116",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-17",
                "noKamar": "117",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-18",
                "noKamar": "118",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-19",
                "noKamar": "119",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-20",
                "noKamar": "120",
                "roomType": "Quad",
                "kapasitas": 4,
                "lantai": 1
            },
            {
                "id": "R8-21",
                "noKamar": "221",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-22",
                "noKamar": "222",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-23",
                "noKamar": "223",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-24",
                "noKamar": "224",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-25",
                "noKamar": "225",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-26",
                "noKamar": "226",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-27",
                "noKamar": "227",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-28",
                "noKamar": "228",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-29",
                "noKamar": "229",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-30",
                "noKamar": "230",
                "roomType": "Triple",
                "kapasitas": 3,
                "lantai": 2
            },
            {
                "id": "R8-31",
                "noKamar": "331",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-32",
                "noKamar": "332",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-33",
                "noKamar": "333",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-34",
                "noKamar": "334",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-35",
                "noKamar": "335",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-36",
                "noKamar": "336",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-37",
                "noKamar": "337",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-38",
                "noKamar": "338",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-39",
                "noKamar": "339",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            },
            {
                "id": "R8-40",
                "noKamar": "340",
                "roomType": "Double",
                "kapasitas": 2,
                "lantai": 3
            }
        ]
    }
],

  // ── KEBERANGKATAN ─────────────────────────────────────────
  // Unik per grup: Bandara + Tanggal + Maskapai
  // lamaMek = hari di Mekkah, lamaMed = hari di Madinah
  keberangkatan: [
    {
        "id": 1,
        "kode": "CGK-20260706-SV",
        "bandara": "CGK",
        "namaLengkap": "Soekarno-Hatta (CGK)",
        "maskapai": "SV",
        "namaMaskapai": "Saudia",
        "tanggalBerangkat": "2026-07-06",
        "tanggalKembali": "2026-07-19",
        "lamaMek": 4,
        "lamaMed": 3,
        "totalHari": 9,
        "pakets": [
            "M",
            "S",
            "SF",
            "SAF"
        ],
        "totalJamaah": 228,
        "kuotaMax": 250,
        "status": "Open"
    },
    {
        "id": 2,
        "kode": "KNO-20260712-SV",
        "bandara": "KNO",
        "namaLengkap": "Kualanamu (KNO)",
        "maskapai": "SV",
        "namaMaskapai": "Saudia",
        "tanggalBerangkat": "2026-07-12",
        "tanggalKembali": "2026-07-25",
        "lamaMek": 4,
        "lamaMed": 3,
        "totalHari": 9,
        "pakets": [
            "M",
            "S",
            "SF",
            "SAF"
        ],
        "totalJamaah": 228,
        "kuotaMax": 250,
        "status": "Open"
    }
],

  // ── RESERVASI ─────────────────────────────────────────────
  // Inti sistem: booking kamar hotel per keberangkatan+paket
  // Satu reservasi = satu hotel + satu room type + satu periode tanggal
  reservasi: [
    {
        "id": 1,
        "reservasiNo": "RES-7678237",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 1,
        "hotelNama": "AL MARWA RAYHAN/MOVENPICK",
        "kota": "Mekkah",
        "paket": "M",
        "roomType": "Quad",
        "jumlahKamar": 4,
        "kapasitasTotal": 16,
        "checkIn": "2026-07-06",
        "checkOut": "2026-07-10",
        "vendorRef": "7678237",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 2,
        "reservasiNo": "RES-441559",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 2,
        "hotelNama": "MAYSAN HARITHIA",
        "kota": "Madinah",
        "paket": "M",
        "roomType": "Quad",
        "jumlahKamar": 4,
        "kapasitasTotal": 16,
        "checkIn": "2026-07-10",
        "checkOut": "2026-07-13",
        "vendorRef": "441559",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 3,
        "reservasiNo": "RES-88789213",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 3,
        "hotelNama": "ANJUM",
        "kota": "Mekkah",
        "paket": "S",
        "roomType": "Quad",
        "jumlahKamar": 9,
        "kapasitasTotal": 36,
        "checkIn": "2026-07-06",
        "checkOut": "2026-07-10",
        "vendorRef": "88789213",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 4,
        "reservasiNo": "RES-82891237",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 4,
        "hotelNama": "GOLDEN TULIP ALLOTMENT",
        "kota": "Madinah",
        "paket": "S",
        "roomType": "Quad",
        "jumlahKamar": 9,
        "kapasitasTotal": 36,
        "checkIn": "2026-07-10",
        "checkOut": "2026-07-13",
        "vendorRef": "82891237",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 5,
        "reservasiNo": "RES-4882913",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 5,
        "hotelNama": "MAYSAN MAQAM ALLOTMENT",
        "kota": "Mekkah",
        "paket": "SF",
        "roomType": "Quad",
        "jumlahKamar": 30,
        "kapasitasTotal": 120,
        "checkIn": "2026-07-06",
        "checkOut": "2026-07-10",
        "vendorRef": "4882913",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 6,
        "reservasiNo": "RES-872898",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 6,
        "hotelNama": "ODST",
        "kota": "Madinah",
        "paket": "SF",
        "roomType": "Quad",
        "jumlahKamar": 30,
        "kapasitasTotal": 120,
        "checkIn": "2026-07-10",
        "checkOut": "2026-07-13",
        "vendorRef": "872898",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 7,
        "reservasiNo": "RES-7872893",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 7,
        "hotelNama": "WAHAT AJYAD",
        "kota": "Mekkah",
        "paket": "SAF",
        "roomType": "Quad",
        "jumlahKamar": 14,
        "kapasitasTotal": 56,
        "checkIn": "2026-07-06",
        "checkOut": "2026-07-10",
        "vendorRef": "7872893",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 8,
        "reservasiNo": "RES-441515",
        "keberangkatanId": 1,
        "keberangkatanKode": "CGK-20260706-SV",
        "hotelId": 8,
        "hotelNama": "MAYSAN TAQWA",
        "kota": "Madinah",
        "paket": "SAF",
        "roomType": "Quad",
        "jumlahKamar": 14,
        "kapasitasTotal": 56,
        "checkIn": "2026-07-10",
        "checkOut": "2026-07-13",
        "vendorRef": "441515",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 9,
        "reservasiNo": "RES-KNO-7678237",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 1,
        "hotelNama": "AL MARWA RAYHAN/MOVENPICK",
        "kota": "Mekkah",
        "paket": "M",
        "roomType": "Quad",
        "jumlahKamar": 4,
        "kapasitasTotal": 16,
        "checkIn": "2026-07-12",
        "checkOut": "2026-07-16",
        "vendorRef": "7678237",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 10,
        "reservasiNo": "RES-KNO-441559",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 2,
        "hotelNama": "MAYSAN HARITHIA",
        "kota": "Madinah",
        "paket": "M",
        "roomType": "Quad",
        "jumlahKamar": 4,
        "kapasitasTotal": 16,
        "checkIn": "2026-07-16",
        "checkOut": "2026-07-19",
        "vendorRef": "441559",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 11,
        "reservasiNo": "RES-KNO-88789213",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 3,
        "hotelNama": "ANJUM",
        "kota": "Mekkah",
        "paket": "S",
        "roomType": "Quad",
        "jumlahKamar": 9,
        "kapasitasTotal": 36,
        "checkIn": "2026-07-12",
        "checkOut": "2026-07-16",
        "vendorRef": "88789213",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 12,
        "reservasiNo": "RES-KNO-82891237",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 4,
        "hotelNama": "GOLDEN TULIP ALLOTMENT",
        "kota": "Madinah",
        "paket": "S",
        "roomType": "Quad",
        "jumlahKamar": 9,
        "kapasitasTotal": 36,
        "checkIn": "2026-07-16",
        "checkOut": "2026-07-19",
        "vendorRef": "82891237",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 13,
        "reservasiNo": "RES-KNO-4882913",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 5,
        "hotelNama": "MAYSAN MAQAM ALLOTMENT",
        "kota": "Mekkah",
        "paket": "SF",
        "roomType": "Quad",
        "jumlahKamar": 30,
        "kapasitasTotal": 120,
        "checkIn": "2026-07-12",
        "checkOut": "2026-07-16",
        "vendorRef": "4882913",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 14,
        "reservasiNo": "RES-KNO-872898",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 6,
        "hotelNama": "ODST",
        "kota": "Madinah",
        "paket": "SF",
        "roomType": "Quad",
        "jumlahKamar": 30,
        "kapasitasTotal": 120,
        "checkIn": "2026-07-16",
        "checkOut": "2026-07-19",
        "vendorRef": "872898",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 15,
        "reservasiNo": "RES-KNO-7872893",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 7,
        "hotelNama": "WAHAT AJYAD",
        "kota": "Mekkah",
        "paket": "SAF",
        "roomType": "Quad",
        "jumlahKamar": 14,
        "kapasitasTotal": 56,
        "checkIn": "2026-07-12",
        "checkOut": "2026-07-16",
        "vendorRef": "7872893",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    },
    {
        "id": 16,
        "reservasiNo": "RES-KNO-441515",
        "keberangkatanId": 2,
        "keberangkatanKode": "KNO-20260712-SV",
        "hotelId": 8,
        "hotelNama": "MAYSAN TAQWA",
        "kota": "Madinah",
        "paket": "SAF",
        "roomType": "Quad",
        "jumlahKamar": 14,
        "kapasitasTotal": 56,
        "checkIn": "2026-07-16",
        "checkOut": "2026-07-19",
        "vendorRef": "441515",
        "status": "Confirmed",
        "amendmentLog": [],
        "createdBy": "Ahmad Fauzi",
        "createdAt": "2026-05-01"
    }
],

  // ── JAMAAH ────────────────────────────────────────────────
  // NIK sebagai unique key. Upload via Excel
  jamaah: [
    {
      id: 1,
      nik: '3201012345670001',
      nama: 'Siti Aminah',
      gender: 'Perempuan',
      noHp: '081234567890',
      keberangkatanId: 1,
      keberangkatanKode: 'CGK-20260706-SV',
      paket: 'M',
      roomType: 'Quad',
      createdAt: '2026-05-01',
      importedFrom: 'data_jamaah_jul.xlsx'
    },
    {
      id: 2,
      nik: '3201012345670002',
      nama: 'Muhammad Rizki',
      gender: 'Laki-laki',
      noHp: '081234567891',
      keberangkatanId: 1,
      keberangkatanKode: 'CGK-20260706-SV',
      paket: 'S',
      roomType: 'Quad',
      createdAt: '2026-05-01',
      importedFrom: 'data_jamaah_jul.xlsx'
    },
    {
      id: 3,
      nik: '3201012345670003',
      nama: 'Fatimah Zahra',
      gender: 'Perempuan',
      noHp: '081234567892',
      keberangkatanId: 2,
      keberangkatanKode: 'CGK-20260712-SV',
      paket: 'M',
      roomType: 'Quad',
      createdAt: '2026-05-02',
      importedFrom: 'data_jamaah_jul.xlsx'
    }
  ],

  // ── PAKET LABEL MAP ───────────────────────────────────────
  paketMap: {
    'M':   { label: 'Economy (M)',         color: 'bg-slate-100 text-slate-700' },
    'S':   { label: 'Standard (S)',        color: 'bg-blue-100 text-blue-700' },
    'SF':  { label: 'Full Fasilitas (SF)', color: 'bg-blue-100 text-blue-700' },
    'SAF': { label: 'Super Full (SAF)',    color: 'bg-amber-100 text-amber-700' }
  },

  // ── AKTIVITAS LOG ─────────────────────────────────────────
  aktivitasTerbaru: [
    { icon: 'file-spreadsheet', text: 'Import 45 jamaah dari data_jamaah_jul.xlsx', time: '2 jam lalu', type: 'success' },
    { icon: 'edit', text: 'Amendment tanggal RES-CGK-20260712-SV-001', time: '5 jam lalu', type: 'warning' },
    { icon: 'check-circle', text: 'Reservasi baru: Anjum Hotel — 9 Kamar Quad', time: '1 hari lalu', type: 'success' },
    { icon: 'alert-triangle', text: 'Al Safwah Royale — Kamar Quad hampir penuh (8/10)', time: '1 hari lalu', type: 'danger' }
  ]
};

// ============================================================
// HELPER FUNCTIONS — Business Logic
// ============================================================

/**
 * Cek apakah kamar tersedia di hotel untuk rentang tanggal tertentu
 * Return: { available: bool, konflik: [], tersedia: number, total: number }
 */
function checkRoomAvailability(hotelId, roomType, jumlahDiminta, checkIn, checkOut, excludeReservasiId = null) {
  const hotel = dummyData.hotels.find(h => h.id === hotelId);
  if (!hotel) return { available: false, konflik: [], tersedia: 0, total: 0 };

  const totalKamar = hotel.rooms.filter(r => r.roomType === roomType).length;
  const ciDate = new Date(checkIn);
  const coDate = new Date(checkOut);

  const konflik = dummyData.reservasi.filter(r =>
    r.hotelId === hotelId &&
    r.roomType === roomType &&
    r.status !== 'Cancelled' &&
    r.id !== excludeReservasiId &&
    new Date(r.checkIn) < coDate &&
    new Date(r.checkOut) > ciDate
  );

  const terpakai = konflik.reduce((sum, r) => sum + r.jumlahKamar, 0);
  const tersedia = totalKamar - terpakai;

  return {
    available: tersedia >= jumlahDiminta,
    konflik,
    tersedia,
    total: totalKamar,
    terpakai
  };
}

/**
 * Dapatkan semua reservasi aktif pada tanggal tertentu
 */
function getActiveReservasiOnDate(date, hotelId = null) {
  const d = new Date(date);
  return dummyData.reservasi.filter(r => {
    const ci = new Date(r.checkIn);
    const co = new Date(r.checkOut);
    const matchDate = ci <= d && d < co;
    const matchHotel = hotelId ? r.hotelId === hotelId : true;
    return matchDate && matchHotel && r.status !== 'Cancelled';
  });
}

/**
 * Hitung % ocupansi hotel pada tanggal tertentu
 */
function getHotelOccupancyOnDate(hotelId, date) {
  const hotel = dummyData.hotels.find(h => h.id === hotelId);
  if (!hotel) return 0;
  const aktif = getActiveReservasiOnDate(date, hotelId);
  const terpakai = aktif.reduce((sum, r) => sum + r.jumlahKamar, 0);
  return Math.round((terpakai / hotel.rooms.length) * 100);
}

/**
 * Generate nomor reservasi otomatis
 */
function generateReservasiNo(keberangkatanKode) {
  const existing = dummyData.reservasi.filter(r => r.keberangkatanKode === keberangkatanKode);
  const seq = String(existing.length + 1).padStart(3, '0');
  return `RES-${keberangkatanKode}-${seq}`;
}
