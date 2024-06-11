import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { TypePokemonRes } from "../types/pokemonTypes";

type TFavouritesContext = {
    favourites: TypePokemonRes[];
    setFavourites: Dispatch<SetStateAction<TypePokemonRes[]>>;
};

export const FavouritesContext = createContext<TFavouritesContext>({
    favourites: [],
    setFavourites: () => {},
});

export const FavouritesProvider = (props: { children: ReactNode }) => {
    const [favourites, setFavourites] = useState<TypePokemonRes[]>([]);

    return (
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            {props.children}
        </FavouritesContext.Provider>
    );
};
