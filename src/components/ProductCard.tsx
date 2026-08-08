import { useShop } from "@/lib/shop-store";
import { rupiah, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWish, wishlist, setDetailId } = useShop();
  const wished = wishlist.includes(product.id);
  const out = product.stock <= 0;

  return (
    <article className="group card-lux overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lux)]">
      <div className="relative">
        <button
          onClick={() => setDetailId(product.id)}
          className="block w-full overflow-hidden bg-secondary"
          aria-label={`Lihat detail ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        <div className="absolute left-3 top-3 flex gap-2">
          {product.badge && (
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
              {product.badge}
            </span>
          )}
          {out && (
            <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
              Habis
            </span>
          )}
        </div>

        <button
          onClick={() => toggleWish(product.id)}
          aria-label="Tambah ke wishlist"
          aria-pressed={wished}
          className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border bg-card text-sm transition-colors ${
            wished ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>

      <div className="space-y-2 p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="line-clamp-2 font-display text-lg">{product.name}</h3>
        <p className="text-xs text-muted-foreground">
          ★ {product.rating} · {product.sold.toLocaleString("id-ID")} terjual
        </p>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-base font-semibold">{rupiah(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {rupiah(product.oldPrice)}
            </span>
          )}
        </div>
        <div className="flex gap-2 pt-3">
          <button
            disabled={out}
            onClick={() => add(product.id)}
            className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {out ? "Stok Habis" : "Tambah"}
          </button>
          <button
            onClick={() => setDetailId(product.id)}
            className="rounded-full border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            Detail
          </button>
        </div>
      </div>
    </article>
  );
}
