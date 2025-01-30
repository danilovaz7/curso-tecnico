import { router } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function HomePage() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text>Pagina inicial</Text>
			<Text style={styles.header}>Exemplo de Componentes Replicados</Text>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Lista de tarefas</Text>
				<Text style={styles.cardContent}>Bora ver sua lista de tarefas</Text>
				<TouchableOpacity style={styles.button} onPress={() => {
					router.push('/tarefas')
				}}>
					<Text style={styles.buttonText}>Ir pra lá</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Tela de cadastro</Text>
				<Text style={styles.cardContent}>Bora ver seus cadastros</Text>
				<TouchableOpacity style={styles.button} onPress={() => {
					router.push('/cadastro')
				}}>
					<Text style={styles.buttonText}>Ir pra lá</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Contador</Text>
				<Text style={styles.cardContent}>Bora contar</Text>
				<TouchableOpacity style={styles.button} onPress={() => {
					router.push('/contador')
				}}>
					<Text style={styles.buttonText}>Ir pra lá</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		padding: 20,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		marginVertical: 10,
		width: '100%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
	},
	cardContent: {
		fontSize: 16,
		color: '#666',
		marginBottom: 15,
	},
	button: {
		backgroundColor: '#007BFF',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});