import Image from "next/image";
import logo from "@/public/pokeapi.png";
import DummyCard from "./dummyCard";

export default function HomeCard() {
    return (
        <div className="flex flex-col items-center justify-between gap-6">
            <Image width={170} height={170} src={logo} alt="pokeLogo" />

            <div>
                <div
                    className="bg-[#e9ecef] dark:bg-[#202225] relative border-gray-800 
                            dark:border-gray-500 border-2 h-[25rem] w-[23rem] rounded-lg"
                >
                    <div className="p-4 flex flex-col h-full justify-end gap-2">
                        <div className="absolute top-4 right-4 w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center border-2 border-pink-500">
                            <span
                                role="img"
                                aria-label="heart"
                                className="text-pink-600 text-xl"
                            >
                                ❤️
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-left mb-4">
                            How to Play PokéSwipe
                        </h1>
                        <ul className="text-left mb-6">
                            <li>Pokémon Appear One at a Time</li>
                            <li>Choose "Like" or "Dislike"</li>
                            <li>Build Your Favorite Team</li>
                        </ul>
                        <div className="flex justify-center">
                            <button
                                className="bg-green-500 dark:bg-green-800 text-black dark:text-white border-gray-800 border-2 
                            font-bold w-full py-2 px-4 rounded hover:bg-green-600 dark:hover:bg-green-700"
                            >
                                Let's Go!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <DummyCard zInd={-1} margin={2} />
                </div>
                <div className="relative">
                    <DummyCard zInd={-2} margin={5} />
                </div>
            </div>
            {/* <DummyCard ind={-3} /> */}
        </div>
    );
}
