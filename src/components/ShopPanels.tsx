import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useShop } from "@/lib/shop-store";
import { getProduct, rupiah, STORE } from "@/lib/products";

function Overlay({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      {children}
    </div>
  );
}

export function CartDrawer() {
  const shop = useShop();
  if (shop.panel !== "cart") return null;

  return (
    <Overlay onClose={() => shop.setPanel(null)}>
      <aside className="relative flex h-full w-full max-w-md flex-col bg-card shadow-[var(--shadow-lux)]">
        <PanelHead title="Keranjang" onClose={() => shop.setPanel(null)} />
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          {shop.lines.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Keranjang masih kosong.
            </p>
          )}
          {shop.lines.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 border-b border-border pb-4">
              <img src={product.image} alt={product.name} className="size-20 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="mt-1 text-sm text-primary">{rupiah(product.price)}</p>
                <div className="mt-2 flex items-center gap-3">
                  <button onClick={() => shop.setQty(product.id, -1)} className="size-7 rounded-full border border-border">−</button>
                  <span className="text-sm">{qty}</span>
                  <button onClick={() => shop.setQty(product.id, 1)} className="size-7 rounded-full border border-border">+</button>
                  <button
                    onClick={() => shop.remove(product.id)}
                    className="ml-auto text-xs text-muted-foreground underline"
                  >
                    Hapus
                  </button>
                </div>
                {product.stock <= 0 ? (
                  <p className="mt-2 text-xs font-medium text-destructive">
                    Stok habis — hapus produk ini untuk melanjutkan checkout.
                  </p>
                ) : qty > product.stock ? (
                  <p className="mt-2 text-xs font-medium text-destructive">
                    Sisa stok hanya {product.stock}. Kurangi jumlah pesanan.
                  </p>
                ) : product.stock <= 5 ? (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Stok tersisa {product.stock} — segera checkout.
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 border-t border-border px-6 py-5">
          <Row label="Subtotal" value={rupiah(shop.subtotal)} />
          <Row label="Ongkir" value={shop.shipping === 0 ? "Gratis" : rupiah(shop.shipping)} />
          <Row label="Total" value={rupiah(shop.total)} strong />
          <p className="text-xs text-muted-foreground">
            Estimasi tiba {STORE.shippingOptions[0].eta} setelah pesanan diproses ({STORE.processing}).
          </p>
          {shop.stockIssues.length > 0 && (
            <p className="rounded-xl bg-destructive/10 px-3 py-2 text-xs text-destructive">
              Ada {shop.stockIssues.length} produk yang melebihi stok atau habis. Perbaiki dulu sebelum checkout.
            </p>
          )}
          <button
            disabled={shop.lines.length === 0 || shop.stockIssues.length > 0}
            onClick={() => shop.setPanel("checkout")}
            className="w-full rounded-full bg-foreground py-3 text-xs font-semibold uppercase tracking-widest text-background disabled:opacity-40"
          >
            Checkout
          </button>
        </div>
      </aside>
    </Overlay>
  );
}

export function WishlistDrawer() {
  const shop = useShop();
  if (shop.panel !== "wishlist") return null;

  return (
    <Overlay onClose={() => shop.setPanel(null)}>
      <aside className="relative flex h-full w-full max-w-md flex-col bg-card shadow-[var(--shadow-lux)]">
        <PanelHead title="Wishlist" onClose={() => shop.setPanel(null)} />
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          {shop.wishlist.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Belum ada produk favorit.
            </p>
          )}
          {shop.wishlist.map((id) => {
            const p = getProduct(id);
            if (!p) return null;
            return (
              <div key={id} className="flex gap-4 border-b border-border pb-4">
                <img src={p.image} alt={p.name} className="size-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="mt-1 text-sm text-primary">{rupiah(p.price)}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => shop.add(id)}
                      disabled={p.stock <= 0}
                      className="rounded-full bg-foreground px-4 py-1.5 text-[11px] uppercase tracking-widest text-background disabled:opacity-40"
                    >
                      Keranjang
                    </button>
                    <button onClick={() => shop.toggleWish(id)} className="text-xs text-muted-foreground underline">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </Overlay>
  );
}

export function CheckoutDialog() {
  const shop = useShop();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", note: "" });

  if (shop.panel !== "checkout") return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const items = shop.lines
      .map((l, i) => `${i + 1}. ${l.product.name} x${l.qty} — ${rupiah(l.product.price * l.qty)}`)
      .join("\n");
    const msg = `Halo Centella Madagascar, saya ingin memesan:\n\n${items}\n\nSubtotal: ${rupiah(
      shop.subtotal,
    )}\nOngkir: ${shop.shipping === 0 ? "Gratis" : rupiah(shop.shipping)}\nTotal: ${rupiah(
      shop.total,
    )}\n\nNama: ${form.name || "-"}\nCatatan: ${form.note || "-"}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(msg).catch(() => {});
    }
    setStep(2);
  };

  const goToShopee = () => {
    window.open(STORE.shopee.url, "_blank");
    shop.clear();
    shop.setPanel(null);
    shop.notify("Ringkasan pesanan disalin — lanjut ke Shopee Official ✓");
  };

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => shop.setPanel(null)} />
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-card p-7 shadow-[var(--shadow-lux)]">
        {step === 1 ? (
          <>
            <h2 className="font-display text-2xl">Ringkasan Pesanan</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Cek kembali produk yang kamu pesan sebelum melanjutkan ke Shopee Official.
            </p>

            <div className="mt-5 space-y-4">
              {shop.lines.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-4 border-b border-border pb-4 last:border-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {rupiah(product.price)} × {qty}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {rupiah(product.price * qty)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border p-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Alamat Kantor Pusat
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{STORE.address}</p>
            </div>

            <div className="mt-4 space-y-2 rounded-2xl bg-secondary p-4">
              <Row label="Subtotal" value={rupiah(shop.subtotal)} />
              <Row
                label="Ongkir"
                value={
                  shop.subtotal >= STORE.freeShippingMin
                    ? "Gratis (di atas Rp 300.000)"
                    : rupiah(shop.shipping)
                }
              />
              <Row label="Total Belanja" value={rupiah(shop.total)} strong />
            </div>

            <form onSubmit={submit} className="mt-5 space-y-3">
              <Field
                label="Nama Lengkap (opsional)"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Nama penerima pesanan"
              />
              <Field
                label="Catatan (opsional)"
                value={form.note}
                onChange={(v) => setForm({ ...form, note: v })}
                placeholder="Contoh: varian, voucher, atau permintaan khusus"
                textarea
              />
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => shop.setPanel("cart")}
                  className="flex-1 rounded-full border border-border py-3 text-xs uppercase tracking-widest"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="flex-[2] rounded-full bg-foreground py-3 text-xs font-semibold uppercase tracking-widest text-background"
                >
                  Lanjut ke Shopee
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="font-display text-2xl">Lanjutkan di Shopee</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Ringkasan pesanan sudah disalin. Ikuti langkah berikut untuk checkout aman.
            </p>

            <ol className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  1
                </span>
                <span>
                  Klik tombol di bawah untuk masuk ke{" "}
                  <strong>Shopee Official {STORE.shopee.handle}</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  2
                </span>
                <span>Cari produk Centella Madagascar yang sama, lalu tambahkan ke keranjang Shopee sesuai jumlah pesananmu.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  3
                </span>
                <span>
                  Tempelkan ringkasan pesanan di chat Shopee Official kami (sudah otomatis disalin) untuk konfirmasi stok dan diskon terkini.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  4
                </span>
                <span>Selesaikan pembayaran melalui metode yang tersedia di Shopee. Transaksi kamu terlindungi oleh Shopee Guarantee.</span>
              </li>
            </ol>

            <div className="mt-5 rounded-2xl border border-dashed border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Total Belanja
              </p>
              <p className="mt-1 font-display text-2xl text-primary">{rupiah(shop.total)}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {shop.subtotal >= STORE.freeShippingMin
                  ? "Gratis ongkir sudah termasuk"
                  : `Ongkir ${rupiah(shop.shipping)} ditambahkan`}
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-full border border-border py-3 text-xs uppercase tracking-widest"
              >
                Kembali
              </button>
              <button
                onClick={goToShopee}
                className="flex-[2] rounded-full bg-foreground py-3 text-xs font-semibold uppercase tracking-widest text-background"
              >
                Buka Shopee Official
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


export function Toast() {
  const { toast } = useShop();
  if (!toast) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-foreground px-6 py-3 text-xs text-background shadow-[var(--shadow-lux)]">
      {toast}
    </div>
  );
}

function PanelHead({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-5">
      <h2 className="font-display text-xl">{title}</h2>
      <button onClick={onClose} aria-label="Tutup" className="size-8 rounded-full border border-border">
        ✕
      </button>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between text-sm ${strong ? "font-semibold" : "text-muted-foreground"}`}>
      <span>{label}</span>
      <span className={strong ? "text-primary" : ""}>{value}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  textarea,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary placeholder:text-muted-foreground/50";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          required={required}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
          placeholder={placeholder}
        />
      ) : (
        <input
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
