package davi_aula.desafio5;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	int num;
    	
    	do {
    		System.out.println("insira um numero para ver a tabuada");
        	 num = scanner.nextInt();
        	scanner.nextLine();
    	}while(num <= 0);
    	
    	for(int contador = 1; contador <= 10; contador++) {
    		System.out.println(contador * num);
    	}
    	
    
    }
}