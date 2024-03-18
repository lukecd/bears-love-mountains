import React from "react";

interface InfoProps {
	id: number;
	mainColor: string;
	accentColor: string;
}

const Info: React.FC<InfoProps> = ({ id, mainColor, accentColor }) => {
	const style = {
		backgroundColor: mainColor,
		color: accentColor,
	};

	let content;

	switch (id) {
		case 0:
			content = (
				<div style={style} className="flex flex-col w-1/4 justify-center items-center p-3">
					<p className="text-8xl leading-none">24</p>
					<p className="text-4xl leading-none">Original</p>
					<p className="text-2xl leading-none">Photographs</p>
				</div>
			);
			break;
		case 1:
			content = (
				<div style={style} className="flex flex-col w-1/4 justify-center items-center p-3">
					<p className="text-5xl leading-none">Minted</p>
					<p className="text-5xl leading-none">as NFTs</p>
					<p className="text-3xl leading-none">on Berachain</p>
				</div>
			);
			break;
		case 2:
			content = (
				<div style={style} className="flex flex-col w-1/4 justify-center items-center p-3">
					<p className="text-7xl leading-none">Original</p>
					<p className="text-6xl leading-none">work by</p>
					<p className="text-4xl leading-none">Mountain Bear</p>
				</div>
			);
			break;
		default:
			content = (
				<div style={style} className="flex flex-col w-1/4 justify-center items-center p-3">
					<p className="text-4xl leading-none">Info not available</p>
				</div>
			);
	}

	return <>{content}</>;
};

export default Info;
