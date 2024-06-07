"use client";

import Link from "next/link";
import NewUser from "../components/NewUser";
import NewProduct from "../components/Product/NewProduct";

const RecordPage = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<NewUser />
				<div className="flex flex-col w-10/12 items-center justify-center">
					<NewProduct />
					<Link href="/">[back to home]</Link>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
