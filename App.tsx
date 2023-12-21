// Core imports.
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

// Local imports.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dictionary from './src/pages/Dictionary';

function App(): React.JSX.Element {

    // Creation of app-level Stack Navigator.
    const Stack = createNativeStackNavigator();

    const PageTemplate = ({ children }: { children: JSX.Element }): JSX.Element => (
        <SafeAreaView style = { styles.container }>
            <View style = { styles.innerContainer }>
                { children }
            </View>
        </SafeAreaView>
    )

    const DictionaryPage = (): JSX.Element => (
        <PageTemplate>
            <Dictionary />
        </PageTemplate>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                }}
            >
                <Stack.Screen 
                    name = "Home" 
                    component = { DictionaryPage } 
                />
            </Stack.Navigator>
        </NavigationContainer>
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
