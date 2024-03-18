"use client";

import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero"; // Adjust the path as necessary

interface InfoBoxProps {
	label: string;
	value: string;
	mainColor: string;
	accentColor: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ label, value, mainColor, accentColor }) => {
	return (
		<div
			className="flex items-start my-2 w-full rounded-lg shadow"
			style={{
				borderColor: mainColor,
				borderWidth: "2px",
				borderStyle: "solid",
				boxShadow: `2px 2px ${accentColor}`,
			}}
		>
			<div
				className="text-center p-2 font-bold rounded-l-md"
				style={{ backgroundColor: mainColor, color: "white", textShadow: `2px 2px ${accentColor}` }}
			>
				{label}
			</div>
			<div
				className="text-center p-2 font-bold rounded-r-md"
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
	const [name, setName] = useState("");
	const [symbol, setSymbol] = useState("");
	const [price, setPrice] = useState(0);

	// Main and Accent Colors
	const mainColors = ["#E24330", "#8C262E", "#90A9EE", "#98282B", "#E24330", "#EFF330", "#22A093"];
	const accentColors = ["#FEC901", "#FF7B02", "#F0F22F", "#FE91E7", "#FE91E7", "#22A093", "#FEC901"];
	const colorIndex = Math.floor(Math.random() * mainColors.length);
	const [mainColor, setMainColor] = useState<string>(mainColors[colorIndex]);
	const [accentColor, setAccentColor] = useState<string>(accentColors[colorIndex]);

	useEffect(() => {
		// Simulate fetching data
		setName("Bears Love Mountains #1");
		setSymbol("BLUVM");
		setPrice(1);
	}, []);

	return (
		<div className="flex flex-col min-h-screen bg-mainBg" style={{ boxShadow: `0 4px 6px ${accentColor}` }}>
			<Hero navbarMode={true} />
			<div className="flex-grow pt-24 pb-10 px-4 md:px-0">
				<div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
					<div className="md:w-1/2 p-4">
						<img
							src="/mountain.jpg"
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
							className="h-12 border-2 p-2.5 rounded-full font-bold text-white mt-4"
							style={{
								backgroundColor: mainColor,
								borderColor: accentColor,
								boxShadow: `2px 2px ${accentColor}`,
								textShadow: `2px 2px ${accentColor}`,
							}}
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
