import { prisma } from "./lib/prisma";
import ProductGallery from "./ProductGallery";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ProductGallery products={products} />;
}