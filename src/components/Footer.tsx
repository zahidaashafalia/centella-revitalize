import { Link } from "@tanstack/react-router";
import { STORE } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produk">Produk</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Bantuan</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Cara Pemesanan</li>
            <li>Pengiriman &amp; Ongkir</li>
            <li>Garansi Produk Original</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`https://wa.me/${STORE.waNumber}`} target="_blank" rel="noreferrer">
                WhatsApp Admin
              </a>
            </li>
            <li>hello@centellamadagascar.id</li>
            <li>Senin–Sabtu, 09.00–18.00 WIB</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Centella Madagascar. Semua hak dilindungi.
      </p>
    </footer>
  );
}
