import { Image, Text, View } from "react-native";
import { pokemonItemStyles } from "./Item.styles";

/**
 * Item to display a Pokemon on the dictionary list.
 * 
 * @returns { JSX.Element } - Pokémon Item.
 */
const Item = (): JSX.Element => {

    return (
        <View style = { pokemonItemStyles.container }>
            <View style = { pokemonItemStyles.infoContainer }>
                <Text style = { pokemonItemStyles.name }>Name</Text>
                <Text style = { pokemonItemStyles.type }>Type</Text>
            </View>
            <Image 
                style = { pokemonItemStyles.image }
                source = {{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/104.png'}}
                height = { 80 }
                width = { 130 }
            />
        </View>
    );
}

export default Item;
