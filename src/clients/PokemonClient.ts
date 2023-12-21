// Local imports.
import { APIPokemonSummary, APIPokemonType } from "./PokemonClient.types";

/**
 * Class to handle the calls on the Pokemon components.
 */
class PokemonClient {

    private endpoint = 'https://pokeapi.co/api/v2';
    
    /**
     * Get pokemons from API.
     * 
     * @returns { APIPokemonType[] } - Pokemons from API.
     */
    async getPokemons(next?: string) {

        // Get the first pokemons.
        const resource = `${ this.endpoint }/pokemon?limit=10`;
        const response = await fetch(next || resource);
        const pokemon = await response.json();

        // Iterate to get all the info we need.
        const pokemons: APIPokemonType[] = await this._getPokemonsData(pokemon.results);
        
        return { 
            pokemons: pokemons as APIPokemonType[],
            next: pokemon.next,
        };
    }

    /**
     * Filters through the received pokemons, and gets the full data for each.
     * 
     * @param { any } resPokemons - Pokemons from the response. 
     * @returns 
     */
    private async _getPokemonsData(resPokemons: APIPokemonSummary[]) {
        const pokemonsData: any[] = [];

        for (let i = 0; i < resPokemons.length; i++) {
            const pokemon = await this._getPokemonData(resPokemons[i].url);
            pokemonsData.push(pokemon);
        }

        return pokemonsData;
    }

    private async _getPokemonData(url: string) {
        const response = await fetch(url);
        return await response.json();
    }

}

export default new PokemonClient();