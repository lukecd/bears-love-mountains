"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface NFTsmallProps {
	id: number;
	mainColor: string;
	accentColor: string;
}

const NFTsmall: React.FC<NFTsmallProps> = ({ id, mainColor, accentColor }) => {
	const router = useRouter();
	const showNFT = () => {
		router.push(`/nft?id=${id}`);
	};

	return (
		<div className={`flex flex-col w-1/4 justify-center items-center text-white bg-white p-3 pb-5 shadow-md `}>
			<img
				src={`/mountain-${id + 1}.jpg`}
				alt="NFT"
				className={`h-auto hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md rounded-lg `}
				onClick={showNFT}
			/>
			<h1
				className="mt-3 text-right text-xl font-bold"
				style={{ color: mainColor, textShadow: `2px 2px ${accentColor}` }}
			>
				Bears Love Mountains #{id}
			</h1>
		</div>
	);
};

export default NFTsmall;

// <div className={`flex flex-col w-1/4 justify-center items-center p-3 bg-[${mainColor}]`}>
// {/* Outer div with mainColor as background */}
// <div className="bg-white m-3 p-3">
// 	{/* White inset div */}
// 	<img
// 		src="/mountain.png"
// 		alt="NFT"
// 		className={`h-auto hover:scale-105 transition-transform duration-300 border-8 border-[${accentColor}] cursor-pointer`}
// 		onClick={showNFT}
// 		style={{ borderColor: accentColor }} // Using inline styles for dynamic border color
// 	/>
// </div>
// </div>
