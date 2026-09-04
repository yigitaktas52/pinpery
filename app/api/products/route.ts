import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, category, imageUrl } = body;

  if (!name || !category || !imageUrl) {
    return NextResponse.json(
      { error: "Tüm alanlar zorunlu" },
      { status: 400 }
    );
  }

  const product = await prisma.product.create({
    data: { name, category, imageUrl },
  });

  return NextResponse.json(product);
}