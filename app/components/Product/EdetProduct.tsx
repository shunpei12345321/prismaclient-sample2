"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditProduct = () => {
	const id = useParams<{ id: string }>().id;
	const router = useRouter();

	const [productId, setProductId] = useState("");
	const [quantity, setQuantity] = useState<number>();
	const [value, setValue] = useState<number>();
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			setIsFetching(true);
			{
				const res = await fetch(`/api/product/${parseInt(id)}`);
				const product = await res.json();
				setProductId(product.product_name);
				setQuantity(product.product_name);
				setValue(product.fax);
			}
			setIsFetching(false);
		};
		fetchUser();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsFetching(true);
		{
			const res = await fetch(`/api/product/${parseInt(id)}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id, productId, quantity, value }),
			});
			const user = await res.json();
		}
		setIsFetching(false);

		router.push("/");
		router.refresh();
	};

	const handleDelete = async () => {
		const res = await fetch(`/api/user/${parseInt(id)}`, {
			method: "DELETE",
		});
		const user = await res.json();

		router.push("/");
		router.refresh();
	};

	return (
		<div className="flex flex-col space-y-10 w-1/2 p-10 items-center">
			<form className="border-2 w-2/3 p-5">
				<p className="text-center font-bold">Form (EditUser.tsx)</p>
				<div className="mb-4">
					<label htmlFor="id" className="mb-2">
						ID: #{id}
					</label>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="name" className="mb-2">
						Name
					</label>
					<input
						onChange={(event) => {
							setProductId(event.target.value);
						}}
						type="text"
						name="name"
						id="name"
						value={productId}
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="age" className="mb-2">
						age
					</label>
					<input
						onChange={(event) => {
							const parsedValue = parseInt(event.target.value);
							if (!isNaN(parsedValue)) {
								setQuantity(parsedValue > 0 ? parsedValue : 0);
							} else {
								setQuantity(0);
							}
						}}
						type="number"
						name="age"
						id="age"
						value={quantity}
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="age" className="mb-2">
						age
					</label>
					<input
						onChange={(event) => {
							const parsedValue = parseInt(event.target.value);
							if (!isNaN(parsedValue)) {
								setValue(parsedValue > 0 ? parsedValue : 0);
							} else {
								setValue(0);
							}
						}}
						type="number"
						name="value"
						id="value"
						value={value}
						className="border-2 p-2"
					/>
				</div>
			</form>
			{/* 下はなくてもいいと思う */}

			{isFetching ? (
				<p className="text-center">Fetching...</p>
			) : (
				<div className="flex flex-col w-full"></div>
			)}
		</div>
	);
};

export default EditProduct;
