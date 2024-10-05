import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockAgendamentos = [
  { 
    id: '1', 
    cliente: 'João Silva', 
    horario: '10:00', 
    servicos: ['Corte', 'Barba'], 
    valor: 'R$ 50,00', 
    status: 'pendente' 
  },
  { 
    id: '2', 
    cliente: 'Maria Oliveira', 
    horario: '11:00', 
    servicos: ['Corte'], 
    valor: 'R$ 30,00', 
    status: 'concluído' 
  },
  { 
    id: '3', 
    cliente: 'Carlos Sousa', 
    horario: '12:00', 
    servicos: ['Corte', 'Barba', 'Massagem'], 
    valor: 'R$ 80,00', 
    status: 'pendente' 
  },
];

export const AppointmentsScreen = () => {
  const handleCancelar = (id: string) => {
    console.log(`Cancelando agendamento com id: ${id}`);
  };

  const handleConcluir = (id: string) => {
    console.log(`Concluindo agendamento com id: ${id}`);
  };

  const handleDetalhes = (id: string) => {
    console.log(`Ver detalhes do agendamento com id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      <FlatList
        data={mockAgendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.cliente}>{item.cliente}</Text>
              <Text style={styles.horario}>{item.horario}</Text>
              <Text style={styles.servicos}>Serviços: {item.servicos.join(', ')}</Text>
              <Text style={styles.valor}>Valor: {item.valor}</Text>
              <Text style={[styles.status, item.status === 'concluído' ? styles.concluido : styles.pendente]}>
                Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </Text>
            </View>
            
            <View style={styles.buttonsContainer}>
              {item.status === 'pendente' && (
                <>
                  <TouchableOpacity 
                    style={[styles.button, styles.concluirButton]} 
                    onPress={() => handleConcluir(item.id)}
                  >
                    <Text style={styles.buttonText}>Concluir</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={[styles.button, styles.cancelarButton]} 
                    onPress={() => handleCancelar(item.id)}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                </>
              )}

              <TouchableOpacity 
                style={[styles.button, styles.detalhesButton]} 
                onPress={() => handleDetalhes(item.id)}
              >
                <Text style={styles.buttonText}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 30,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 12,
  },
  cliente: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
  horario: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  servicos: {
    fontSize: 16,
    color: '#333',
  },
  valor: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  status: {
    fontSize: 14,
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    textAlign: 'center',
  },
  pendente: {
    backgroundColor: '#ffcc00',
    color: '#fff',
  },
  concluido: {
    backgroundColor: '#00cc66',
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  concluirButton: {
    backgroundColor: '#00cc66',
  },
  cancelarButton: {
    backgroundColor: '#ff3300',
  },
  detalhesButton: {
    backgroundColor: '#003366',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
