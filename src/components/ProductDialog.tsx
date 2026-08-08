import { useState } from "react";
import { useShop } from "@/lib/shop-store";
import { getProduct, rupiah } from "@/lib/products";

export function ProductDialog() {
  const shop = useShop();
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const p = shop.detailId ? getProduct(shop.detailId) : null;
  if (!p) return null;

  const list = shop.reviews[p.id] || [];
  const close = () => shop.setDetailId(null);

  return (
    <div className="fixed inset-0 z-[65] grid place-items-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={close} />
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-card shadow-[var(--shadow-lux)]">
        <button
          onClick={close}
          aria-label="Tutup"
          className="absolute right-4 top-4 z-10 size-9 rounded-full border border-border bg-card"
        >
          ✕
        </button>
        <div className="grid md:grid-cols-2">
          <img src={p.image} alt={p.name} className="aspect-square w-full object-cover md:rounded-l-3xl" />
          <div className="space-y-3 p-7">
            <p className="eyebrow">{p.category}</p>
            <h2 className="font-display text-2xl">{p.name}</h2>
            <p className="text-xs text-muted-foreground">
              ★ {p.rating} · {p.sold.toLocaleString("id-ID")} terjual ·{" "}
              {p.stock > 0 ? `Stok ${p.stock}` : "Stok habis"}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold">{rupiah(p.price)}</span>
              {p.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">{rupiah(p.oldPrice)}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{p.description}</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {p.benefits.map((b) => (
                <li key={b}>✦ {b}</li>
              ))}
            </ul>
            <p className="rounded-2xl bg-secondary p-4 text-xs text-muted-foreground">
              <strong className="text-foreground">Cara pakai:</strong> {p.howTo}
            </p>
            <div className="flex gap-2 pt-1">
              <button
                disabled={p.stock <= 0}
                onClick={() => shop.add(p.id)}
                className="flex-1 rounded-full bg-foreground py-3 text-xs font-semibold uppercase tracking-widest text-background disabled:opacity-40"
              >
                Tambah ke Keranjang
              </button>
              <button
                onClick={() => shop.toggleWish(p.id)}
                className="rounded-full border border-border px-5 text-sm"
                aria-label="Wishlist"
              >
                {shop.wishlist.includes(p.id) ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border p-7">
          <h3 className="font-display text-xl">Ulasan Pembeli</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name || !form.text) return;
              shop.addReview(p.id, form);
              setForm({ name: "", rating: 5, text: "" });
              shop.notify("Terima kasih atas ulasannya ✓");
            }}
            className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]"
          >
            <input
              placeholder="Nama kamu"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <select
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
              className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {"★".repeat(r)}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Bagaimana pengalamanmu dengan produk ini?"
              rows={2}
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <button className="rounded-full bg-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-background md:col-span-2 md:justify-self-start">
              Kirim Ulasan
            </button>
          </form>

          <div className="mt-6 space-y-4">
            {list.length === 0 && (
              <p className="text-sm text-muted-foreground">Belum ada ulasan. Jadilah yang pertama!</p>
            )}
            {list.map((r, i) => (
              <div key={i} className="rounded-2xl bg-secondary p-4">
                <p className="text-sm font-medium">
                  {r.name} <span className="text-primary">{"★".repeat(r.rating)}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
