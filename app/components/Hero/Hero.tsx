"use client";
import React, { useState, useEffect } from "react";

interface HeroProps {
	navbarMode?: boolean; // Optional prop to determine Navbar mode
}

const Hero: React.FC<HeroProps> = ({ navbarMode }) => {
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsSticky(scrollTop > 50); // Set sticky based on scroll position
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Moved fontSize into a dedicated class for smoother transitions.
	const heroClass = isSticky ? "hero-sticky" : "hero";

	return (
		<div
			className={`flex items-center justify-center ${heroClass} bg-black transition-all duration-500 ease-in-out pt-1 pb-1`}
		>
			<div className="text-center w-full">
				{/* Apply gradient text styling directly to the component */}
				<span className="text-gradient">BEARS LOVE MOUNTAINS</span>
			</div>

			{/* Additional styles for smooth transitions */}
			<style jsx>{`
				.hero {
					position: relative;
					transition: padding 0.5s ease-in-out;
				}
				.hero-sticky {
					position: fixed;
					top: 0;
					width: 100%;
					z-index: 50;
				}
				.text-gradient {
					background: linear-gradient(180deg, #792602 0%, #ffdb7c 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					font-weight: 900;
					line-height: 0.9;
					transition: font-size 0.5s ease-in-out;
				}
				.hero-sticky .text-gradient {
					font-size: 2rem;
				}
				.hero .text-gradient {
					font-size: clamp(5rem, 10vw, 10rem);
				}
			`}</style>
		</div>
	);
};

export default Hero;
