"use client";

import { ProductType } from "@/app/api/product/type";
import Link from "next/link";
import { useEffect, useState } from "react";

const ViewProduct = () => {
	const [product, setproduct] = useState<ProductType[]>([]);
	const [reload, setReload] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true);
			{
				const res = await fetch("/api/product/");
				const product = await res.json();
				setproduct(product);
			}

			setIsLoading(false);
		};
		fetchProduct();
	}, []);

	return (
		<div className="w-1/2 flex flex-col ">
			<div className="flex justify-between mb-5">
				<p className="text-center font-bold text-3xl">Supabase: User table</p>
				{isLoading ? (
					<p>Reloading...</p>
				) : (
					<button type="button" className="bg-blue-500 text-white px-2 py-1">
						Reload
					</button>
				)}
			</div>

			<div className="flex justify-between mb-5">
				<p className="text-center font-bold text-3xl">Supabase: p table</p>
				{isLoading ? (
					<p>Reloading...</p>
				) : (
					<button type="button" className="bg-blue-500 text-white px-2 py-1">
						Reload
					</button>
				)}
			</div>
			<div className="flex flex-col items-center justify-start">
				{product.map((product) => (
					<Link
						key={product.id}
						href={`/product/edit/${product.id}`}
						className="flex border-2 w-full px-2 py-1">
						{JSON.stringify(product)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ViewProduct;
