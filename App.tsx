import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {log_screen_view, log_scroll} from './util/analytics';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>screen_view</Text>
          <Button
            title="screen_view"
            onPress={async () => await log_screen_view()}
          />

          <Text>scroll</Text>
          <Button title="scroll" onPress={async () => await log_scroll()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
