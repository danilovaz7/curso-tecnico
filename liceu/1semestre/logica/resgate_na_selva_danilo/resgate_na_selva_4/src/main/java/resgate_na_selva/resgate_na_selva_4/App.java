package resgate_na_selva.resgate_na_selva_4;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

//Parte 4: Vetor

//A tripulação precisa monitorar a quantidade de suprimentos nos compartimentos do helicóptero.
//Você deve programar o sistema para armazenar e exibir essas informações.

public class App 
{
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Desafio 1: Crie um vetor para armazenar a quantidade de suprimentos em 5 compartimentos diferentes do helicóptero.
        List<Float> suprimentos = new ArrayList <>();

        // Desafio 2: Solicite ao usuário que insira as quantidades de suprimentos.
        System.out.println("Porfavor insira a quantidade de suprimentos de 5 compartimentos diferentes");
        for ( int i = 0; i < 5; i++) {
        	System.out.println("Insira a quantidade de suprimentos do compartimento "+i);
        	Float suprimento = scanner.nextFloat();
        	scanner.nextLine();
        	suprimentos.add(suprimento);
        }

        // Desafio 3: Exiba o conteúdo do vetor.
        for ( int i = 0; i < suprimentos.size(); i++) {
        	System.out.println("Quantidade de suprimentos do compartimento "+i+ ": "+ suprimentos.get(i));
 
        }
        

        // Desafio 4: Calcule e exiba a quantidade total de suprimentos restantes.
        float somaSuprimentos =0;
        for ( int i = 0; i < suprimentos.size(); i++) {
        	somaSuprimentos = somaSuprimentos + suprimentos.get(i);
 
        }
        System.out.println("Quantidade total restante de suprimentos: "+ somaSuprimentos);

        // Desafio 5: Verifique se algum compartimento está com suprimentos abaixo de um nível crítico e exiba um alerta.
         System.out.println("insira a quanitade considerada como critica para suprimentos ");
        float nivelCritico = scanner.nextFloat();
    	scanner.nextLine(); 
    	
    	for ( int i = 0; i < suprimentos.size(); i++) {
        	if(suprimentos.get(i)< nivelCritico) {
        		System.out.println("NIVEL CRITICO!!! O COMPARTIMENTO "+i+" SE ENCONTRA ABAIXO DO NIVEL CRITICO ("+suprimentos.get(i)+")");
        	}
 
        }

        // Desafio 6: Use um loop while para permitir que o usuário atualize os valores de suprimentos até decidir parar.
    	System.out.println("gostaria de atualizar algum valor de suprimentos? digite s OU n");
    	String escolhaUsuario = scanner.nextLine();
    	while( escolhaUsuario.equals("s")) {
    		for(int i = 0;i<suprimentos.size();i++) {
    			System.out.println("Compartimento "+i+", quantidade de suprimentos: "+suprimentos.get(i));
    		}
    		System.out.println("selecione qual compartimento deseja atualizar");
    		int compartimento = scanner.nextInt();
    		scanner.nextLine();
    		float novaCarga = scanner.nextFloat();
    		scanner.nextLine();
    		suprimentos.set(compartimento, novaCarga);
    		
    		System.out.println("Compartimentos atualizados!! ");
    		for(int i = 0;i<suprimentos.size();i++) {
    			System.out.println("Compartimento "+i+", quantidade de suprimentos: "+suprimentos.get(i));
    		}
    		
    		System.out.println("Continuar atualizando?? Digite s OU n");	
    		escolhaUsuario = scanner.nextLine();
    	}
    }
}
