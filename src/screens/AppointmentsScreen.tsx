// screens/AgendamentosScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockAgendamentos = [
  { id: '1', cliente: 'João', horario: '10:00' },
  { id: '2', cliente: 'Maria', horario: '11:00' },
];

export const AppointmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      <FlatList
        data={mockAgendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.cliente} - {item.horario}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
