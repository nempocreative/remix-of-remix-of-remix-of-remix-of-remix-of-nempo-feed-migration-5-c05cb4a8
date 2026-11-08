import { INFO_DIVISIONS } from './kala-muda-recruit-timeline';

export type KalaMudaDivisionIcon = 'palette' | 'code' | 'sparkles' | 'camera' | 'megaphone' | 'calendar';

export type KalaMudaDivision = {
  name: (typeof INFO_DIVISIONS)[number];
  icon: KalaMudaDivisionIcon;
  tagline: string;
  tasks: string[];
  skills: string[];
  tools: string[];
  fit: string;
};

/** First Nempo Feed slide of the division series; one slide per division follows in order. */
export const DIVISION_FIRST_SLIDE = 38;

/** Detail per Kala Muda division, in the same order as the slide 36 chips. */
export const KALA_MUDA_DIVISIONS: KalaMudaDivision[] = [
  {
    name: 'Designer',
    icon: 'palette',
    tagline: 'Mengubah ide jadi visual yang bikin orang berhenti scroll.',
    tasks: [
      'Desain feed & story Instagram untuk NEMPO dan klien',
      'Membuat poster, banner, dan materi promosi acara',
      'Menjaga identitas visual brand: logo, warna, dan font',
      'Menyiapkan file siap cetak dan siap unggah',
    ],
    skills: ['Layout & tipografi', 'Paduan warna', 'Teliti', 'Terbuka dengan revisi'],
    tools: ['Canva', 'Photoshop', 'Illustrator', 'Figma'],
    fit: 'suka menggambar, peka estetika, dan senang hal-hal rapi.',
  },
  {
    name: 'Web Developer',
    icon: 'code',
    tagline: 'Membangun dan merawat website NEMPO serta klien.',
    tasks: [
      'Membuat landing page dan website untuk klien',
      'Merawat www.nempogarut.com dan memperbarui isinya',
      'Menyambungkan formulir pendaftaran ke WhatsApp',
      'Memastikan website cepat dan nyaman dibuka di HP',
    ],
    skills: ['HTML, CSS, JavaScript', 'Logika & problem solving', 'Desain responsif', 'Mau terus belajar'],
    tools: ['VS Code', 'GitHub', 'React', 'WordPress'],
    fit: 'penasaran cara kerja aplikasi dan betah ngulik sampai berhasil.',
  },
  {
    name: 'Content Creator',
    icon: 'sparkles',
    tagline: 'Mencari ide konten dan menghidupkannya di depan kamera.',
    tasks: [
      'Riset tren dan menyusun ide konten mingguan',
      'Menulis naskah, hook, dan caption yang menarik',
      'Tampil sebagai host di reels dan TikTok',
      'Mengatur jadwal posting dan membalas komentar',
    ],
    skills: ['Kreatif & update tren', 'Percaya diri di kamera', 'Menulis caption', 'Konsisten'],
    tools: ['CapCut', 'Instagram', 'TikTok', 'Google Sheets'],
    fit: 'aktif di media sosial dan punya banyak ide seru untuk dibagikan.',
  },
  {
    name: 'Videografer & Fotografer',
    icon: 'camera',
    tagline: 'Merekam setiap momen jadi foto dan video berkualitas.',
    tasks: [
      'Liputan foto & video acara, seperti MusiComedy Night',
      'Shooting konten reels dan foto produk klien',
      'Editing video serta color grading foto',
      'Merapikan dan menyimpan file dokumentasi',
    ],
    skills: ['Komposisi & cahaya', 'Dasar editing', 'Sigap di lapangan', 'Teliti'],
    tools: ['Kamera / HP', 'Lightroom', 'Premiere Pro', 'CapCut'],
    fit: 'selalu ingin mengabadikan momen dan siap kerja di lapangan.',
  },
  {
    name: 'Marketing',
    icon: 'megaphone',
    tagline: 'Mengenalkan NEMPO dan klien ke lebih banyak orang.',
    tasks: [
      'Menyusun strategi promosi dan kampanye',
      'Mengelola iklan Instagram dan TikTok',
      'Menjalin kerja sama dengan brand & UMKM Garut',
      'Membaca insight dan membuat laporan hasil',
    ],
    skills: ['Komunikasi & negosiasi', 'Analisis data sederhana', 'Paham media sosial', 'Berorientasi target'],
    tools: ['Meta Ads', 'Instagram Insights', 'Google Sheets', 'WhatsApp Business'],
    fit: 'senang ngobrol dengan orang baru dan suka melihat angka naik.',
  },
  {
    name: 'Event Management',
    icon: 'calendar',
    tagline: 'Merancang dan menjalankan acara dari awal sampai selesai.',
    tasks: [
      'Menyusun konsep, rundown, dan anggaran acara',
      'Koordinasi pengisi acara, venue, dan vendor',
      'Mengatur registrasi dan tiket peserta',
      'Menjadi crew di hari-H, seperti MusiComedy Night',
    ],
    skills: ['Atur waktu', 'Kerja tim', 'Tenang saat genting', 'Problem solving'],
    tools: ['Google Sheets', 'Rundown', 'WhatsApp Grup', 'Canva'],
    fit: 'suka mengatur, cekatan, dan puas saat acara berjalan lancar.',
  },
];

export const DIVISION_SLIDES = KALA_MUDA_DIVISIONS.map((_, i) => DIVISION_FIRST_SLIDE + i);

/** The division shown on a Nempo Feed slide, or undefined when the slide is not a division slide. */
export function divisionForSlide(slide: number): KalaMudaDivision | undefined {
  return KALA_MUDA_DIVISIONS[slide - DIVISION_FIRST_SLIDE];
}
