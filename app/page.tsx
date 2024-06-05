import Image from "next/image";
import logo from "@/public/pokeapi.png";

export default function Home() {
    return (
        <div>
            <Image src={logo} alt="pokeLogo" />
        </div>
    );
}
