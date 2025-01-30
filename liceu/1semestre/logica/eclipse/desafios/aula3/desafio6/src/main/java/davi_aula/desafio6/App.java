package davi_aula.desafio6;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira um numero");
    	int num = scanner.nextInt();
    	scanner.nextLine();
    	System.out.println("insira um outro numero");
    	int num2 = scanner.nextInt();
    	scanner.nextLine();
    	
    	if(num < num2){
    		for(int contador = num; contador <= num2; contador++) {
    			System.out.println(contador);
    		}
    	}
    	
    	
    	
    }
}