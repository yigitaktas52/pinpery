"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Ceket");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, imageUrl }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Bir hata oluştu, tekrar deneyin.");
      return;
    }

    setName("");
    setImageUrl("");
    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Ürün Ekle</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Ürün Adı</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white"
            >
              <option value="Ceket">Ceket</option>
              <option value="Gömlek">Gömlek</option>
              <option value="Pantolon">Pantolon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Görsel Linki</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-md py-2 font-medium disabled:opacity-50"
          >
            {loading ? "Ekleniyor..." : "Ürünü Ekle"}
          </button>
        </form>
      </div>
    </main>
  );
}