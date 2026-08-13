import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Circle, PackageSearch } from "lucide-react";
import { useShop } from "@/lib/shop-store";
import { rupiah, STORE, SHIPPING_STEPS } from "@/lib/products";

export const Route = createFileRoute("/lacak")({
  component: LacakPage,
  validateSearch: (search: Record<string, unknown>) => ({
    kode: typeof search["kode"] === "string" ? (search["kode"] as string) : "",
  }),
  head: () => ({
    meta: [
      { title: "Lacak Pesanan | Centella Madagascar" },
      {
        name: "description",
        content:
          "Lacak status pesanan Centella Madagascar dengan kode pesanan: dikonfirmasi, dikemas, dikirim, hingga sampai tujuan.",
      },
      { property: "og:title", content: "Lacak Pesanan Centella Madagascar" },
      {
        property: "og:description",
        content: "Masukkan kode pesanan untuk melihat status dan estimasi pengiriman.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function LacakPage() {
  const { kode } = Route.useSearch();
  const shop = useShop();
  const [input, setInput] = useState(kode);
  const [query, setQuery] = useState(kode);

  const order = query ? shop.findOrder(query) : undefined;
  const hoursPassed = order ? (Date.now() - order.createdAt) / 3600000 : 0;
  const current = order ? Math.min(SHIPPING_STEPS.length - 1, Math.floor(hoursPassed / 24)) : 0;

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 md:px-8">
      <p className="eyebrow">Layanan Pelanggan</p>
      <h1 className="mt-2 font-display text-4xl">Lacak Pesanan</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Masukkan kode pesanan (contoh: CM-260813-A1B2) yang kamu terima di halaman konfirmasi.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(input);
        }}
        className="mt-7 flex flex-col gap-3 sm:flex-row"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Kode pesanan"
          className="flex-1 rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:border-primary"
        />
        <button className="rounded-full bg-foreground px-8 py-3 text-xs font-semibold uppercase tracking-widest text-background">
          Lacak
        </button>
      </form>

      {query && !order && (
        <div className="card-lux mt-8 p-8 text-center">
          <PackageSearch className="mx-auto size-10 text-muted-foreground" />
          <p className="mt-3 text-sm">
            Pesanan dengan kode <strong>{query}</strong> tidak ditemukan di perangkat ini.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Untuk pesanan yang sudah dibayar, cek status resmi di Shopee Official {STORE.shopee.handle}.
          </p>
        </div>
      )}

      {order && (
        <section className="card-lux mt-8 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-sm tracking-widest">{order.code}</p>
              <p className="text-xs text-muted-foreground">
                Dibuat{" "}
                {new Date(order.createdAt).toLocaleString("id-ID", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </p>
            </div>
            <p className="font-display text-xl text-primary">{rupiah(order.total)}</p>
          </div>

          <div className="mt-5 rounded-2xl bg-secondary p-4 text-sm">
            {order.method} · estimasi tiba <strong>{order.eta}</strong>
            <p className="mt-1 text-xs text-muted-foreground">Waktu proses: {STORE.processing}</p>
          </div>

          <ol className="mt-6 space-y-5">
            {SHIPPING_STEPS.map((s, i) => {
              const done = i <= current;
              return (
                <li key={s.key} className="flex gap-3">
                  {done ? (
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  ) : (
                    <Circle className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" />
                  )}
                  <span>
                    <span
                      className={`block text-sm font-medium ${done ? "" : "text-muted-foreground"}`}
                    >
                      {s.label}
                    </span>
                    <span className="block text-xs text-muted-foreground">{s.desc}</span>
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="mt-6 space-y-2 border-t border-border pt-4">
            {order.items.map((it) => (
              <div key={it.id} className="flex justify-between text-sm">
                <span>
                  {it.name} <span className="text-muted-foreground">×{it.qty}</span>
                </span>
                <span>{rupiah(it.price * it.qty)}</span>
              </div>
            ))}
          </div>

          <a
            href={STORE.shopee.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-foreground px-7 py-3 text-xs font-semibold uppercase tracking-widest text-background"
          >
            Cek status di Shopee Official
          </a>
        </section>
      )}

      {!query && shop.orders.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Pesanan Terakhir
          </h2>
          <ul className="mt-3 space-y-2">
            {shop.orders.slice(0, 5).map((o) => (
              <li key={o.code}>
                <Link
                  to="/lacak"
                  search={{ kode: o.code }}
                  onClick={() => {
                    setInput(o.code);
                    setQuery(o.code);
                  }}
                  className="flex justify-between rounded-2xl border border-border px-5 py-3 text-sm hover:border-primary"
                >
                  <span className="font-mono text-xs tracking-widest">{o.code}</span>
                  <span>{rupiah(o.total)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
