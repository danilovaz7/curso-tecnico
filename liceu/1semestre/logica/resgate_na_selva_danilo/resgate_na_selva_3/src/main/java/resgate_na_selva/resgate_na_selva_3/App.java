package resgate_na_selva.resgate_na_selva_3;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

//Parte 3: Array

//A tripulação precisa monitorar a temperatura em diferentes partes do helicóptero.
//Você deve programar o sistema para armazenar e exibir essas temperaturas.

public class App 
{
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Desafio 1: Crie um array para armazenar as temperaturas em 5 partes diferentes.
        List<Float> partesHelicoptero = new ArrayList <>();
        

        // Desafio 2: Solicite ao usuário que insira as temperaturas.
        System.out.println("Insira 5 temperaturas referentes as partes");
        for ( int i = 0; i < 5; i++) {
        	System.out.println("Insira uma temperatura na parte "+i);
        	Float temp = scanner.nextFloat();
        	scanner.nextLine();
        	partesHelicoptero.add(temp);
        }

        // Desafio 3: Exiba as temperaturas armazenadas.
        
        for(int i = 0; i < partesHelicoptero.size(); i++) {
        	System.out.println("temperatura "+i+ ": "+ partesHelicoptero.get(i)+ " graus");
        }

        // Desafio 4: Calcule e exiba a temperatura média.
        float soma=0;
        float tempMedia;
        float tempCont=0;
        for(int i = 0; i < partesHelicoptero.size(); i++) {
        	soma = soma + partesHelicoptero.get(i);
    		tempCont++;
        	
        	
        }
        tempMedia = soma/tempCont;
        System.out.println("TEMPERATURA MÉDIA: "+tempMedia+" graus");
        // Desafio 5: Verifique se alguma temperatura está acima de um limite seguro e exiba um alerta.
        System.out.println("Insira a temperatura limite segura ");
        float tempSegura = scanner.nextFloat();
    	scanner.nextLine();
    	
    	for(int i = 0; i < partesHelicoptero.size(); i++) {
        	if(partesHelicoptero.get(i) >tempSegura ) {
        		System.out.println("ALERTA TEMPERATURA MUITO ALTA ("+partesHelicoptero.get(i)+" graus)");
        	}
        }
    }
}
