"use client";

import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero"; // Adjust the path as necessary
import { useSearchParams } from "next/navigation";

interface InfoBoxProps {
	label: string;
	value: string;
	mainColor: string;
	accentColor: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ label, value, mainColor, accentColor }) => {
	return (
		<div
			className="flex items-start my-1 w-full rounded-lg shadow"
			style={{
				borderColor: mainColor,
				borderWidth: "2px",
				borderStyle: "solid",
				boxShadow: `2px 2px ${accentColor}`,
			}}
		>
			<div
				className="text-center p-1 font-bold rounded-l-md lexend-mega-300"
				style={{ backgroundColor: mainColor, color: "white" }}
			>
				{label}
			</div>
			<div
				className="text-center p-1 font-bold rounded-r-md lexend-mega-300"
				style={{
					backgroundColor: "white",
					color: "black",
					borderLeftColor: mainColor,
					borderLeftWidth: "2px",
					borderStyle: "solid",
				}}
			>
				{value}
			</div>
		</div>
	);
};

const NFTView = () => {
	const [id, setId] = useState(0);
	const [name, setName] = useState("");
	const [symbol, setSymbol] = useState("");
	const [price, setPrice] = useState(0);

	const [mintSuccess, setMintSuccess] = useState(false);
	// Main and Accent Colors
	const mainColors = ["#E24330", "#8C262E", "#90A9EE", "#98282B", "#E24330", "#EFF330", "#22A093"];
	const accentColors = ["#FEC901", "#FF7B02", "#F0F22F", "#FE91E7", "#FE91E7", "#22A093", "#FEC901"];
	const colorIndex = Math.floor(Math.random() * mainColors.length);
	const [mainColor, setMainColor] = useState<string>(mainColors[colorIndex]);
	const [accentColor, setAccentColor] = useState<string>(accentColors[colorIndex]);

	const searchParams = useSearchParams();

	useEffect(() => {
		// Simulate fetching data
		setSymbol("BLUVM");
		setPrice(1);
		const idParam = parseInt(searchParams.get("id") || "0") + 1;
		setId(idParam);
		setName(`Bears Love Mountains #${idParam}`);
	}, []);

	const doMint = () => {
		setMintSuccess(true);
	};

	return (
		<div className="flex flex-col min-h-screen bg-mainBg" style={{ boxShadow: `0 4px 6px ${accentColor}` }}>
			{mintSuccess && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="w-96 px-8 py-4 bg-main border-4 border-accent shadow-[8px_8px_0px_rgba(34, 160, 147, 1)]">
						<div>
							<h1 className="lexend-mega-300 text-2xl mb-4 text-center">Congrats, you{"'"}re one of 42 lucky bears.</h1>
							<div className="flex justify-center space-x-2 w-full">
								<button
									onClick={() => setMintSuccess(false)}
									className="lexend-mega-300 h-12 border-black border-2 p-2.5 bg-main hover:bg-accent hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
								>
									Nice!
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			<Hero navbarMode={true} />
			<div className="flex-grow pt-24 pb-10 px-4 md:px-0">
				<div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
					<div className="md:w-1/2 p-4">
						<img
							src={`/bearslovemountains-${id}.png`}
							alt={name}
							className="h-auto mx-auto rounded-lg"
							style={{ border: `4px solid ${mainColor}`, boxShadow: `2px 2px ${accentColor}` }}
						/>
					</div>
					<div className="md:w-1/2 p-4 flex flex-col justify-end">
						<InfoBox label="Name" value={name} mainColor={mainColor} accentColor={accentColor} />
						<InfoBox label="Symbol" value={symbol} mainColor={mainColor} accentColor={accentColor} />
						<InfoBox label="Price" value={`${price} BERA`} mainColor={mainColor} accentColor={accentColor} />
						<button
							className="lexend-mega-900 h-12 border-2 p-2.5 rounded-full font-bold text-white mt-4 lexend-mega-900"
							style={{
								backgroundColor: mainColor,
								borderColor: accentColor,
								boxShadow: `2px 2px ${accentColor}`,
							}}
							onClick={doMint}
						>
							Mint
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTView;
