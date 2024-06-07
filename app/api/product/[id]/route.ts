import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const user = await prisma.product.findFirst({ where: { id } });
	return NextResponse.json(user);
};

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);
	const { productId, quantity, value } = await req.json();

	const user = await prisma.product.update({
		data: { productId, quantity, value },
		where: { id },
	});
	return NextResponse.json(user);
};

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const user = await prisma.product.delete({
		where: { id },
	});
	return NextResponse.json(user);
};
