package davi_aula.desafio7;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	
    	int num;
    	int negativos = 0;
    	int positivos = 0;
    	
    	
    	for(int contador = 1; contador <=10;contador++) {
    		System.out.println("insira um numero");
    		num = scanner.nextInt();
        	scanner.nextLine();
    		if (num > 0){
    			positivos++;
    		}else {
    			negativos++;
    		}
    	}
    	
    	System.out.println("positivos: " + positivos);
    	System.out.println("negativos: " + negativos);
    	
    	
    	
    	
    	
    }
}