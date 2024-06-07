import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const POST = async (req: Request, res: NextResponse) => {
	const { productId, quantity, value } = await req.json();
	const new_Product = await prisma.product.create({
		data: {
			productId,
			quantity,
			value,
		},
	});
	return NextResponse.json(new_Product);
};
