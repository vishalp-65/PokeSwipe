import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TypePokemonRes } from "../types/pokemonTypes";

const fetchPokemon = async (id: number) => {
    const response = await axios.get<TypePokemonRes>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return response.data;
};

export const useGetPokemon = (id: number) => {
    return useQuery({
        queryFn: () => fetchPokemon(id),
        queryKey: ["pokemon", id],
    });
};
