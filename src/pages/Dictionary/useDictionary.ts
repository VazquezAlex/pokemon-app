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
    const [nextPage, setNextPage] = useState<string>('');

    /**
     * Function to fetch pokemons for the api.
     */
    const fetchPokemons = async () => {
        const { pokemons: pokemonsRes, next } = await PokemonQuery.getPokemons(nextPage);

        setPokemons(prev => !nextPage ? pokemonsRes : [...prev, ...pokemonsRes]);
        setNextPage(next ? next : '');
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return {
        pokemons,
        fetchPokemons,
    }
}

export default useDictionary;