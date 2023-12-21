// Core imports.
import { StyleSheet, View } from "react-native";

// Third-party imports.
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

// Local imports.
import { RootStackParamList } from "./RootStack.types";
import Detail from "../../pages/Detail";
import Dictionary from "../../pages/Dictionary";

/**
 * Root Stack Navigator Component.
 * 
 * @returns { JSX.Element } - Stack Navigator. 
 */
const RootStack = (): JSX.Element => {

    // Creation of app-level Stack Navigator.
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const PageTemplate = ({ children }: { children: JSX.Element }): JSX.Element => (
        <SafeAreaView style = { styles.container }>
            <View style = { styles.innerContainer }>
                { children }
            </View>
        </SafeAreaView>
    );

    const DictionaryPage = (): JSX.Element => (
        <PageTemplate>
            <Dictionary />
        </PageTemplate>
    );

    const DetailPage = (): JSX.Element => (
        <PageTemplate>
            <Detail />
        </PageTemplate>
    );

    // Options to configure stack navigator.
    const screenOptions = {
        headerShown: false,
    }

    return (
        <Stack.Navigator screenOptions = { screenOptions }>
            <Stack.Screen name = "Home" component = { DictionaryPage } />
            <Stack.Screen name = "Detail" component = { DetailPage } />
        </Stack.Navigator>
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


export default RootStack;
