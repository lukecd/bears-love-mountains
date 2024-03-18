import React from "react";
import Hero from "../../components/Hero"; // Import Hero component
import NFTView from "../../components/NFTView"; // Import NFTView component
import { Suspense } from "react";

const Page = () => {
	return (
		<div className=" bg-accent">
			{/* <Hero navbarMode={true} /> Pass a prop to indicate navbar mode */}
			<Suspense>
				<NFTView />
			</Suspense>
		</div>
	);
};

export default Page;
