import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useShop } from "@/lib/shop-store";

export function Header() {
  const { count, wishlist, setPanel } = useShop();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/produk", label: "Produk" },
    { to: "/faq", label: "FAQ" },
    { to: "/kontak", label: "Kontak" },
  ] as const;

  return (
    <>
      <div className="bg-foreground px-4 py-2.5 text-center text-xs tracking-wide text-background">
        ✦ Gratis ongkir untuk pembelian di atas Rp 300.000 — seluruh Indonesia ✦
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4 md:px-8">
          <Link to="/" className="shrink-0">
            <span className="block font-display text-2xl tracking-[0.18em]">CENTELLA</span>
            <span className="block text-[9px] tracking-[0.4em] text-muted-foreground">
              MADAGASCAR
            </span>
          </Link>

          <nav className="ml-auto hidden gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary md:hidden"
            >
              ☰
            </button>
            <IconButton label="Wishlist" badge={wishlist.length} onClick={() => setPanel("wishlist")}>
              ♡
            </IconButton>
            <IconButton label="Keranjang" badge={count} onClick={() => setPanel("cart")}>
              🛒
            </IconButton>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-border bg-card px-6 py-5 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function IconButton({
  children,
  label,
  badge,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  badge: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="relative grid size-10 place-items-center rounded-full border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary"
    >
      {children}
      {badge > 0 && (
        <span className="absolute -right-1 -top-1 grid min-w-[19px] place-items-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground">
          {badge}
        </span>
      )}
    </button>
  );
}
