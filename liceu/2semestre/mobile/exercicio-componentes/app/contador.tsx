import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function CounterPage() {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count > 0 ? count - 1 : 0);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.header}>Contador</Text>

			<View style={styles.card}>
				<Text style={styles.count}>{count}</Text>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.button} onPress={increment}>
						<Text style={styles.buttonText}>Incrementar</Text>
					</TouchableOpacity>
					<View style={{ width: 20 }} />
					<TouchableOpacity style={styles.button} onPress={decrement}>
						<Text style={styles.buttonText}>Decrementar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
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
		alignItems: 'center',
	},
	count: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#333',
	},
	buttonRow: {
		flexDirection: 'row',
		marginTop: 20,
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