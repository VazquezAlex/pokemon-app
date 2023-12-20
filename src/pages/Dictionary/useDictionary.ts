// Core imports.
import { useEffect, useState } from "react";

// Local imports.
import { Pokemon } from "../../types/pokemon";
import PokemonQuery from "../../queries/PokemonQuery";

/**
 * Hook to handle state & methods for the dictionary.
 */
const useDictionary = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const fetchPokemons = async () => {
        const pokemonsRes = await PokemonQuery.getPokemons();
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