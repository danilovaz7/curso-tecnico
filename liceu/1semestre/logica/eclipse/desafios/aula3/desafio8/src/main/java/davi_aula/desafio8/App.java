package davi_aula.desafio8;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	int soma = 0;
    	
    	System.out.println("insira a quantidade de mercadorias");
    	int qntMerc = scanner.nextInt();
    	scanner.nextLine();
    	
    	for(int contador = 1; contador <= qntMerc ; contador++ ) {
    		System.out.println("insira o valor da mercadoria");
        	int valorMerc = scanner.nextInt();
        	scanner.nextLine();
        	
        	soma = soma + valorMerc;
    	}
    	
    	double media = soma/qntMerc;
    	
    	System.out.println("a soma foi: " + soma);
    	System.out.println("a media foi: " + media);
    	
    	
    }
}