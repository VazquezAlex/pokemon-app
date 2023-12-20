// Core imports.
import { TextInput, View } from "react-native";

// Local imports.
import { SearchBarProps } from "./SearchBar.types";
import { searchBarStyles } from "./SearchBar.styles";

/**
 * Re-usable Search Bar component.
 * 
 * @param { SearchBarProps } props - Properties for the component.
 * @returns { JSX.Element } - Search Bar element.
 */
const SearchBar = (props: SearchBarProps): JSX.Element => {

    const {
        placeholder = 'Search...',
        value,
        onChange
    } = props;

    return (
        <View style = { searchBarStyles.container }>
            <TextInput 
                placeholder = { placeholder }
                placeholderTextColor = '#c3c3c3'
                style = { searchBarStyles.input }
                value = { value }
                onChangeText = { onChange }
            />
        </View>
    );
}

export default SearchBar;
