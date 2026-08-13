import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  HelpCircle,
  Instagram,
  Mail,
  MapPin,
  Music2,
  PackageSearch,
  Phone,
  ShoppingBag,
  Store,
  Truck,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { STORE } from "@/lib/products";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/produk", label: "Produk", icon: ShoppingBag },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
  { to: "/lacak", label: "Lacak Pesanan", icon: PackageSearch },
  { to: "/kontak", label: "Kontak", icon: Phone },
] as const;

const helpLinks = [
  { label: "Cara Pemesanan", icon: ClipboardList },
  { label: "Pengiriman & Ongkir", icon: Truck },
  { label: "Garansi Produk Original", icon: ShieldCheck },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 pt-14 md:px-8">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-foreground p-7 text-background md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Checkout Aman di Shopee Official</p>
            <p className="mt-1 text-sm opacity-80">
              Tiga langkah: pilih produk → salin ringkasan pesanan → selesaikan pembayaran di{" "}
              {STORE.shopee.handle}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-xs font-semibold uppercase tracking-widest"
            >
              <ShoppingBag className="size-4" /> Mulai Belanja
            </Link>
            <a
              href={STORE.shopee.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              <Store className="size-4" /> Shopee Official <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.18em]">CENTELLA</p>
          <p className="text-[9px] tracking-[0.4em] text-muted-foreground">MADAGASCAR</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Perawatan kulit berbasis Centella Asiatica untuk kulit sensitif — lembut, elegan, dan
            teruji dermatologi.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Navigasi</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 hover:text-primary">
                  <Icon className="size-4" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Bantuan</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {helpLinks.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4" /> {label}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Truck className="size-4" /> Estimasi reguler 2–4 hari kerja
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={STORE.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="size-4" /> Instagram {STORE.instagram.handle}
              </a>
            </li>
            <li>
              <a
                href={STORE.tiktok.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Music2 className="size-4" /> TikTok {STORE.tiktok.handle}
              </a>
            </li>
            <li>
              <a
                href={STORE.shopee.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Store className="size-4" /> Shopee {STORE.shopee.handle}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" /> {STORE.email}
            </li>
            <li className="flex gap-2 text-xs">
              <MapPin className="size-4 shrink-0" /> {STORE.address}
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Centella Madagascar. Semua hak dilindungi.
      </p>
    </footer>
  );
}
