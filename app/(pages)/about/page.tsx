import React from "react";
import Hero from "../../components/Hero"; // Import Hero component
import NFTView from "../../components/NFTView"; // Import NFTView component
import { Suspense } from "react";

const Page = () => {
	return (
		<div className=" bg-white">
			<Hero navbarMode={true} />

			<div className="flex flex-col min-h-screen mt-15 px-10 text-black">
				<br />
				<br />
				<br />
				<br />
				<div className="w-3/4 lexend-mega-300 text-xl text-end">
					<p className="">Original photographs. Preserved permanently as NFTs.</p>
					<p className="">Shot in Patagonia. </p>
					<p className="">The real Patagonia, not the clothing brand.</p>
					<a className="underline decoration-main" href="https://twitter.com/bearsmountains">
						{" "}
						By Mountain Bear
					</a>
				</div>
			</div>
		</div>
	);
};

export default Page;
