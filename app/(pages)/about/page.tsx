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
				<br />A collection of original photos shot in the Patagonia region
			</div>
		</div>
	);
};

export default Page;
