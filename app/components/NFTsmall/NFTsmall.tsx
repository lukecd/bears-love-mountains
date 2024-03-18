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
	console.log({ accentColor });
	return (
		<div
			style={{ backgroundColor: accentColor }}
			className={`flex flex-col w-1/4 justify-center items-center text-white bg-${accentColor} p-3 pb-5 shadow-md `}
		>
			<img
				src={`/bearslovemountains-${id + 1}.png`}
				alt="NFT"
				className={`h-auto hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md rounded-lg `}
				onClick={showNFT}
			/>
			<div className="w-full mt-1 rounded-md pr-2 pb-1">
				<h1 className={`lexend-mega-900 mt-3 text-right text-xl font-bold`} style={{ color: mainColor }}>
					Bears Love Mountains #{id}
				</h1>
			</div>
		</div>
	);
};

export default NFTsmall;
