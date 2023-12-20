
/**
 * Class to handle the calls on the Pokemon components.
 */
class PokemonClient {

    endpoint = 'https://pokeapi.co/api/v2';
    nextEndpoint: string = '';

    /**
     * Get pokemons.
     */
    async getPokemons() {

        // Get the first pokemons.
        const resource = `${ this.endpoint }/pokemon?limit=10`;
        const response = await fetch(this.nextEndpoint || resource);
        const pokemon = await response.json();

        // Set the next endpoint to fetch.
        this.nextEndpoint = pokemon.next;

        // Iterate to get all the info we need.
        const pokemons: any[] = await this._getPokemonsData(pokemon.results);
        
        return pokemons;
    }

    async _getPokemonsData(resPokemons: any[]) {
        const pokemonsData: any[] = [];

        for (let i = 0; i < resPokemons.length; i++) {
            const pokemon = await this._getPokemonData(resPokemons[i].url);
            pokemonsData.push(pokemon);
        }

        return pokemonsData;
    }

    async _getPokemonData(url: string) {
        const response = await fetch(url);
        return await response.json();
    }

}

export default new PokemonClient();