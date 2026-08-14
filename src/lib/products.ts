import ampoule from "@/assets/ampoule.jpg.asset.json";
import suncream from "@/assets/suncream.jpg.asset.json";
import toner from "@/assets/toner.jpg.asset.json";
import soothingCream from "@/assets/soothing-cream.jpg.asset.json";
import ampouleFoam from "@/assets/ampoule-foam.jpg.asset.json";
import calmingPad from "@/assets/calming-pad.jpg.asset.json";
import cream from "@/assets/cream.jpg.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import lightCleansingOil from "@/assets/light-cleansing-oil.jpg.asset.json";
import toningToner from "@/assets/toning-toner.jpg.asset.json";
import centellaAmpoule from "@/assets/centella-ampoule.jpg.asset.json";
import soothingCreamOfficial from "@/assets/soothing-cream-official.jpg.asset.json";
import capsuleAmpoule from "@/assets/capsule-ampoule.jpg.asset.json";
import capsuleCream from "@/assets/capsule-cream.jpg.asset.json";
import boostingToner from "@/assets/boosting-toner.jpg.asset.json";
import sunSerum from "@/assets/sun-serum.jpg.asset.json";
import firstAmpoule from "@/assets/first-ampoule.jpg.asset.json";
import moistureCream from "@/assets/moisture-cream.jpg.asset.json";

export const heroImage = hero.url;

export type SeriesKey = "hijau" | "kuning" | "biru" | "coklat" | "pink" | "silver";

export type Series = {
  key: SeriesKey;
  emoji: string;
  name: string;
  tagline: string;
  swatch: string;
  ingredients: string[];
  benefits: string[];
};

export const SERIES: Series[] = [
  {
    key: "hijau",
    emoji: "🌿",
    name: "Madagascar Centella",
    tagline: "Seri paling basic dan terlaris — menenangkan kulit sensitif.",
    swatch: "#4f7d4a",
    ingredients: ["Centella Asiatica Madagascar"],
    benefits: [
      "Menenangkan kemerahan",
      "Memperbaiki skin barrier",
      "Mengurangi iritasi",
      "Cocok untuk kulit sensitif",
    ],
  },
  {
    key: "kuning",
    emoji: "✨",
    name: "Tone Brightening",
    tagline: "Mencerahkan dan meratakan warna kulit.",
    swatch: "#d9a441",
    ingredients: ["Niacinamide", "Tranexamic Acid", "Vitamin C Derivative", "Centella"],
    benefits: [
      "Mencerahkan kulit",
      "Memudarkan bekas jerawat",
      "Mengurangi kusam",
      "Meratakan warna kulit",
    ],
  },
  {
    key: "biru",
    emoji: "💧",
    name: "Hyalu-Cica",
    tagline: "Hidrasi intens untuk kulit kering dan dehidrasi.",
    swatch: "#5b9bd5",
    ingredients: ["Hyaluronic Acid", "Centella", "Ceramide"],
    benefits: [
      "Hidrasi intens",
      "Mengatasi kulit kering",
      "Membuat kulit plump",
      "Menjaga kelembapan",
    ],
  },
  {
    key: "coklat",
    emoji: "🤎",
    name: "Tea-Trica",
    tagline: "Perawatan jerawat dan kulit berminyak.",
    swatch: "#8a6242",
    ingredients: ["Tea Tree", "Pine Tree Complex", "Cica"],
    benefits: [
      "Mengatasi jerawat",
      "Mengurangi minyak",
      "Menenangkan breakout",
      "Mengurangi kemerahan",
    ],
  },
  {
    key: "pink",
    emoji: "🩷",
    name: "Probio-Cica",
    tagline: "Barrier repair dan perawatan anti-aging.",
    swatch: "#d98ba6",
    ingredients: ["Fermented Centella", "Ceramide", "Probiotics", "TECA"],
    benefits: [
      "Barrier repair",
      "Anti-aging",
      "Mengurangi kulit kering",
      "Menghaluskan tekstur",
    ],
  },
  {
    key: "silver",
    emoji: "⚪",
    name: "Poremizing",
    tagline: "Merawat pori dan mengontrol minyak berlebih.",
    swatch: "#9aa0a6",
    ingredients: ["Himalayan Pink Salt", "Peptide"],
    benefits: [
      "Mengecilkan tampilan pori",
      "Mengontrol minyak",
      "Membersihkan komedo",
      "Menghaluskan kulit",
    ],
  },
];

export const getSeries = (key: SeriesKey) => SERIES.find((s) => s.key === key)!;

export type Product = {
  id: string;
  name: string;
  category: string;
  series: SeriesKey;
  price: number;
  oldPrice?: number;
  rating: number;
  sold: number;
  stock: number;
  badge?: string;
  image: string;
  description: string;
  benefits: string[];
  howTo: string;
};

type Draft = Omit<Product, "description" | "benefits" | "howTo"> & {
  description?: string;
  benefits?: string[];
  howTo?: string;
};

const drafts: Draft[] = [
  // ── Hijau · Madagascar Centella ──────────────────────────────
  {
    id: "light-cleansing-oil",
    name: "Madagascar Centella Light Cleansing Oil",
    category: "Cleansing",
    series: "hijau",
    price: 240000,
    rating: 4.7,
    sold: 1800,
    stock: 14,
    badge: "Best Seller",
    image: lightCleansingOil.url,
    description:
      "Membersihkan makeup dan sunscreen tahan lama tanpa membuat kulit kering, dengan tekstur ringan yang mudah diemulsi.",
    howTo: "Pijat pada wajah kering, tambahkan air hingga mengemulsi, lalu bilas.",
  },
  {
    id: "ampoule-foam",
    name: "Madagascar Centella Ampoule Foam",
    category: "Cleansing",
    series: "hijau",
    price: 125000,
    oldPrice: 139000,
    rating: 4.7,
    sold: 3100,
    stock: 22,
    badge: "Promo",
    image: ampouleFoam.url,
    howTo: "Busakan secukupnya, pijat 30 detik, bilas dengan air bersih.",
  },
  {
    id: "toning-toner",
    name: "Madagascar Centella Toning Toner",
    category: "Toner",
    series: "hijau",
    price: 149000,
    oldPrice: 169000,
    rating: 4.8,
    sold: 4100,
    stock: 18,
    badge: "Promo",
    image: toningToner.url,
  },
  {
    id: "quick-calming-pad",
    name: "Madagascar Centella Quick Calming Pad",
    category: "Pad",
    series: "hijau",
    price: 159000,
    rating: 4.8,
    sold: 2200,
    stock: 0,
    image: calmingPad.url,
    howTo: "Tempelkan pada area kemerahan selama 3–5 menit.",
  },
  {
    id: "centella-ampoule",
    name: "Madagascar Centella Ampoule",
    category: "Ampoule",
    series: "hijau",
    price: 219000,
    rating: 4.9,
    sold: 6200,
    stock: 20,
    badge: "Best Seller",
    image: centellaAmpoule.url,
    howTo: "Gunakan 2–3 tetes setelah toner, pagi dan malam.",
  },
  {
    id: "soothing-cream",
    name: "Madagascar Centella Soothing Cream",
    category: "Cream",
    series: "hijau",
    price: 140000,
    rating: 4.8,
    sold: 2600,
    stock: 15,
    image: soothingCreamOfficial.url,
    howTo: "Gunakan pagi dan malam setelah serum.",
  },
  {
    id: "air-fit-suncream-light",
    name: "Madagascar Centella Air-Fit Suncream Light",
    category: "Sunscreen",
    series: "hijau",
    price: 163000,
    rating: 4.9,
    sold: 5400,
    stock: 24,
    image: suncream.url,
    howTo: "Aplikasikan 2 jari sebagai langkah terakhir skincare pagi, ulangi tiap 3 jam.",
  },
  {
    id: "air-fit-suncream-plus",
    name: "Madagascar Centella Air-Fit Suncream Plus",
    category: "Sunscreen",
    series: "hijau",
    price: 175000,
    rating: 4.8,
    sold: 2100,
    stock: 16,
    image: suncream.url,
  },
  {
    id: "centella-sheet-mask",
    name: "Madagascar Centella Sheet Mask",
    category: "Mask",
    series: "hijau",
    price: 29000,
    rating: 4.7,
    sold: 3800,
    stock: 40,
    image: calmingPad.url,
    howTo: "Tempelkan 15–20 menit, lalu tepuk sisa essence hingga meresap.",
  },
  {
    id: "centella-travel-kit",
    name: "Madagascar Centella Travel Kit",
    category: "Travel Kit",
    series: "hijau",
    price: 175000,
    oldPrice: 199000,
    rating: 4.8,
    sold: 1400,
    stock: 12,
    badge: "Promo",
    image: lightCleansingOil.url,
    description:
      "Paket ukuran travel berisi rangkaian dasar seri Centella — praktis dibawa bepergian atau untuk mencoba rutinitas lengkap.",
  },

  // ── Kuning · Tone Brightening ────────────────────────────────
  {
    id: "tb-cleansing-gel-foam",
    name: "Tone Brightening Cleansing Gel Foam",
    category: "Cleansing",
    series: "kuning",
    price: 129000,
    rating: 4.7,
    sold: 1500,
    stock: 20,
    image: ampouleFoam.url,
    howTo: "Busakan, pijat lembut 30 detik, lalu bilas.",
  },
  {
    id: "tb-boosting-toner",
    name: "Tone Brightening Boosting Toner",
    category: "Toner",
    series: "kuning",
    price: 189000,
    rating: 4.8,
    sold: 2400,
    stock: 18,
    image: boostingToner.url,
  },
  {
    id: "tb-capsule-ampoule",
    name: "Tone Brightening Capsule Ampoule",
    category: "Ampoule",
    series: "kuning",
    price: 269000,
    oldPrice: 299000,
    rating: 4.9,
    sold: 3200,
    stock: 12,
    badge: "Best Seller",
    image: capsuleAmpoule.url,
    howTo: "Gunakan 2–3 tetes setelah toner, pagi dan malam.",
  },
  {
    id: "tb-capsule-cream",
    name: "Tone Brightening Capsule Cream",
    category: "Cream",
    series: "kuning",
    price: 229000,
    rating: 4.8,
    sold: 1900,
    stock: 14,
    image: capsuleCream.url,
  },
  {
    id: "tb-brightening-pad",
    name: "Tone Brightening Pad",
    category: "Pad",
    series: "kuning",
    price: 169000,
    rating: 4.7,
    sold: 1200,
    stock: 10,
    image: calmingPad.url,
  },
  {
    id: "tb-tone-up-sunscreen",
    name: "Tone Brightening Tone-Up Sunscreen",
    category: "Sunscreen",
    series: "kuning",
    price: 169000,
    rating: 4.7,
    sold: 1700,
    stock: 15,
    image: suncream.url,
  },

  // ── Biru · Hyalu-Cica ────────────────────────────────────────
  {
    id: "hc-cleansing-foam",
    name: "Hyalu-Cica Cleansing Foam",
    category: "Cleansing",
    series: "biru",
    price: 119000,
    rating: 4.7,
    sold: 1300,
    stock: 20,
    image: ampouleFoam.url,
  },
  {
    id: "hc-toner",
    name: "Hyalu-Cica Toner",
    category: "Toner",
    series: "biru",
    price: 155000,
    rating: 4.8,
    sold: 2000,
    stock: 18,
    image: toner.url,
  },
  {
    id: "hc-first-ampoule",
    name: "Hyalu-Cica First Ampoule",
    category: "Ampoule",
    series: "biru",
    price: 239000,
    rating: 4.9,
    sold: 2800,
    stock: 16,
    image: firstAmpoule.url,
    howTo: "Gunakan sebagai langkah pertama setelah cuci muka, tepuk hingga meresap.",
  },
  {
    id: "hc-serum",
    name: "Hyalu-Cica Serum",
    category: "Ampoule",
    series: "biru",
    price: 199000,
    rating: 4.7,
    sold: 1100,
    stock: 12,
    image: firstAmpoule.url,
  },
  {
    id: "hc-moisture-cream",
    name: "Hyalu-Cica Moisture Cream",
    category: "Cream",
    series: "biru",
    price: 165000,
    rating: 4.8,
    sold: 2300,
    stock: 17,
    image: moistureCream.url,
  },
  {
    id: "hc-water-fit-sun-serum",
    name: "Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
    category: "Sunscreen",
    series: "biru",
    price: 163000,
    rating: 4.9,
    sold: 5400,
    stock: 20,
    badge: "Best Seller",
    image: sunSerum.url,
    description:
      "Sunscreen bertekstur serum ringan tanpa white cast, nyaman dipakai harian dan aman untuk kulit sensitif.",
    howTo: "Aplikasikan 2 jari sebagai langkah terakhir skincare pagi, ulangi tiap 3 jam.",
  },
  {
    id: "hc-sun-stick",
    name: "Hyalu-Cica Sun Stick",
    category: "Sunscreen",
    series: "biru",
    price: 149000,
    rating: 4.8,
    sold: 2600,
    stock: 0,
    image: sunSerum.url,
    howTo: "Usapkan merata pada wajah, cocok untuk reapply saat bepergian.",
  },
  {
    id: "hc-sleeping-pack",
    name: "Hyalu-Cica Sleeping Pack",
    category: "Mask",
    series: "biru",
    price: 179000,
    rating: 4.8,
    sold: 1600,
    stock: 13,
    image: cream.url,
    howTo: "Oleskan tipis sebagai langkah terakhir malam hari, bilas keesokan pagi.",
  },
  {
    id: "hc-travel-kit",
    name: "Hyalu-Cica Travel Kit",
    category: "Travel Kit",
    series: "biru",
    price: 169000,
    rating: 4.7,
    sold: 900,
    stock: 11,
    image: firstAmpoule.url,
  },

  // ── Coklat · Tea-Trica ───────────────────────────────────────
  {
    id: "tt-bha-foam",
    name: "Tea-Trica BHA Foam",
    category: "Cleansing",
    series: "coklat",
    price: 119000,
    rating: 4.7,
    sold: 1700,
    stock: 21,
    image: ampouleFoam.url,
  },
  {
    id: "tt-purifying-toner",
    name: "Tea-Trica Purifying Toner",
    category: "Toner",
    series: "coklat",
    price: 149000,
    rating: 4.7,
    sold: 1500,
    stock: 18,
    image: toner.url,
  },
  {
    id: "tt-relief-ampoule",
    name: "Tea-Trica Relief Ampoule",
    category: "Ampoule",
    series: "coklat",
    price: 209000,
    rating: 4.8,
    sold: 1900,
    stock: 14,
    image: ampoule.url,
  },
  {
    id: "tt-spot-cream",
    name: "Tea-Trica Spot Cream",
    category: "Cream",
    series: "coklat",
    price: 99000,
    rating: 4.7,
    sold: 2100,
    stock: 25,
    image: cream.url,
    howTo: "Oleskan tipis pada area breakout sebelum pelembap.",
  },
  {
    id: "tt-blemish-patch",
    name: "Tea-Trica Blemish Patch",
    category: "Patch",
    series: "coklat",
    price: 59000,
    rating: 4.8,
    sold: 4300,
    stock: 35,
    image: calmingPad.url,
    howTo: "Tempelkan pada jerawat di kulit bersih, biarkan semalaman.",
  },
  {
    id: "tt-travel-kit",
    name: "Tea-Trica Travel Kit",
    category: "Travel Kit",
    series: "coklat",
    price: 165000,
    rating: 4.6,
    sold: 700,
    stock: 9,
    image: ampoule.url,
  },

  // ── Pink · Probio-Cica ───────────────────────────────────────
  {
    id: "pc-essence-toner",
    name: "Probio-Cica Essence Toner",
    category: "Toner",
    series: "pink",
    price: 149000,
    rating: 4.8,
    sold: 2400,
    stock: 18,
    image: toner.url,
  },
  {
    id: "pc-intensive-ampoule",
    name: "Probio-Cica Intensive Ampoule",
    category: "Ampoule",
    series: "pink",
    price: 249000,
    rating: 4.9,
    sold: 2700,
    stock: 13,
    badge: "Best Seller",
    image: ampoule.url,
  },
  {
    id: "pc-enrich-cream",
    name: "Probio-Cica Enrich Cream",
    category: "Cream",
    series: "pink",
    price: 189000,
    rating: 4.8,
    sold: 1500,
    stock: 15,
    image: soothingCream.url,
  },
  {
    id: "pc-bakuchiol-eye-cream",
    name: "Probio-Cica Bakuchiol Eye Cream",
    category: "Eye Care",
    series: "pink",
    price: 199000,
    rating: 4.7,
    sold: 1100,
    stock: 12,
    image: cream.url,
    howTo: "Tepuk lembut di area sekitar mata pagi dan malam.",
  },
  {
    id: "pc-travel-kit",
    name: "Probio-Cica Travel Kit",
    category: "Travel Kit",
    series: "pink",
    price: 169000,
    rating: 4.7,
    sold: 800,
    stock: 10,
    image: toner.url,
  },

  // ── Silver · Poremizing ──────────────────────────────────────
  {
    id: "pm-deep-cleansing-foam",
    name: "Poremizing Deep Cleansing Foam",
    category: "Cleansing",
    series: "silver",
    price: 125000,
    rating: 4.7,
    sold: 1600,
    stock: 22,
    image: ampouleFoam.url,
  },
  {
    id: "pm-fresh-ampoule",
    name: "Poremizing Fresh Ampoule",
    category: "Ampoule",
    series: "silver",
    price: 219000,
    rating: 4.8,
    sold: 2300,
    stock: 14,
    badge: "Best Seller",
    image: ampoule.url,
  },
  {
    id: "pm-light-gel-cream",
    name: "Poremizing Light Gel Cream",
    category: "Cream",
    series: "silver",
    price: 159000,
    rating: 4.7,
    sold: 1400,
    stock: 16,
    image: cream.url,
  },
  {
    id: "pm-clay-stick-mask",
    name: "Poremizing Clay Stick Mask",
    category: "Mask",
    series: "silver",
    price: 139000,
    rating: 4.7,
    sold: 1900,
    stock: 18,
    image: calmingPad.url,
    howTo: "Usapkan pada area T-zone, diamkan 10 menit, lalu bilas.",
  },
  {
    id: "pm-ampoule-mask",
    name: "Poremizing Ampoule Mask",
    category: "Mask",
    series: "silver",
    price: 25000,
    rating: 4.6,
    sold: 2600,
    stock: 45,
    image: calmingPad.url,
  },
];

export const products: Product[] = drafts.map((d) => {
  const s = getSeries(d.series);
  return {
    ...d,
    description:
      d.description ??
      `${d.name} dari seri ${s.emoji} ${s.name} SKIN1004 dengan kandungan ${s.ingredients.join(", ")} — dirancang untuk ${s.benefits[0]!.toLowerCase()} dan merawat kulit setiap hari.`,
    benefits: d.benefits ?? s.benefits,
    howTo: d.howTo ?? "Gunakan sesuai urutan rutinitas skincare, pagi dan/atau malam hari.",
  };
});

export const CATEGORIES = Array.from(new Set(products.map((p) => p.category)));

export const STORE = {
  instagram: { handle: "@skin1004_indonesia", url: "https://www.instagram.com/skin1004_indonesia/" },
  tiktok: { handle: "@skin1004_indonesia", url: "https://www.tiktok.com/@skin1004_indonesia" },
  shopee: { handle: "@skin1004official", url: "https://shopee.co.id/skin1004official" },
  email: "hello@centellamadagascar.id",
  address:
    "Lantai 11 & 12, Gangnam N Tower, 129 Teheran-ro, Gangnam-gu, Seoul, Republik Korea (Kode Pos: 06133)",
  shipping: 22000,
  freeShippingMin: 300000,
  processing: "1×24 jam kerja (pesanan sebelum 15.00 WIB diproses hari yang sama)",
  shippingOptions: [
    {
      name: "Reguler (JNE / J&T)",
      eta: "2–4 hari kerja",
      cost: 22000,
      note: "Gratis untuk belanja di atas Rp 300.000",
    },
    { name: "Kargo Hemat", eta: "5–8 hari kerja", cost: 15000, note: "Cocok untuk luar Jawa" },
    { name: "Instant / Same Day", eta: "3–8 jam", cost: 35000, note: "Khusus Jabodetabek" },
  ],
};

export const SHIPPING_STEPS = [
  { key: "confirm", label: "Pesanan dikonfirmasi", desc: "Ringkasan diterima & stok dicek" },
  { key: "packed", label: "Dikemas", desc: "Produk disiapkan di gudang resmi" },
  { key: "shipped", label: "Dikirim kurir", desc: "Nomor resi aktif di Shopee" },
  { key: "delivered", label: "Sampai tujuan", desc: "Estimasi 2–4 hari kerja" },
] as const;

export const rupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");
export const getProduct = (id: string) => products.find((p) => p.id === id);
