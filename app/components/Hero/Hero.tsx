"use client";
import React, { useState, useEffect } from "react";

interface HeroProps {
	navbarMode?: boolean; // Indicates if Hero starts in navbar mode
}

const Hero: React.FC<HeroProps> = ({ navbarMode }) => {
	const [isSticky, setIsSticky] = useState(navbarMode || false);

	useEffect(() => {
		if (!navbarMode) {
			const handleScroll = () => {
				const scrollTop = window.scrollY;
				setIsSticky(scrollTop > 50);
			};

			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [navbarMode]);

	return (
		<div
			className={`text-8xl flex items-center justify-center w-full px-4 py-2 ${
				isSticky ? "text-xl fixed top-0 z-50" : "relative"
			} bg-main transition-all duration-500 ease-in-out`}
		>
			<div className="text-center w-full leading-none">
				{isSticky && (
					<>
						<h1 className={`font-bold text-accent`}>BEARS LOVE MOUNTAINS</h1>
					</>
				)}
				{!isSticky && (
					<>
						<h1 className={`font-bold text-accent`}>BEARS LOVE </h1>
						<h1 className={`font-bold text-accent`}>MOUNTAINS</h1>
					</>
				)}
			</div>
		</div>
	);
};

export default Hero;
