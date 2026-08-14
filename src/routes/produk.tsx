import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, SERIES, products, type SeriesKey } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/produk")({
  component: ProdukPage,
  head: () => ({
    meta: [
      { title: "Katalog Produk SKIN1004 — 6 Seri Centella Madagascar" },
      {
        name: "description",
        content:
          "Katalog lengkap SKIN1004: seri Hijau Centella, Kuning Tone Brightening, Biru Hyalu-Cica, Coklat Tea-Trica, Pink Probio-Cica, dan Silver Poremizing.",
      },
      { property: "og:title", content: "Katalog Produk SKIN1004 Centella Madagascar" },
      {
        property: "og:description",
        content: "40+ produk dari 6 seri warna SKIN1004 dengan pencarian, filter seri, dan ulasan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ProdukPage() {
  const [q, setQ] = useState("");
  const [series, setSeries] = useState<SeriesKey | "semua">("semua");
  const [cat, setCat] = useState("Semua");
  const [sort, setSort] = useState("populer");

  const active = series === "semua" ? null : SERIES.find((s) => s.key === series)!;

  const list = useMemo(() => {
    const term = q.toLowerCase();
    const l = products.filter(
      (p) =>
        (series === "semua" || p.series === series) &&
        (cat === "Semua" ||
          (cat === "Best Seller" || cat === "Promo" ? p.badge === cat : p.category === cat)) &&
        (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)),
    );
    return [...l].sort((a, b) =>
      sort === "termurah"
        ? a.price - b.price
        : sort === "termahal"
          ? b.price - a.price
          : sort === "rating"
            ? b.rating - a.rating
            : b.sold - a.sold,
    );
  }, [q, series, cat, sort]);

  const catFilters = ["Semua", "Best Seller", "Promo", ...CATEGORIES];

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:px-8">
      <p className="eyebrow">Katalog</p>
      <h1 className="mt-2 font-display text-4xl">Semua Produk SKIN1004</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        {products.length} produk dari 6 seri warna — pilih seri sesuai kebutuhan kulitmu.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSeries("semua")}
          className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors ${
            series === "semua" ? "border-primary bg-foreground text-background" : "border-border"
          }`}
        >
          Semua Seri
        </button>
        {SERIES.map((s) => (
          <button
            key={s.key}
            onClick={() => setSeries(s.key)}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors ${
              series === s.key ? "border-primary bg-foreground text-background" : "border-border"
            }`}
          >
            <span
              className="size-2.5 rounded-full ring-1 ring-border"
              style={{ backgroundColor: s.swatch }}
            />
            {s.name}
          </button>
        ))}
      </div>

      {active && (
        <div className="card-lux mt-5 grid gap-4 p-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Kandungan Utama</p>
            <p className="mt-2 font-display text-2xl">
              {active.emoji} {active.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{active.ingredients.join(" · ")}</p>
          </div>
          <ul className="grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
            {active.benefits.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari produk, mis. ampoule…"
          className="rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:border-primary"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-full border border-input bg-card px-5 py-3 text-sm"
        >
          {catFilters.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-full border border-input bg-card px-5 py-3 text-sm"
        >
          <option value="populer">Paling Populer</option>
          <option value="rating">Rating Tertinggi</option>
          <option value="termurah">Harga Termurah</option>
          <option value="termahal">Harga Termahal</option>
        </select>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {catFilters.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors ${
              cat === c ? "border-primary bg-foreground text-background" : "border-border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">{list.length} produk ditemukan</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="py-20 text-center text-sm text-muted-foreground">
          Produk tidak ditemukan. Coba kata kunci atau seri lain.
        </p>
      )}
    </main>
  );
}
