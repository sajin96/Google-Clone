import React from "react";
import { Squares2X2Icon, MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>

					<Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

					<Avatar url="https://pbs.twimg.com/profile_images/1292721383546318850/KU8pErTW_400x400.jpg" />
				</div>
			</header>

			<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
					alt="Googlelogo"
					width={300}
					height={100}
				/>
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
					<input
						type="text"
						className="focus:outline-none flex-grow"
						placeholder="Search Google"
					/>

					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button className="btn">Google Search</button>
					<button className="btn">I&apos;m Feeling Lucky</button>
				</div>
      </form>
      <Footer />
		</div>
	);
}

export default Home;
