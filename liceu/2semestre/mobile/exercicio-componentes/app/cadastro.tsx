import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

export default function RegistrationPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleRegister = () => {
		Alert.alert('Cadastro Realizado', `Nome: ${name}, Email: ${email}`);
		setName('');
		setEmail('');
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.header}>Tela de Cadastro</Text>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Nome</Text>
				<TextInput
					style={styles.input}
					placeholder="Digite seu nome"
					value={name}
					onChangeText={setName}
				/>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="Digite seu email"
					keyboardType="email-address"
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Cadastrar</Text>
			</TouchableOpacity>
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
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
	},
	input: {
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginBottom: 15,
		width: '100%',
	},
	button: {
		backgroundColor: '#007BFF',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});