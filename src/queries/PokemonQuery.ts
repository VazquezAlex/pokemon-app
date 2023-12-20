// Local imports.
import PokemonClient from "../clients/PokemonClient";
import { APIPokemonType } from "../clients/PokemonClient.types";
import { Pokemon } from "../types/pokemon";

class PokemonQuery {

    /**
     * Gets the pokemons from the Client, and transforms them into 
     * the type the UI needs.
     * 
     * @returns { Pokemon[] } - Pokemons to display.
     */
    async getPokemons(next?: string) {
        const clientPokemons = await PokemonClient.getPokemons(next);
        return {
            pokemons: this._transformPokemons(clientPokemons.pokemons),
            next: clientPokemons.next,
        }
    }

    private _transformPokemons(clientPokemons: APIPokemonType[]) {
        const pokemons: Pokemon[] = clientPokemons.map(p => {
            
            return {
                base_experience: p.base_experience,
                height: p.height,
                id: p.id,
                name: p.name,
                order: p.order,
                sprites: {
                    back: p.sprites.back_shiny,
                    front: p.sprites.front_shiny,
                },
                stats: p.stats,
                weight: p.weight,
                type: {
                    name: p.types?.length ? p.types[0].type.name : '',
                    url: p.types?.length ? p.types[0].type.url : '',
                }
            }
        });

        return pokemons;
    }

}

export default new PokemonQuery();
