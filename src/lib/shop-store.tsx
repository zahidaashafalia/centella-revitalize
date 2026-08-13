import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { STORE, getProduct, type Product } from "./products";

type Panel = null | "cart" | "wishlist" | "checkout";

type Review = { name: string; rating: number; text: string };

export type OrderItem = { id: string; name: string; qty: number; price: number };

export type Order = {
  code: string;
  createdAt: number;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  name: string;
  note: string;
  method: string;
  eta: string;
};

type ShopState = {
  cart: Record<string, number>;
  wishlist: string[];
  reviews: Record<string, Review[]>;
  orders: Order[];
  stockIssues: { product: Product; qty: number }[];
  panel: Panel;
  detailId: string | null;
  toast: string | null;
  lines: { product: Product; qty: number }[];
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, delta: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  toggleWish: (id: string) => void;
  addReview: (id: string, review: Review) => void;
  createOrder: (info: { name: string; note: string; method: string; eta: string }) => Order;
  findOrder: (code: string) => Order | undefined;
  setPanel: (p: Panel) => void;
  setDetailId: (id: string | null) => void;
  notify: (msg: string) => void;
};

const ShopContext = createContext<ShopState | null>(null);

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [reviews, setReviews] = useState<Record<string, Review[]>>({});
  const [orders, setOrders] = useState<Order[]>([]);
  const [panel, setPanel] = useState<Panel>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(load("cm_cart", {}));
    setWishlist(load("cm_wish", []));
    setReviews(load("cm_reviews", {}));
    setOrders(load<Order[]>("cm_orders", []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("cm_cart", JSON.stringify(cart));
    localStorage.setItem("cm_wish", JSON.stringify(wishlist));
    localStorage.setItem("cm_reviews", JSON.stringify(reviews));
    localStorage.setItem("cm_orders", JSON.stringify(orders));
  }, [cart, wishlist, reviews, orders, hydrated]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const value = useMemo<ShopState>(() => {
    const lines = Object.entries(cart)
      .map(([id, qty]) => ({ product: getProduct(id)!, qty }))
      .filter((l) => l.product);
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    const shipping = subtotal === 0 || subtotal >= STORE.freeShippingMin ? 0 : STORE.shipping;

    return {
      cart,
      wishlist,
      reviews,
      orders,
      stockIssues: lines.filter((l) => l.product.stock <= 0 || l.qty > l.product.stock),
      panel,
      detailId,
      toast,
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      add: (id, qty = 1) => {
        const p = getProduct(id);
        if (!p || p.stock <= 0) return;
        setCart((c) => ({ ...c, [id]: Math.min((c[id] || 0) + qty, p.stock) }));
        setToast(`${p.name} ditambahkan ke keranjang`);
      },
      setQty: (id, delta) => {
        const p = getProduct(id);
        if (!p) return;
        setCart((c) => {
          const next = Math.max(0, Math.min((c[id] || 0) + delta, p.stock));
          const copy = { ...c };
          if (next === 0) delete copy[id];
          else copy[id] = next;
          return copy;
        });
      },
      remove: (id) =>
        setCart((c) => {
          const copy = { ...c };
          delete copy[id];
          return copy;
        }),
      clear: () => setCart({}),
      toggleWish: (id) => {
        setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
        setToast(wishlist.includes(id) ? "Dihapus dari wishlist" : "Ditambahkan ke wishlist");
      },
      addReview: (id, review) =>
        setReviews((r) => ({ ...r, [id]: [review, ...(r[id] || [])] })),
      createOrder: (info) => {
        const order: Order = {
          code:
            "CM-" +
            new Date().toISOString().slice(2, 10).replace(/-/g, "") +
            "-" +
            Math.random().toString(36).slice(2, 6).toUpperCase(),
          createdAt: Date.now(),
          items: lines.map((l) => ({
            id: l.product.id,
            name: l.product.name,
            qty: l.qty,
            price: l.product.price,
          })),
          subtotal,
          shipping,
          total: subtotal + shipping,
          ...info,
        };
        setOrders((o) => [order, ...o]);
        return order;
      },
      findOrder: (code) =>
        orders.find((o) => o.code.toLowerCase() === code.trim().toLowerCase()),
      setPanel,
      setDetailId,
      notify: setToast,
    };
  }, [cart, wishlist, reviews, orders, panel, detailId, toast]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
