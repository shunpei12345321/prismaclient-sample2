"use client";

import Link from "next/link";
import NewProduct from "../components/Product/NewProduct";

const RecordPage = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<div className="flex flex-col w-10/12 items-center justify-center">
					<NewProduct />
					<Link href="/">[back to home]</Link>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
