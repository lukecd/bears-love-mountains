import React from "react";
import Hero from "../../components/Hero"; // Import Hero component
import NFTView from "../../components/NFTView"; // Import NFTView component
import { Suspense } from "react";

const Page = () => {
	return (
		<div className=" bg-white">
			<Hero navbarMode={true} />{" "}
			<Suspense>
				<NFTView />
			</Suspense>
		</div>
	);
};

export default Page;
