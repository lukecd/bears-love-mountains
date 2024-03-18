"use client";

import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero"; // Adjust the path as necessary

const NFTView = () => {
	// State hooks for NFT data
	const [name, setName] = useState("");
	const [symbol, setSymbol] = useState("");
	const [price, setPrice] = useState(0);

	const tokenId = 1; // Placeholder for dynamic token ID

	useEffect(() => {
		// Simulate fetching NFT data
		setName("Bears Love Mountains #1");
		setSymbol("BLUVM");
		setPrice(1); // Assume price is already in BERA
	}, [tokenId]);

	return (
		<div className="flex flex-col min-h-screen bg-mainBg">
			<Hero navbarMode={true} />
			<div className="flex-grow pt-24 pb-10 px-4 md:px-0">
				{" "}
				{/* Adjust padding for responsiveness */}
				<div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
					<div className="md:w-1/2 p-4">
						<img src="/mountain.png" alt={`${name}`} className="h-auto mx-auto" />
					</div>
					<div className="md:w-1/2 p-4 flex flex-col justify-end">
						<InfoBox label="Name" value={name} labelBg="sunsetDarker" valueBg="sunsetLighter" />
						<InfoBox label="Symbol" value={symbol} labelBg="sunsetDarkish" valueBg="sunsetLighter" />
						<InfoBox label="Price" value={`${price} BERA`} labelBg="sunsetDark" valueBg="sunsetLighter" />
						<button className="bg-sunsetDarker text-white text-lg font-bold py-2 px-4 rounded-full hover:bg-sunsetDarker/80 transition-colors duration-300 mt-4">
							Mint
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const InfoBox = ({ label, value, labelBg, valueBg }) => {
	return (
		<div className="flex justify-between items-center my-2">
			<div className={`w-1/3 text-center p-2 font-bold text-white bg-${labelBg} rounded-l-md`}>{label}</div>
			<div className={`w-2/3 text-center p-2 font-bold text-black bg-${valueBg} rounded-r-md`}>{value}</div>
		</div>
	);
};

export default NFTView;
