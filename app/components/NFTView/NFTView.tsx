"use client";

import React, { useEffect, useState } from "react";

const NFTView = () => {
	// Using useState for each piece of data we will eventually fetch dynamically
	const [name, setName] = useState("");
	const [symbol, setSymbol] = useState("");
	const [price, setPrice] = useState(0);

	const tokenId = 1;

	useEffect(() => {
		// Simulate fetching data
		setName("Bears Love Mountains #1");
		setSymbol("BLUVM");
		setPrice(1); // Assume price is already in BERA
	}, [tokenId]);

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
			<div className="flex flex-row w-full bg-white shadow-md rounded-lg">
				<div className="w-1/3 pl-10">
					<img src="/mountain.png" alt={`${name}`} className="h-auto" />
				</div>
				<div className="pl-5">
					<p className="text-black">Name: {name}</p>
					<p className="text-black">Symbol: {symbol}</p>
					<p className="text-black">Price: {price} $BERA</p>
				</div>
			</div>
		</div>
	);
};

export default NFTView;
