"use client";

import React, { useState, useEffect } from "react";
import NFTsmall from "../NFTsmall";
import Info from "../Info";

const borderColors: string[] = ["sunsetDark", "sunsetDarker", "sunsetDarkish", "sunsetLight", "sunsetLighter"];

const Gallery: React.FC = () => {
	const [components, setComponents] = useState<React.ReactNode[]>([]);
	const mainColors = ["#E24330", "#8C262E", "#90A9EE", "#98282B", "#E24330"];
	const accentColors = ["#FEC901", "#FF7B02", "#F0F22F", "#FE91E7", "#FE91E7"];

	useEffect(() => {
		const items: React.ReactNode[] = Array.from({ length: 42 }).map((_, index) => {
			const colorIndex = Math.floor(Math.random() * mainColors.length);
			return (
				<NFTsmall
					key={`nft-${index}`}
					id={index}
					mainColor={mainColors[colorIndex]}
					accentColor={accentColors[colorIndex]}
				/>
			);
		});

		const positions = [2, 3, 7, 12, 17, 19, 22, 15, 17, 28, 31, 33, 39, 42, 55];
		positions.forEach((position, i) => {
			const colorIndex = Math.floor(Math.random() * mainColors.length);
			items.splice(
				position,
				0,
				<Info key={`info-${i}`} id={i} mainColor={mainColors[colorIndex]} accentColor={accentColors[colorIndex]} />,
			);
		});

		setComponents(items);
	}, []);

	return <div className="flex flex-wrap justify-center gap-4 mt-4 mb-10">{components}</div>;
};

export default Gallery;
