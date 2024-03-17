import React from "react";
import Hero from "../../components/Hero"; // Import Hero component
import NFTView from "../../components/NFTView"; // Import NFTView component

const Page = () => {
	return (
		<div>
			{/* <Hero navbarMode={true} /> Pass a prop to indicate navbar mode */}
			<NFTView />
		</div>
	);
};

export default Page;
