import { StyleSheet, Image, SafeAreaView, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import React, { useState } from 'react';

import MapView, { Marker } from 'react-native-maps'; //

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('');

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.half}>
          <ThemedText type="title">Mapa de calor: </ThemedText>
          <SafeAreaView>
            <View style={styles.pickerContainer}>
              <Picker
                dropdownIconColor={'white'}
                selectedValue={selectedPeriod}
                onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione o período" value="" />
                <Picker.Item label="Hoje" value="today" />
                <Picker.Item label="Nos últimos 7 dias" value="week" />
                <Picker.Item label="No último mês" value="month" />
                <Picker.Item label="No ano" value="year" />
                <Picker.Item label="Todo o período" value="all" />
              </Picker>
            </View>
          </SafeAreaView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.body}>
        <Image
          source={require('@/assets/images/map.png')}
          style={styles.map}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#25292e',
  },
  header: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '97%',
  },
  half: {
    flex: 0.5,
  },
  pickerContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    padding: 10,
    marginTop: 14,
    borderRadius: 15,
    backgroundColor: '#4e4e4e',
  },
  picker: {
    width: '100%',
    height: '100%',
    color: 'white'
  },
});