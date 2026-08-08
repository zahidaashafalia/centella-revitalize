import { createFileRoute } from "@tanstack/react-router";
import { STORE } from "@/lib/products";

export const Route = createFileRoute("/kontak")({
  component: KontakPage,
  head: () => ({
    meta: [
      { title: "Kontak & Bantuan | Centella Madagascar" },
      {
        name: "description",
        content:
          "Hubungi admin Centella Madagascar via WhatsApp untuk pemesanan, konsultasi kulit, dan informasi pengiriman.",
      },
      { property: "og:title", content: "Kontak Centella Madagascar" },
      { property: "og:description", content: "Konsultasi kulit dan pemesanan via WhatsApp admin kami." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function KontakPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="eyebrow">Kontak</p>
      <h1 className="mt-2 font-display text-4xl">Kami Siap Membantu</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Butuh rekomendasi rangkaian skincare atau ingin cek status pesanan? Tim kami membalas
        setiap hari kerja pukul 09.00–18.00 WIB.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          { t: "WhatsApp Admin", d: "+62 812-3456-7890", h: `https://wa.me/${STORE.waNumber}` },
          { t: "Email", d: "hello@centellamadagascar.id", h: "mailto:hello@centellamadagascar.id" },
          { t: "Instagram", d: "@centella.madagascar", h: "#" },
          { t: "Alamat Toko", d: "Jl. Melati No. 10, Jakarta Selatan", h: "#" },
        ].map((c) => (
          <a key={c.t} href={c.h} target="_blank" rel="noreferrer" className="card-lux block p-6">
            <p className="eyebrow">{c.t}</p>
            <p className="mt-2 text-sm">{c.d}</p>
          </a>
        ))}
      </div>

      <div className="card-lux mt-8 p-7">
        <h2 className="font-display text-2xl">Pertanyaan Umum</h2>
        <div className="mt-4 space-y-4 text-sm">
          {[
            ["Apakah produk original?", "Ya, seluruh produk 100% original dan bersegel resmi."],
            ["Berapa lama pengiriman?", "1–3 hari untuk Jabodetabek, 2–5 hari luar kota."],
            ["Bagaimana cara memesan?", "Tambahkan ke keranjang, checkout, lalu konfirmasi via WhatsApp."],
          ].map(([q, a]) => (
            <div key={q}>
              <p className="font-medium">{q}</p>
              <p className="text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
