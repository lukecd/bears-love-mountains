"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {
	navbarMode?: boolean; // Indicates if Hero starts in navbar mode
}

const Hero: React.FC<HeroProps> = ({ navbarMode }) => {
	const [isSticky, setIsSticky] = useState(navbarMode || false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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

	const goHome = () => {
		router.push("/");
	};

	return (
		<div
			className={`text-xl lg:text-6xl flex items-center justify-between w-full px-4 py-2 ${
				isSticky ? "text-xl fixed top-0 z-50" : "relative"
			} bg-accent transition-all duration-500 ease-in-out shadow shadow-main rounded-b-xl`}
		>
			<div className="text-center w-full leading-none">
				<h1 className={`lexend-mega-300 text-bold text-main`}>
					<a className="cursor-pointer" onClick={goHome}>
						BEARS LOVE MOUNTAINS
					</a>
				</h1>
			</div>
			<div>
				{/* Hamburger Button */}
				<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col space-y-2">
					<span className="block w-8 h-0.5 bg-main"></span>
					<span className="block w-8 h-0.5 bg-main"></span>
					<span className="block w-8 h-0.5 bg-main"></span>
				</button>

				{/* Menu Items */}
				{isMenuOpen && (
					<div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl shadow-accent">
						<a href="/about" className="block px-4 py-2 text-main text-base">
							About
						</a>
						<a href="/yourNFTs" className="block px-4 py-2 text-main text-base">
							Your NFTs
						</a>
						<a href="/staking" className="block px-4 py-2 text-main text-base">
							Your NFTs
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
