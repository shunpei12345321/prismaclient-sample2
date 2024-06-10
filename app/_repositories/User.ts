import prisma from "@/lib/PrismaClient";
import type { User as _User } from "@prisma/client";

export type User = _User;

export async function remove(id: number) {
	return await prisma.user.delete({
		where: { id },
	});
}
