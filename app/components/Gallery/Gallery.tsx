"use client";

import React, { useState, useEffect } from "react";
import NFTsmall from "../NFTsmall";
import Info from "../Info";

const borderColors: string[] = ["sunsetDark", "sunsetDarker", "sunsetDarkish", "sunsetLight", "sunsetLighter"];

const Gallery: React.FC = () => {
	const [components, setComponents] = useState<React.ReactNode[]>([]);

	useEffect(() => {
		const items: React.ReactNode[] = Array.from({ length: 42 }).map((_, index) => (
			<NFTsmall key={`nft-${index}`} borderColor={borderColors[Math.floor(Math.random() * borderColors.length)]} />
		));

		const positions = [2, 3, 7];
		positions.forEach((position, i) => {
			items.splice(position, 0, <Info key={`info-${i}`} id={i} />);
		});

		setComponents(items);
	}, []);

	return <div className="flex flex-wrap justify-center gap-4 mt-4">{components}</div>;
};

export default Gallery;
