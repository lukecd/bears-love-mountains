import Image from "next/image";
import Hero from "./components/Hero/";
import Quote from "./components/Quote";
import Gallery from "./components/Gallery";
export default function Home() {
	return (
		<main className="flex flex-col w-full items-center justify-center bg-white">
			<Hero navbarMode={false} />
			<Gallery showAll={true} />
		</main>
	);
}
