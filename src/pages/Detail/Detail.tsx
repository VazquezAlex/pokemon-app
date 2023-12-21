// Core imports.
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Third-party imports.
import { RouteProp, useRoute } from "@react-navigation/native";

// Local imports.
import { Pokemon } from "../../types/pokemon";
import { RootStackParamList } from "../../routes/RootStack/RootStack.types";
import DetailStat from "./DetailStat";

const IMAGE_HEIGHT = 180;

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

    const renderStats = pokemon.stats && pokemon.stats.map(stat => (
        <DetailStat 
            key = { stat.stat.name }
            name = { stat.stat.name } 
            value = { stat.base_stat } 
        />
    ));

    return (
        <View style = {{ height: '100%' }}>
            <View style = { styles.imageContainer }>
                <Image 
                    alt = "Pokemon" 
                    source = {{ uri: pokemon.sprites.front }}
                    height = { IMAGE_HEIGHT }
                    width = { 150 }
                    style = { styles.image }
                />
            </View>
            <View style = { styles.infoContainer }>
                <Text style = { styles.name }>{ pokemon.name }</Text>
                <View style = { styles.typeContainer }>
                    <Text style = { styles.type }>{ pokemon.type.name }</Text>
                </View>
                <View style = {{ marginTop: 12 }}>
                    <Text style = { styles.statsTitle }>Base Stats</Text>
                    { renderStats }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        zIndex: 100,
    },
    
    image: {
        margin: 'auto',
    },

    infoContainer: {
        backgroundColor: '#ffffff50',
        borderRadius: 8,
        marginTop: ((IMAGE_HEIGHT / 2) - 10) * -1,
        padding: 24,
        paddingTop: IMAGE_HEIGHT / 2,
        zIndex: 1,
    },
    
    name: {
        color: 'white',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    typeContainer: {
        alignItems: 'center',
        backgroundColor: '#00000020',
        borderRadius: 8,
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 4,
        width: 'auto',
        textAlign: 'center',
    },

    type: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
    },

    statsTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 12,
    },

});

export default Detail;
