package aula_davi.desafio_10;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira um numero para ver seu fatorial");
    	int num = scanner.nextInt();
    	scanner.nextLine();
    	
    	int fatorial = 0;
    	int contador;
    	
    	for(contador = num; contador >= 1; contador-- ) {
    		if(contador == num) {
    			fatorial = num;
    		}else {
    			fatorial = fatorial * contador ;	
    		}	
    	}
    	
    	System.out.println("O fatorial de " + num + " é " + fatorial);
    	
    	
    }
}