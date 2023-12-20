// Core imports.
import { useEffect, useState } from "react";
import PokemonClient from "../../clients/PokemonClient";

/**
 * Hook to handle state & methods for the dictionary.
 */
const useDictionary = () => {

    const [pokemons, setPokemons] = useState<any>([]);

    const fetchPokemons = async () => {
        const pokemonsRes = await PokemonClient.getPokemons();
        setPokemons(pokemonsRes);
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return {
        pokemons,
    }
}

export default useDictionary;