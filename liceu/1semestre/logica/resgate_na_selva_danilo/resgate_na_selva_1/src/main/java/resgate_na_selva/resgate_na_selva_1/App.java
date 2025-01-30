package resgate_na_selva.resgate_na_selva_1;

import java.util.Scanner;

//Parte 1: Criação de variáveis, input e output

//Você é um programador de bordo em uma missão de resgate na selva.
//Sua tarefa é programar o sistema do helicóptero de resgate para garantir uma operação segura e bem-sucedida.

//Nesta primeira etapa, você precisa configurar o sistema de entrada de dados para aceitar informações sobre a altitude inicial e a carga.

public class App 
{
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Desafio 1: Crie uma variável para armazenar a altitude inicial.
        float altitudeInicial;

        // Desafio 2: Crie uma variável para armazenar a carga.
        float carga;

        // Desafio 3: Solicite ao usuário para inserir a altitude inicial e a carga, e armazene esses valores nas variáveis criadas.
        System.out.println("porfavor insira a altitude inicial (em metros)");
        altitudeInicial = scanner.nextFloat();
        scanner.nextLine();
        System.out.println("porfavor insira  a carga (em litros) ");
        carga = scanner.nextFloat();
        scanner.nextLine();

        // Desafio 4: Exiba na tela os valores inseridos.
        
        System.out.println("altitude inicial: " + altitudeInicial+ " metros");
        System.out.println("carga: "+ carga+"L");

        // Desafio 5: Calcule o tempo estimado para chegar ao local do resgate, considerando uma velocidade constante de 100km, e exiba o resultado.
        System.out.println("Insira a distancia do ponto de chegada");
        float distancia = scanner.nextInt();
        scanner.nextLine();
        
        float tempoEstimado = distancia/100;
        System.out.println("A uma velocidade constante de 100km o senhor chegará em: " +tempoEstimado+" horas");
       
        
        
        
    }
}
