// Core imports.
import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

export default App;
