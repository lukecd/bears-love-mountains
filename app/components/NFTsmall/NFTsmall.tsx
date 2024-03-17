"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

interface NFTsmallProps {
	borderColor: string;
}

const NFTsmall: React.FC<NFTsmallProps> = ({ borderColor }) => {
	const [id, setId] = useState(1);
	const borderStyle = `border-10 cursor-pointer border-${borderColor} bg-white p-3 pb-10 w-1/4`;
	const router = useRouter();

	const showNFT = () => {
		router.push(`/nft?id=${id}`);
	};

	return (
		<div className="flex flex-col w-1/4 justify-center items-center text-white bg-white p-3">
			<img
				src="/mountain.png"
				alt="NFT"
				className="h-auto hover:scale-105 transition-transform duration-300 pb-10"
				onClick={showNFT}
			/>
		</div>
	);
};

export default NFTsmall;

{
	/* <div className={borderStyle + ` flex justify-start items-start w-full`}>
<img
	src="/mountain.png"
	alt="NFT"
	className="h-auto hover:scale-105 transition-transform duration-300"
	onClick={showNFT}
/>
</div> */
}
