"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {
	navbarMode?: boolean; // Indicates if Hero starts in navbar mode
}

const Hero: React.FC<HeroProps> = ({ navbarMode }) => {
	const [isSticky, setIsSticky] = useState(navbarMode || false);
	const router = useRouter();

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

	const goBack = () => {
		router.back();
	};

	return (
		<div
			className={`text-xl lg:text-6xl flex items-center justify-center w-full px-4 py-2 ${
				isSticky ? "text-xl fixed top-0 z-50" : "relative"
			} bg-main transition-all duration-500 ease-in-out`}
		>
			<div className="text-center w-full leading-none">
				<>
					<h1 className={`lexend-mega-300 text-bold text-accent`}>
						<a className="cursor-pointer" onClick={goBack}>
							BEARS LOVE MOUNTAINS
						</a>
					</h1>
				</>
			</div>
		</div>
	);
};

export default Hero;
