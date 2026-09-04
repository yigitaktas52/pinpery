import { prisma } from "../../lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="mt-6">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="text-2xl font-bold">{product.name}</h1>
        </div>
      </div>
    </main>
  );
}