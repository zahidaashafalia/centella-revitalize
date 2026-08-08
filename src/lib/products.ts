import ampoule from "@/assets/ampoule.jpg.asset.json";
import suncream from "@/assets/suncream.jpg.asset.json";
import toner from "@/assets/toner.jpg.asset.json";
import cleansingOil from "@/assets/cleansing-oil.jpg.asset.json";
import soothingCream from "@/assets/soothing-cream.jpg.asset.json";
import ampouleFoam from "@/assets/ampoule-foam.jpg.asset.json";
import calmingPad from "@/assets/calming-pad.jpg.asset.json";
import cream from "@/assets/cream.jpg.asset.json";
import hero from "@/assets/hero.jpg.asset.json";

export const heroImage = hero.url;

export type Product = {
  id: string;
  name: string;
  category: string;
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

export const products: Product[] = [
  {
    id: "ampoule",
    name: "Centella Tone Brightening Capsule Ampoule",
    category: "Ampoule",
    price: 269000,
    oldPrice: 299000,
    rating: 4.9,
    sold: 3200,
    stock: 12,
    badge: "Best Seller",
    image: ampoule.url,
    description:
      "Ampoule dengan konsentrasi tinggi Centella Madagascar untuk membantu menenangkan kulit, menyamarkan kemerahan, dan menjaga skin barrier tetap kuat.",
    benefits: [
      "Membantu meratakan tone kulit",
      "Menenangkan kemerahan dan iritasi ringan",
      "Tekstur ringan, cepat meresap",
    ],
    howTo: "Gunakan 2–3 tetes setelah toner, pagi dan malam.",
  },
  {
    id: "suncream",
    name: "Centella Suncream SPF 50+",
    category: "Sunscreen",
    price: 163000,
    rating: 4.9,
    sold: 5400,
    stock: 20,
    badge: "Best Seller",
    image: suncream.url,
    description:
      "Perlindungan maksimal dari sinar UV tanpa white cast, nyaman digunakan setiap hari dan aman untuk kulit sensitif.",
    benefits: [
      "SPF 50+ PA++++ tanpa white cast",
      "Finish ringan, cocok sebagai base makeup",
      "Tidak perih di mata",
    ],
    howTo: "Aplikasikan 2 jari sebagai langkah terakhir skincare pagi, ulangi tiap 3 jam.",
  },
  {
    id: "toner",
    name: "Centella Probio-Cica Essence Toner",
    category: "Toner",
    price: 149000,
    oldPrice: 169000,
    rating: 4.8,
    sold: 4100,
    stock: 18,
    badge: "Promo",
    image: toner.url,
    description:
      "Menghidrasi kulit secara intens dengan hyaluronic acid dan ekstrak centella serta memperkuat skin barrier sehingga kulit lebih tahan terhadap iritasi.",
    benefits: [
      "Hidrasi mendalam berlapis",
      "Menyeimbangkan mikrobioma kulit",
      "Menyiapkan kulit menyerap serum",
    ],
    howTo: "Tuang ke telapak tangan, tepuk lembut ke wajah setelah cuci muka.",
  },
  {
    id: "cleansing-oil",
    name: "Centella Light Cleansing Oil",
    category: "Cleanser",
    price: 240000,
    rating: 4.7,
    sold: 1800,
    stock: 9,
    image: cleansingOil.url,
    description:
      "Membersihkan makeup dan kotoran secara menyeluruh tanpa membuat kulit kering serta menjaga kelembapan alami kulit.",
    benefits: [
      "Melarutkan sunscreen dan makeup tahan lama",
      "Tidak meninggalkan rasa berminyak",
      "Emulsi cepat, mudah dibilas",
    ],
    howTo: "Pijat pada wajah kering, tambahkan air hingga mengemulsi, lalu bilas.",
  },
  {
    id: "soothing-cream",
    name: "Centella Soothing Cream",
    category: "Moisturizer",
    price: 140000,
    rating: 4.8,
    sold: 2600,
    stock: 15,
    image: soothingCream.url,
    description:
      "Melembapkan dan menenangkan kulit, mengunci hidrasi agar kulit terasa lembut dan nyaman sepanjang hari.",
    benefits: [
      "Tekstur gel-cream ringan",
      "Menenangkan kulit setelah beraktivitas",
      "Cocok untuk kulit berminyak",
    ],
    howTo: "Gunakan pagi dan malam setelah serum.",
  },
  {
    id: "ampoule-foam",
    name: "Centella Ampoule Foam",
    category: "Cleanser",
    price: 125000,
    oldPrice: 139000,
    rating: 4.7,
    sold: 3100,
    stock: 22,
    badge: "Promo",
    image: ampouleFoam.url,
    description:
      "Membersihkan pori-pori secara lembut, mengangkat sisa minyak dan debu, serta menyiapkan kulit untuk toner dan serum.",
    benefits: [
      "pH seimbang, kulit tidak terasa ketarik",
      "Busa lembut dan padat",
      "Aman untuk pemakaian harian",
    ],
    howTo: "Busakan secukupnya, pijat 30 detik, bilas dengan air bersih.",
  },
  {
    id: "calming-pad",
    name: "Centella Quick Calming Pad",
    category: "Treatment",
    price: 159000,
    rating: 4.8,
    sold: 2200,
    stock: 0,
    image: calmingPad.url,
    description:
      "Menenangkan kulit sensitif secara cepat dan instan serta memberi sensasi sejuk sekaligus mengurangi kemerahan.",
    benefits: [
      "Efek dingin menenangkan instan",
      "Praktis dibawa bepergian",
      "Bisa dipakai sebagai masker kilat",
    ],
    howTo: "Tempelkan pada area kemerahan selama 3–5 menit.",
  },
  {
    id: "cream",
    name: "Centella Cream",
    category: "Moisturizer",
    price: 140000,
    rating: 4.9,
    sold: 4700,
    stock: 16,
    badge: "Best Seller",
    image: cream.url,
    description:
      "Melembapkan lebih dalam dan memperbaiki skin barrier serta meredakan tanda kulit stres, kering, atau kemerahan.",
    benefits: [
      "Barrier repair intensif",
      "Nyaman untuk kulit kering",
      "Bisa dipakai sebagai sleeping mask",
    ],
    howTo: "Oleskan tipis merata sebagai langkah terakhir malam hari.",
  },
];

export const STORE = {
  waNumber: "6281234567890",
  shipping: 22000,
  freeShippingMin: 300000,
};

export const rupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");
export const getProduct = (id: string) => products.find((p) => p.id === id);
