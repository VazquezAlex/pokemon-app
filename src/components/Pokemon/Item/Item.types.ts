// Local imports.
import { Pokemon } from "../../../types/pokemon";

export interface PokemonItemProps {
    // Pokemon to display on the item.
    pokemon: Pokemon;
    // Handle when the user clicks on the item.
    onClick: () => void;
}