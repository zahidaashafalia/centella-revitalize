import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Copy, ExternalLink, Package, Truck } from "lucide-react";
import { useShop } from "@/lib/shop-store";
import { rupiah, STORE, SHIPPING_STEPS } from "@/lib/products";

export const Route = createFileRoute("/konfirmasi")({
  component: KonfirmasiPage,
  validateSearch: (search: Record<string, unknown>) => ({
    kode: typeof search.kode === "string" ? search.kode : "",
  }),
  head: () => ({
    meta: [
      { title: "Konfirmasi Pesanan | Centella Madagascar" },
      {
        name: "description",
        content:
          "Halaman konfirmasi pesanan Centella Madagascar: kode pesanan, rincian belanja, estimasi pengiriman, dan langkah lanjut di Shopee Official.",
      },
      { property: "og:title", content: "Konfirmasi Pesanan Centella Madagascar" },
      {
        property: "og:description",
        content: "Cek kode pesanan, total belanja, dan estimasi pengirimanmu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function KonfirmasiPage() {
  const { kode } = Route.useSearch();
  const shop = useShop();
  const order = shop.findOrder(kode) ?? shop.orders[0];

  if (!order) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <h1 className="font-display text-3xl">Belum ada pesanan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Kode pesanan tidak ditemukan di perangkat ini. Silakan buat pesanan terlebih dahulu.
        </p>
        <Link
          to="/produk"
          className="mt-6 inline-block rounded-full bg-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-background"
        >
          Mulai belanja
        </Link>
      </main>
    );
  }

  const eta = new Date(order.createdAt + 4 * 86400000).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 md:px-8">
      <div className="card-lux p-7 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h1 className="mt-3 font-display text-3xl">Pesanan Dikonfirmasi</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Terima kasih{order.name ? `, ${order.name}` : ""}! Simpan kode pesanan di bawah untuk
          melacak status dan konfirmasi di Shopee Official.
        </p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-dashed border-border px-5 py-2.5">
          <span className="font-mono text-sm tracking-widest">{order.code}</span>
          <button
            aria-label="Salin kode pesanan"
            onClick={() => {
              navigator.clipboard?.writeText(order.code).catch(() => {});
              shop.notify("Kode pesanan disalin");
            }}
            className="text-muted-foreground hover:text-primary"
          >
            <Copy className="size-4" />
          </button>
        </div>
      </div>

      <section className="card-lux mt-6 p-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Rincian Pesanan
        </h2>
        <div className="mt-4 space-y-3">
          {order.items.map((it) => (
            <div key={it.id} className="flex justify-between text-sm">
              <span>
                {it.name} <span className="text-muted-foreground">×{it.qty}</span>
              </span>
              <span className="font-medium">{rupiah(it.price * it.qty)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>{rupiah(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Ongkir — {order.method}</span>
            <span>{order.shipping === 0 ? "Gratis" : rupiah(order.shipping)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total Belanja</span>
            <span className="text-primary">{rupiah(order.total)}</span>
          </div>
        </div>
      </section>

      <section className="card-lux mt-6 p-6">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Truck className="size-4" /> Estimasi Pengiriman
        </h2>
        <p className="mt-3 text-sm">
          {order.method} · estimasi tiba <strong>{order.eta}</strong> (perkiraan sampai{" "}
          <strong>{eta}</strong>).
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Waktu proses: {STORE.processing}</p>
        <ol className="mt-5 space-y-4">
          {SHIPPING_STEPS.map((s, i) => (
            <li key={s.key} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-foreground text-[11px] font-bold text-background">
                {i + 1}
              </span>
              <span>
                <span className="block text-sm font-medium">{s.label}</span>
                <span className="block text-xs text-muted-foreground">{s.desc}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="card-lux mt-6 p-6">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Package className="size-4" /> Langkah Selanjutnya
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Selesaikan pembayaran di Shopee Official {STORE.shopee.handle}, lalu tempelkan kode pesanan
          ini di chat agar tim kami mencocokkan stok dan promo.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={STORE.shopee.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-xs font-semibold uppercase tracking-widest text-background"
          >
            Buka Shopee Official <ExternalLink className="size-3.5" />
          </a>
          <Link
            to="/lacak"
            search={{ kode: order.code }}
            className="rounded-full border border-border px-7 py-3 text-xs font-semibold uppercase tracking-widest"
          >
            Lacak Pesanan
          </Link>
        </div>
      </section>
    </main>
  );
}
