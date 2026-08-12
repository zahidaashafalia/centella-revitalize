import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Pertanyaan Umum | Centella Madagascar" },
      {
        name: "description",
        content:
          "Jawaban atas pertanyaan umum seputar pengiriman, estimasi waktu, retur & refund, cara order, serta keamanan pembayaran produk Centella Madagascar.",
      },
      { property: "og:title", content: "FAQ — Pertanyaan Umum | Centella Madagascar" },
      {
        property: "og:description",
        content:
          "Pengiriman, estimasi waktu, retur & refund, cara order, dan keamanan pembayaran — semua jawaban ada di sini.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const faqItems = [
  {
    category: "Pengiriman",
    questions: [
      {
        q: "Ke mana saja Centella Madagascar bisa mengirim pesanan?",
        a: "Kami mengirim ke seluruh wilayah Indonesia yang terjangkau oleh jaringan logistik resmi kami melalui Shopee Official Store. Cakupan area pengiriman akan muncul otomatis saat checkout.",
      },
      {
        q: "Apakah ada biaya ongkir?",
        a: "Gratis ongkir tersedia untuk setiap pembelian di atas Rp 300.000 ke seluruh Indonesia. Untuk pembelian di bawah nominal tersebut, ongkir dihitung otomatis berdasarkan lokasi dan berat paket.",
      },
      {
        q: "Siapa yang menangani pengiriman?",
        a: "Pengiriman ditangani oleh kurir resmi Shopee yang bekerja sama dengan penyedia logistik terpercaya, sehingga kamu bisa memantau status paket secara real-time melalui aplikasi Shopee.",
      },
    ],
  },
  {
    category: "Estimasi Waktu",
    questions: [
      {
        q: "Berapa lama pesanan diproses sebelum dikirim?",
        a: "Pesanan yang masuk dan pembayaran terverifikasi sebelum pukul 15.00 WIB akan diproses di hari yang sama. Pesanan di luar jam tersebut akan diproses pada hari kerja berikutnya.",
      },
      {
        q: "Berapa lama paket sampai ke tujuan?",
        a: "Estimasi pengiriman umumnya 1–3 hari kerja untuk Jabodetabek dan 2–5 hari kerja untuk kota-kota besar di luar Jabodetabek. Durasi bisa lebih lama untuk daerah pedalaman atau saat musim libur.",
      },
      {
        q: "Bisa kirim di hari yang sama?",
        a: "Saat ini kami belum menyediakan layanan same-day delivery. Kamu tetap bisa memantau perkiraan tiba paket langsung di aplikasi Shopee setelah paket dalam perjalanan.",
      },
    ],
  },
  {
    category: "Retur & Refund",
    questions: [
      {
        q: "Apakah produk bisa dikembalikan?",
        a: "Ya. Jika produk yang diterima rusak, salah varian, atau tidak sesuai pesanan, kamu bisa mengajukan retur atau pengembalian dana melalui fitur yang tersedia di Shopee dalam rentang waktu yang ditentukan oleh kebijakan Shopee.",
      },
      {
        q: "Bagaimana proses retur?",
        a: "Buka aplikasi Shopee, masuk ke detail pesanan, pilih Ajukan Pengembalian/Refund, dan ikuti langkah verifikasi. Tim kami akan meninjau pengajuan kamu secepatnya sesuai kebijakan platform.",
      },
      {
        q: "Apakah retur karena perubahan pikiran diperbolehkan?",
        a: "Retur karena perubahan pikiran bisa diajukan selama produk masih dalam kondisi segel utuh, belum digunakan, dan dalam batas waktu yang diatur oleh Shopee. Biaya pengiriman retur menjadi tanggung pembeli kecuali ada kesalahan dari pihak kami.",
      },
    ],
  },
  {
    category: "Cara Order",
    questions: [
      {
        q: "Bagaimana cara memesan produk Centella Madagascar?",
        a: "Kamu bisa menambahkan produk ke keranjang di situs ini, lalu klik Lanjut ke Shopee. Setelah itu, selesaikan checkout dan pembayaran di aplikasi Shopee Official Store kami, sesuai dengan metode pembayaran yang kamu pilih.",
      },
      {
        q: "Apakah bisa memesan langsung dari situs ini?",
        a: "Situs ini berfungsi sebagai katalog resmi dan alat bantu belanja. Semua transaksi pembayaran final dilakukan di Shopee Official Store untuk menjamin keamanan dan perlindungan pembeli.",
      },
      {
        q: "Bisa memesan banyak produk sekaligus?",
        a: "Tentu. Kamu bisa menambahkan beberapa produk ke keranjang. Saat checkout, ringkasan pesanan akan disalin dan kamu bisa menyesuaikan jumlah atau varian lagi di halaman Shopee sebelum pembayaran.",
      },
    ],
  },
  {
    category: "Keamanan Pembayaran",
    questions: [
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Semua pembayaran dilakukan di Shopee Official Store, yang mendukung transfer bank, virtual account, kartu kredit, e-wallet, ShopeePay, paylater, dan metode pembayaran lain yang tersedia di aplikasi Shopee.",
      },
      {
        q: "Apakah pembayaran di sini aman?",
        a: "Sangat aman. Karena transaksi final berlangsung di Shopee, pembayaran kamu dilindungi oleh sistem escrow Shopee. Dana baru akan diteruskan ke penjual setelah pesanan kamu diterima dengan baik.",
      },
      {
        q: "Apakah data pribadi saya aman?",
        a: "Kami tidak menyimpan informasi sensitif pembayaran apa pun di situs ini. Semua data pembayaran dan pengiriman diolah langsung oleh platform Shopee sesuai dengan standar keamanan dan privasi yang berlaku.",
      },
    ],
  },
];

function FaqPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="eyebrow">Bantuan</p>
      <h1 className="mt-2 font-display text-4xl">Pertanyaan Umum</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Temukan jawaban cepat seputar pengiriman, estimasi waktu, retur, cara order, dan keamanan pembayaran produk Centella Madagascar.
      </p>

      <div className="mt-10 space-y-8">
        {faqItems.map((section) => (
          <section key={section.category}>
            <h2 className="mb-4 font-display text-2xl">{section.category}</h2>
            <div className="space-y-3">
              {section.questions.map((item) => {
                const key = `${section.category}-${item.q}`;
                const isOpen = open[key];
                return (
                  <div
                    key={key}
                    className="card-lux overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-sm font-medium">{item.q}</span>
                      <span className="shrink-0 text-lg text-muted-foreground transition-transform">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-border px-5 pb-5 pt-3">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
