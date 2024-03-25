import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {logAddToCart, logPurchase, logScreenView} from '../utils/analytics';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.topLeftButtons}>
          <Button
            title="Add to cart"
            onPress={async () => await logAddToCart()}
          />
          <Button title="Puchase" onPress={async () => await logPurchase()} />
          <Button
            title="Page View"
            onPress={async () => await logScreenView('Home')}
          />
        </View>
        <View style={styles.spacerView} />
      </View>
      <View style={styles.centerText}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  spacerView: {
    flex: 1,
  },
  topLeftButtons: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
