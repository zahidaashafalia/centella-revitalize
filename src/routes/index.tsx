import { createFileRoute, Link } from "@tanstack/react-router";
import { heroImage, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Centella Madagascar — Skincare Centella untuk Kulit Sensitif" },
      {
        name: "description",
        content:
          "Toko resmi skincare Centella Madagascar: toner, ampoule, sunscreen, dan cream penenang kulit. Belanja mudah lewat Shopee official.",
      },
      { property: "og:title", content: "Centella Madagascar — Skincare Centella" },
      {
        property: "og:description",
        content: "Rangkaian perawatan Centella Asiatica untuk kulit sensitif. Belanja online sekarang.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  const best = products.filter((p) => p.badge === "Best Seller");
  const promo = products.filter((p) => p.badge === "Promo");
  const others = products.filter((p) => !p.badge);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow">Madagascar Centella Collection</p>
          <h1 className="mt-3 font-display text-5xl leading-tight">
            Kulit Tenang,
            <br />
            Rona Bercahaya
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Rangkaian perawatan berbahan Centella Asiatica murni dari Madagascar — dirancang untuk
            menenangkan, memperkuat barrier, dan merawat kulit sensitif setiap hari.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/produk"
              className="rounded-full bg-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-background"
            >
              Belanja Sekarang
            </Link>
            <Link
              to="/kontak"
              className="rounded-full border border-border px-8 py-3.5 text-xs font-semibold uppercase tracking-widest"
            >
              Konsultasi Kulit
            </Link>
          </div>
          <div className="mt-10 flex gap-8 text-sm">
            {[
              ["4.9★", "Rating pembeli"],
              ["25rb+", "Produk terjual"],
              ["100%", "Original"],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="font-display text-2xl">{a}</p>
                <p className="text-xs text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={heroImage}
          alt="Koleksi skincare Centella Madagascar"
          className="w-full rounded-3xl object-cover shadow-[var(--shadow-lux)]"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-6 sm:grid-cols-3 md:px-8">
        {[
          ["Gratis Ongkir", "Untuk belanja di atas Rp 300.000"],
          ["Dermatologically Tested", "Aman untuk kulit sensitif"],
          ["Shopee Official Store", "Checkout aman di @skin1004official"],
        ].map(([t, d]) => (
          <div key={t} className="card-lux p-6">
            <p className="text-sm font-semibold">{t}</p>
            <p className="mt-1 text-xs text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Favorit Pelanggan</p>
            <h2 className="mt-2 font-display text-3xl">Best Seller Collection</h2>
          </div>
          <Link to="/produk" className="text-xs uppercase tracking-widest text-primary">
            Lihat semua →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <p className="eyebrow">Harga Spesial</p>
        <h2 className="mt-2 font-display text-3xl">Promo Bulan Ini</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promo.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <p className="eyebrow">Koleksi Lengkap</p>
        <h2 className="mt-2 font-display text-3xl">Produk Lainnya</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
