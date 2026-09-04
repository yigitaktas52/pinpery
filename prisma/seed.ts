import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Siyah Blazer Ceket", category: "Ceket", imageUrl: "https://placehold.co/400x600" },
      { name: "Beyaz Gömlek", category: "Gömlek", imageUrl: "https://placehold.co/400x600" },
      { name: "Kot Pantolon", category: "Pantolon", imageUrl: "https://placehold.co/400x600" },
      { name: "Lacivert Ceket", category: "Ceket", imageUrl: "https://placehold.co/400x600" },
      { name: "Çizgili Gömlek", category: "Gömlek", imageUrl: "https://placehold.co/400x600" },
      { name: "Siyah Pantolon", category: "Pantolon", imageUrl: "https://placehold.co/400x600" },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });