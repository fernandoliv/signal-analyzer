import React, { useState } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Inicia intensidade do sinal com o valor da API
  const [signalStrength, setSignalStrength] = useState('low');

  // Função para atualizar o valor da intensidade do sinal
  const updateSignalStrength = (strength: string) => {
    setSignalStrength(strength);
  };

  // Determina imagem com base na intensidade do sinal
  const getImageSource = () => {
    switch (signalStrength) {
      case 'no':
        return require('@/assets/images/no-signal.png');
      case 'zero':
        return require('@/assets/images/zero-signal.png');
      case 'very-low':
        return require('@/assets/images/very-low-signal.png');
      case 'low':
        return require('@/assets/images/low-signal.png');
      case 'medium':
        return require('@/assets/images/medium-signal.png');
      case 'high':
        return require('@/assets/images/high-signal.png');
      case 'very-high':
        return require('@/assets/images/very-high-signal.png');
      default:
        return require('@/assets/images/zero-signal.png');
    }
  };

  const data = [
    {
      label: 'Intensidade (dBm)',
      value: '20',                             // usar dados da API
    },
    {
      label: 'Distância da antena (m)',       // ??exibir??
      value: '9761',                          // usar dados da API
    },
    {
      label: 'Dispositivo',                   // não exibir
      value: 'Galaxy S24+',                   // usar dados da API
    },
    {
      label: 'Última medição',                // ??exibir??
      value: '14:27',                         // usar dados da API
    },
    {
      label: 'Local',                         // não exibir
      value: 'SBC',                           // usar dados da API
    },
    {
      label: 'Qualidade/status',
      value: 'Baixa',                         // usar dados da API
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.statusImage}>
        <Image source={getImageSource()} style={styles.signal} />
      </ThemedView>
      <ThemedView style={styles.statusDescription}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Detalhes:</ThemedText>
        </ThemedView>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <ThemedView style={[styles.row,{
              backgroundColor: index % 2 == 0 ? '#1e1e1e' : '#1e1e1e',
            }]}>
              <ThemedView style={styles.col1}>
                <ThemedText type="defaultSemiBold">{item.label} :</ThemedText>
              </ThemedView>
              <ThemedView style={styles.col2}>
                <ThemedText>{item.value}</ThemedText>
              </ThemedView>
            </ThemedView>
          )}
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
  statusImage: {
    flex: 0.4
  },
  statusDescription: {
    flex: 0.6,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  signal: {
    height: 256,
    width: 256,
    bottom: -10,
    left: 80,
    position: 'absolute',
  },
  col1: {
    flex: 0.7,
    backgroundColor: '#1e1e1e',
  },
  col2: {
    flex: 0.3,
    backgroundColor: '#1e1e1e',
  },
});