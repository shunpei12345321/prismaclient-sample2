"use client";

import Link from "next/link";
import NewUser from "@/app/user/_components/NewUser";

const RecordPage = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<NewUser />
				<div className="flex flex-col w-1/2 items-center justify-center">
					<p className="font-bold text-6xl mb-5">/user</p>
					<p className="font-bold text-7xl mb-10">page.tsx</p>
					<Link href="/">[back to home]</Link>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
