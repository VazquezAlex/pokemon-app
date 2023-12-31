import { Image, Text, TouchableOpacity, View } from "react-native";
import { pokemonItemStyles } from "./Item.styles";
import { PokemonItemProps } from "./Item.types";

/**
 * Item to display a Pokemon on the dictionary list.
 * 
 * @param { PokemonItemProps } props - Properties for the component.
 * @returns { JSX.Element } - Pokémon Item.
 */
const Item = (props: PokemonItemProps): JSX.Element => {

    const { pokemon, onPress } = props;

    return (
        <TouchableOpacity 
            style = { pokemonItemStyles.container }
            onPress = { onPress }
        >
            <View style = { pokemonItemStyles.infoContainer }>
                <Text style = { pokemonItemStyles.name }>{ pokemon.name }</Text>
                <Text style = { pokemonItemStyles.type }>{ pokemon.type.name }</Text>
            </View>
            <Image 
                style = { pokemonItemStyles.image }
                source = {{ uri: pokemon.sprites.front }}
                height = { 80 }
                width = { 130 }
            />
        </TouchableOpacity>
    );
}

export default Item;
