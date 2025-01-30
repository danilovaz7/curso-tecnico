package aula_davi.desafio_buzz;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira UM NUMERO");
    	int num = scanner.nextInt();
    	scanner.nextLine();
    	
    	for (int contador = 1; contador <= num; contador++) {
    		if (contador % 3 == 0 && contador % 5 == 0) {
    			System.out.println("fizzbuzz");
    		} else if(contador % 5 == 0) {
    			System.out.println("buzz");
    		}else if (contador % 3 == 0) {
    			System.out.println("fizz");
    		} else {
    			System.out.println(contador);
    		}
    	}
    	 
    }
}