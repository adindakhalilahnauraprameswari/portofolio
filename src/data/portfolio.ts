export const ASSETS = {
  brandMark:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDHTW2x8-Z5d-oLjxvazPEBL61RA4hwOyWZJ5PxqTpTrM1PN5w6bU_EYa3ObanlCvlXr7Bij36kpOb1XadX2EmKARIV9c8sekTCkv-eEi39VSSvEn-zbr5Fe4wIrD7kxi3MV6oqqH1tZGAx_JQfViwt5SeCrpWBDtI_43Ci8gaJvqJfTUqaOFGUT5wPHRO2hCVzW2UC_Vxn_73x1hBvZEZ_TKR7dLJJXR1iK3-n6dc',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsiGrFMrYG7lj3HYoZTtcO2iB96ELrNPc6OqhlNrt0rhH9_KFEQSqdcNzHQX4F9zKnMxdxwbfJngtwPSIJXEvWgNO_VX8zVe22j5qsAikTsko5VwbmELggwWLiMRMe0ThgaP2SdiU7ApMEsa5FmI1c0_79FUnaP-eVJxjg4pE_cnYBc4FEWHAkfLVXGctkkbViJH6id4jPEFp6mKX7OhxTG-xjqr3Jw5KjHYC6uWQ',
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCB7ELVjGeRy5433FhmhXwiqgaP9V0nFxdEUl5pg8CNS-w5irnodt8ROH6d4sOiG-uglVfHgi8uckMJczE-vK7ieObDRISGxh8PyqKI-MP1xwCQkguK3mGC0UUAhDEmCeSh6KPrYOWrtt4EcGn8vNdJQaZx7Uu0yrHvjRJ4LCJAz531DuiD1soK1myOVb9Lb2OwUDN9v0hVifmjZbcdP-0mEiOjIi8Qsyy-b3BZ7dQgQiYdeus1_QY8',
};

export interface AcademicMilestone {
  id: string;
  period: string;
  badge?: string;
  institution: string;
  subtitle: string;
  details: string;
  location: string;
  active?: boolean;
}

export const ACADEMIC_PATHWAY: AcademicMilestone[] = [
  {
    id: 'itpln',
    period: '2026 – SEKARANG',
    badge: 'Mahasiswa Aktif',
    institution: 'Institut Teknologi PLN (ITPLN)',
    subtitle: 'S1 Teknik Informatika — Fakultas Teknologi & Bisnis Energi (FTEN)',
    details:
      'Memfokuskan studi pada fondasi rekayasa perangkat lunak, logika komputasi, serta penggabungan teknologi digital dengan strategi komunikasi media kreatif.',
    location: 'Duri Kosambi, Jakarta Barat',
    active: true,
  },
  {
    id: 'sman8',
    period: '2023 – 2026',
    institution: 'SMA Negeri 8 Kota Ternate',
    subtitle: 'Jurusan IPA (Natural Sciences) — Pondasi analitis & sains',
    details:
      'Mengasah pola pikir ilmiah, pemecahan masalah kuantitatif, serta kemampuan manajemen waktu di antara kegiatan akademik dan pengembangan konten.',
    location: 'Kota Ternate, Maluku Utara',
  },
  {
    id: 'smp',
    period: 'SEKOLAH MENENGAH PERTAMA',
    institution: 'SMP Ulul Albaab Kota Ternate',
    subtitle: 'Pendidikan Menengah Pertama & Pengembangan Karakter Kepemimpinan',
    details:
      'Aktif berorganisasi di OSIS dan kepengurusan lingkungan sekolah/pesantren, membentuk ketahanan mental, komunikasi tim, dan kedisiplinan harian.',
    location: 'Kota Ternate, Maluku Utara',
  },
  {
    id: 'sd',
    period: 'SEKOLAH DASAR',
    institution: 'SD Inpres Daka Ino 1',
    subtitle: 'Kec. Wasile Timur, Kab. Halmahera Timur, Maluku Utara',
    details:
      'Tahap awal pembentukan rasa ingin tahu, kemandirian, dan kepekaan terhadap lingkungan sosial serta budaya lokal Maluku Utara.',
    location: 'Halmahera Timur, Maluku Utara',
  },
];

export interface LeadershipIssue {
  id: string;
  issueNumber: string;
  organization: string;
  icon: 'gavel' | 'cleaning' | 'groups';
  title: string;
  subtitle: string;
  bullets: string[];
  metricLabel: string;
  metricValue: string;
  fieldReflection: string;
  keyTakeaways: string[];
}

export const LEADERSHIP_ISSUES: LeadershipIssue[] = [
  {
    id: 'keamanan',
    issueNumber: 'ISSUE 01',
    organization: 'PONDOK PESANTREN',
    icon: 'gavel',
    title: 'Pengurus Bagian Keamanan',
    subtitle: 'Discipline & Order Administration',
    bullets: [
      'Menjaga kedisiplinan dan ketertiban santri sehari-hari dalam skala penuh.',
      'Menangani pelanggaran dan dinamika konflik dengan tegas serta bijaksana.',
      'Terbiasa memimpin briefing tim serta memegang akuntabilitas operasional.',
    ],
    metricLabel: 'RESILIENCE LEVEL',
    metricValue: '100% EXECUTED',
    fieldReflection:
      'Peran di divisi keamanan melatih ketenangan di bawah tekanan, kemampuan mengambil keputusan adil, dan keberanian berkomunikasi langsung dengan beragam karakter individu.',
    keyTakeaways: [
      'Mediasi konflik antar-rekan secara objektif & empatik',
      'Konsistensi penegakan aturan harian lintas waktu',
      'Komando briefing harian & laporan pertanggungjawaban',
    ],
  },
  {
    id: 'kebersihan',
    issueNumber: 'ISSUE 02',
    organization: 'PONDOK PESANTREN',
    icon: 'cleaning',
    title: 'Pengurus Bagian Kebersihan',
    subtitle: 'Operations & Coordination',
    bullets: [
      'Mengkoordinasikan jadwal kebersihan berkala dan kegiatan kerja bakti massal.',
      'Membagi delegasi tugas secara merata dan memastikan standardisasi berjalan baik.',
      'Mengembangkan ketelitian detail serta kemampuan problem solving lapangan.',
    ],
    metricLabel: 'COORDINATION',
    metricValue: 'FULL SCOPE',
    fieldReflection:
      'Mengelola kebersihan lingkungan komunal bukan sekadar urusan teknis, melainkan koordinasi logistik manusia agar seluruh anggota merasa memiliki tanggung jawab bersama.',
    keyTakeaways: [
      'Penjadwalan rotasi piket yang adil & terukur',
      'Inspeksi kualitas lingkungan & tindak lanjut cepat',
      'Mobilisasi kerja bakti kolektif dengan komunikasi persuasif',
    ],
  },
  {
    id: 'osis',
    issueNumber: 'ISSUE 03',
    organization: 'SMP ULUL ALBAAB',
    icon: 'groups',
    title: 'Anggota / Pengurus OSIS',
    subtitle: 'Student Governance & Event Ops',
    bullets: [
      'Aktif berpartisipasi dalam merancang dan mengeksekusi program kerja OSIS.',
      'Membantu koordinasi lintas divisi dalam penyelenggaraan acara sekolah.',
      'Mengasah kemampuan komunikasi publik, kolaborasi, dan empati kepemimpinan.',
    ],
    metricLabel: 'PUBLIC ACTION',
    metricValue: 'INITIATIVE',
    fieldReflection:
      'Pengalaman pertama dalam tata kelola organisasi siswa yang membuka ruang kreativitas acara, koordinasi panitia, dan representasi aspirasi pelajar.',
    keyTakeaways: [
      'Perancangan konsep kegiatan kesiswaan dari awal hingga evaluasi',
      'Koordinasi lintas seksi saat hari pelaksanaan acara',
      'Kepercayaan diri berbicara di depan forum siswa',
    ],
  },
];

export type SkillFilter = 'ALL' | 'CANVA' | 'CAPCUT' | 'INSTAGRAM' | 'COPYWRITING' | 'BASIC DESIGN';

export interface ProductionTool {
  id: SkillFilter;
  name: string;
  icon: 'draw' | 'movie' | 'share';
  description: string;
  workflowNote: string;
}

export const PRODUCTION_TOOLS: ProductionTool[] = [
  {
    id: 'CANVA',
    name: 'Canva',
    icon: 'draw',
    description: 'Visual design, feed curation & publication layout.',
    workflowNote: 'Carousel editorial, poster acara, & template identitas visual.',
  },
  {
    id: 'CAPCUT',
    name: 'CapCut',
    icon: 'movie',
    description: 'Short-form dynamic video pacing & audio synch.',
    workflowNote: 'Pemotongan ritmis, keyframing sederhana, & subtitle dinamis.',
  },
  {
    id: 'INSTAGRAM',
    name: 'Instagram',
    icon: 'share',
    description: 'Strategic distribution, reels storytelling & tone.',
    workflowNote: 'Kurasi feed, hook 3 detik awal, & interaksi audiens organik.',
  },
];

export interface HardSkillItem {
  num: string;
  title: string;
  description: string;
  tags: SkillFilter[];
}

export const HARD_SKILLS: HardSkillItem[] = [
  {
    num: '01',
    title: 'Content Creation',
    description:
      'Merancang ide visual dan video pendek yang memikat perhatian serta relevan bagi audiens generasi digital.',
    tags: ['ALL', 'CAPCUT', 'INSTAGRAM', 'CANVA'],
  },
  {
    num: '02',
    title: 'Copywriting',
    description:
      'Menulis caption, naskah narasi konten, dan headline yang komunikatif, terstruktur rapi, dan persuasif.',
    tags: ['ALL', 'COPYWRITING', 'INSTAGRAM'],
  },
  {
    num: '03',
    title: 'Basic Design & Layout',
    description:
      'Menyusun harmoni warna, hierarki tipografi, dan komposisi grid grafis yang nyaman dibaca dan estetis.',
    tags: ['ALL', 'BASIC DESIGN', 'CANVA'],
  },
];

export interface DispositionStamp {
  id: string;
  label: string;
  note: string;
}

export const DISPOSITION_STAMPS: DispositionStamp[] = [
  {
    id: 'communication',
    label: 'COMMUNICATION',
    note: 'Menyampaikan ide teknis maupun kreatif secara jernih kepada audiens lintas latar belakang.',
  },
  {
    id: 'teamwork',
    label: 'TEAMWORK',
    note: 'Terbiasa bekerja dalam kepengurusan kolektif dengan pembagian peran yang saling menopang.',
  },
  {
    id: 'creativity',
    label: 'CREATIVITY',
    note: 'Menerjemahkan pengalaman sehari-hari menjadi narasi visual dan format konten yang segar.',
  },
  {
    id: 'adaptability',
    label: 'ADAPTABILITY',
    note: 'Menjembatani kultur Maluku Utara hingga ritme perkuliahan Teknik Informatika di Jakarta Barat.',
  },
  {
    id: 'discipline',
    label: 'DISCIPLINE',
    note: 'Ditempa dari tanggung jawab tata tertib pesantren sehingga terbiasa tuntas pada tenggat waktu.',
  },
];

export interface ContactFolio {
  folio: string;
  kicker: string;
  title: string;
  value: string;
  href: string;
  external?: boolean;
  copyable?: boolean;
}

export const CONTACT_FOLIOS: ContactFolio[] = [
  {
    folio: 'FOLIO 01',
    kicker: 'ELECTRONIC DISPATCH',
    title: 'Email',
    value: 'adindakhalilahnaura31@gmail.com',
    href: 'mailto:adindakhalilahnaura31@gmail.com',
    copyable: true,
  },
  {
    folio: 'FOLIO 02',
    kicker: 'DIRECT SIGNAL',
    title: 'WhatsApp',
    value: '+62 821-2620-3274',
    href: 'https://wa.me/6282126203274',
    external: true,
  },
  {
    folio: 'FOLIO 03',
    kicker: 'PROFESSIONAL WIRE',
    title: 'LinkedIn',
    value: 'Adinda Nawra',
    href: 'https://www.linkedin.com/search/results/all/?keywords=Adinda%20Nawra',
    external: true,
  },
  {
    folio: 'FOLIO 04',
    kicker: 'CREATIVE LOG',
    title: 'Instagram',
    value: '@adndanwra',
    href: 'https://instagram.com/adndanwra',
    external: true,
  },
];
