"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
};

const categories = ["Tümü", "Ceket", "Gömlek", "Pantolon"];

export default function ProductGallery({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">PinPery</h1>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/urun/${product.id}`}
            className="group rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500">{product.category}</p>
              <h2 className="font-medium text-sm">{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}