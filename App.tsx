// Core imports.
import React from 'react';

// Local imports.
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/routes/RootStack';

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}

export default App;
