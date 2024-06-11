"use client";

import { UserType } from "@/app/api/user/type";
import Link from "next/link";
import { useEffect, useState } from "react";

const ViewUsers = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [reload, setReload] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [lastUser, setLastUser] = useState<UserType | null>(null); // 最新のユーザーを格納
	// findmany で大丈夫ただmapを使わずに入れてるだけ

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			{
				const res = await fetch("/api/user/");
				const users = await res.json();
				setUsers(users);
			}
			setIsLoading(false);
		};
		fetchUsers();
	}, [reload]);

	// ここで最後のユーザーを決めてる
	useEffect(() => {
		// usersが更新されたら最後のユーザーを設定
		if (users.length > 0) {
			setLastUser(users[users.length - 1]);
		}
	}, [users]);

	// 依存配列[users]は、この副作用がusers配列が変更されるたびに再実行されることを指定します。

	const handleReload = () => {
		setReload(!reload);
	};

	return (
		<div className="w-1/2 flex flex-col ">
			<div className="flex justify-between mb-5">
				<p className="text-center font-bold text-3xl">Supabase: User table</p>
				{isLoading ? (
					<p>Reloading...</p>
				) : (
					<button
						onClick={handleReload}
						type="button"
						className="bg-blue-500 text-white px-2 py-1">
						Reload
					</button>
				)}
			</div>

			{/* もともとあるやつ */}
			{/* <div className="flex flex-col items-center justify-start">
				{users.map((user) => (
					<Link
						key={user.id}
						href={`/user/edit/${user.id}`}
						className="flex border-2 w-full px-2 py-1">
						{JSON.stringify(user)}
					</Link>
				))}
			</div> */}

			{lastUser && (
				<Link
					key={lastUser.id}
					href={`/user/edit/${lastUser.id}`}
					className="flex border-2 w-full px-2 py-1">
					{JSON.stringify(lastUser)}
				</Link>
			)}
		</div>
	);
};

export default ViewUsers;
