"use client";

import React, { useState, useEffect } from "react";
import NFTsmall from "../NFTsmall";
import Info from "../Info";

const borderColors: string[] = ["sunsetDark", "sunsetDarker", "sunsetDarkish", "sunsetLight", "sunsetLighter"];

const Gallery: React.FC = () => {
	const [components, setComponents] = useState<React.ReactNode[]>([]);
	const mainColors = ["#E24330", "#8C262E", "#90A9EE", "#FF88E6", "#98282B", "#E24330", "#EFF330", "#22A093"];
	const accentColors = ["#FEC901", "#FF7B02", "#F0F22F", "#22A093", "#FE91E7", "#FE91E7", "#22A093", "#FEC901"];

	useEffect(() => {
		const items: React.ReactNode[] = Array.from({ length: 42 }).map((_, index) => {
			const colorIndex = Math.floor(Math.random() * mainColors.length);
			return (
				<NFTsmall key={`nft-${index}`} mainColor={mainColors[colorIndex]} accentColor={accentColors[colorIndex]} />
			);
		});

		const positions = [2, 3, 7];
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

	return <div className="flex flex-wrap justify-center gap-4 mt-4">{components}</div>;
};

export default Gallery;
