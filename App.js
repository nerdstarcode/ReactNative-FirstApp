import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro app em react-native</Text>
      <StatusBar style="light" />
      <View style={styles.card}>
      <Text style={styles.cardTitle}>Reactive Native</Text>
      <Text style={styles.cardText}>Uma ferramenta bem interessante para criação de apps, o expo ajuda muito a desenvolvelos na falta de um pc mais parrudo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#cc01ff',
    padding: 20,
    borderRadius: 50,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    color: 'white',

  }
});
