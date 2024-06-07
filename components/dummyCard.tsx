import React from "react";

type Props = {
    zInd: number;
    margin: number;
};

export default function DummyCard(props: Props) {
    return (
        <div className={`m-[${props.margin}rem]`}>
            <div
                className={`bg-[#e9ecef] dark:bg-[#202225] absolute left-0 right-0 border-gray-800 
            dark:border-gray-500 border-2 h-[25rem] rounded-lg z-${props.zInd} mt-${props.margin}`}
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
        </div>
    );
}
