package aula_davi.desafio_11;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	int contador;
    	int contador2;
    	
    	for (contador = 1;contador <= 10;contador++) {
    		for (contador2 = 1; contador2<=10;contador2++) {
    			System.out.println(contador * contador2);
    		}System.out.println("----------");
    	} 
    }
}