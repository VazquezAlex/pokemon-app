// Core imports.
import { useEffect, useState } from "react";
import { View } from "react-native";

// Local imports.
import { Item } from "../../components/Pokemon";
import SearchBar from "../../components/common/SearchBar";
import Title from "../../components/common/Title";

/**
 * Dictionary Page for the app.
 * 
 * @returns { JSX.Element } - Dictionary Page.
 */
const Dictionary = (): JSX.Element => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        console.log('Searching ', searchTerm, '.');
    }, [searchTerm]);

    return (
        <View>
            <Title text = 'DICCIONARIO POKÉMON' />
            <View style = {{ marginVertical: 8 }} />
            <SearchBar 
                placeholder = "Buscar pokémon"
                value = { searchTerm }
                onChange = { (s) => setSearchTerm(s) }
            />
            {/* TODO: Add Separator Line  */}

            <View style = {{ marginVertical: 8 }} />
            <Item />
        
        </View>
    );
}

export default Dictionary;
