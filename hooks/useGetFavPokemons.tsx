import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export const useFavouritesContext = () => {
    const favouritesCtx = useContext(FavouritesContext);
    if (!favouritesCtx)
        throw new Error(
            "useFavouritesContext must be used inside the provider"
        );
    return favouritesCtx;
};
