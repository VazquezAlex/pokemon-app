// Core imports.
import { FlatList, SafeAreaView, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Local imports.
import { Item } from "../../components/Pokemon";
import SearchBar from "../../components/common/SearchBar";
import Title from "../../components/common/Title";
import useDictionary from "./useDictionary";

/**
 * Dictionary Page for the app.
 * 
 * @returns { JSX.Element } - Dictionary Page.
 */
const Dictionary = (): JSX.Element => {

    const { navigate } = useNavigation();

    const { 
        pokemons,
        fetchPokemons,
    } = useDictionary();

    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        console.log('Searching ', searchTerm, '.');
    }, [searchTerm]);

    return (
        <SafeAreaView>
            <Title text = 'DICCIONARIO POKÉMON' />
            <View style = {{ marginVertical: 8 }} />
            <SearchBar
                placeholder = "Buscar pokémon"
                value = { searchTerm }
                onChange = { (s) => setSearchTerm(s) }
            />

            {/* TODO: Add Separator Line  */}

            <View style = {{ marginVertical: 8 }} />

            <View style = {{ height: '78%' }}>
                <FlatList
                    data = { pokemons }
                    renderItem = { ({ item }) => (
                        <Item 
                            pokemon = { item } 
                            onPress = { () => navigate('Detail', { pokemon: item }) } 
                        />
                    )}
                    ItemSeparatorComponent = { () => <View style = {{ marginVertical: 4 }} /> }
                    onEndReached = { () => fetchPokemons() }
                />
            </View>
            
        </SafeAreaView>
    );
}

export default Dictionary;
