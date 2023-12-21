import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { Pokemon } from "../../types/pokemon";
import { RootStackParamList } from "../../routes/RootStack/RootStack.types";

/**
 * Component to use as Page for the Pokémon's details.
 * 
 * @returns { JSX.Element } - Detail Page.
 */
const Detail = (): JSX.Element => {

    // Get params from route.
    const { params } = useRoute<RouteProp<RootStackParamList>>();
    const pokemon: Pokemon | undefined = params?.pokemon;

    if (!pokemon) return <></>;

    return (
        <Text>
            { pokemon.name }
        </Text>
    );
}

export default Detail;
