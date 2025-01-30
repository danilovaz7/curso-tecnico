import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function TaskListPage() {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = () => {
		if (task.trim()) {
			setTasks([...tasks, task]);
			setTask('');
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.header}>Lista de Tarefas</Text>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Adicionar Tarefa</Text>
				<TextInput
					style={styles.input}
					placeholder="Digite uma tarefa"
					value={task}
					onChangeText={setTask}
				/>
				<TouchableOpacity style={styles.button} onPress={addTask}>
					<Text style={styles.buttonText}>Adicionar</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Suas Tarefas</Text>
				{tasks.map((task, index) => (
					<View key={index} style={styles.taskItem}>
						<Text style={styles.taskText}>{task}</Text>
					</View>
				))}
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
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	taskItem: {
		padding: 10,
		backgroundColor: '#f9f9f9',
		borderRadius: 5,
		marginVertical: 5,
	},
	taskText: {
		fontSize: 16,
		color: '#333',
	},
});