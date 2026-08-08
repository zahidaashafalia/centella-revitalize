import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/produk")({
  component: ProdukPage,
  head: () => ({
    meta: [
      { title: "Katalog Produk Centella Madagascar | Skincare Centella" },
      {
        name: "description",
        content:
          "Cari, filter, dan urutkan seluruh koleksi skincare Centella Madagascar — toner, ampoule, sunscreen, cleanser, hingga moisturizer.",
      },
      { property: "og:title", content: "Katalog Produk Centella Madagascar" },
      {
        property: "og:description",
        content: "Koleksi lengkap skincare Centella Madagascar dengan pencarian, filter, dan ulasan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const categories = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];

function ProdukPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");
  const [sort, setSort] = useState("populer");

  const list = useMemo(() => {
    let l = products.filter(
      (p) =>
        (cat === "Semua" || p.category === cat) &&
        (p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.category.toLowerCase().includes(q.toLowerCase())),
    );
    l = [...l].sort((a, b) =>
      sort === "termurah"
        ? a.price - b.price
        : sort === "termahal"
          ? b.price - a.price
          : sort === "rating"
            ? b.rating - a.rating
            : b.sold - a.sold,
    );
    return l;
  }, [q, cat, sort]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:px-8">
      <p className="eyebrow">Katalog</p>
      <h1 className="mt-2 font-display text-4xl">Semua Produk</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Temukan rangkaian perawatan Centella Madagascar sesuai kebutuhan kulitmu.
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari produk, mis. toner…"
          className="rounded-full border border-input bg-card px-5 py-3 text-sm outline-none focus:border-primary"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-full border border-input bg-card px-5 py-3 text-sm"
        >
          {categories.map((c) => (
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

      <p className="mt-4 text-xs text-muted-foreground">{list.length} produk ditemukan</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="py-20 text-center text-sm text-muted-foreground">
          Produk tidak ditemukan. Coba kata kunci lain.
        </p>
      )}
    </main>
  );
}
