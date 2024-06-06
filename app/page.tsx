import Image from "next/image";
import logo from "@/public/pokeapi.png";
import HomeCard from "@/components/card";

export default function Home() {
    return (
        <div className="flex w-full items-start justify-center">
            <HomeCard />
        </div>
    );
}
