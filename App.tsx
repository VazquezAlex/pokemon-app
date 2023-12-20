// Core imports.
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    useColorScheme,
} from 'react-native';

// Local imports.
import Dictionary from './src/pages/Dictionary';

function App(): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style = { styles.container }>
            <View style = { styles.innerContainer }>
                <Dictionary />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02304A',
        height: '100%',
    },
    innerContainer: {
        padding: 16,
    }
});

export default App;
