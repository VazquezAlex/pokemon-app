// Core imports.
import { StyleSheet, Text, View } from "react-native";

// Local imports.
import { DetailStatProps } from "./Detail.types";

/**
 * Displays the stat passed for a Pokemon.
 * 
 * @param { DetailStatProps } props - Properties for the component.
 * @returns { JSX.Element } - Stat Line.
 */
const DetailStat = ({ name, value }: DetailStatProps): JSX.Element => {

    const displayName = name.replace('-', ' ');

    return (
        <View style = { styles.container }>
            <Text style = { styles.name }>{ displayName }</Text>
            <Text style = { styles.value }>{ value }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,
        width: '100%',
    },
    name: {
        color: 'white',
        flexGrow: 1,
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    value: {
        color: 'white',
    }
});

export default DetailStat;
