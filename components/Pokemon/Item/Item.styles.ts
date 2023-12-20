import { StyleSheet } from "react-native";

export const pokemonItemStyles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: '#ffffff50',
        borderRadius: 6,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingVertical: 16,
    },

    infoContainer: {
        flex: 1,
    },

    name: {
        color: 'white',    
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    
    typeContainer: {
    },
    
    type: {
        alignSelf: 'flex-start',
        backgroundColor: '#00000020',
        color: 'white',
        marginTop: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        textTransform: 'uppercase',
    },

    image: {
        objectFit: 'contain',
    }

});