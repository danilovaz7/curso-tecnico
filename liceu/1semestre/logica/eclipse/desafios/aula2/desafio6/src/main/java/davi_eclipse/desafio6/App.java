package davi_eclipse.desafio6;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira um valor");
    	int valor1 = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira uma outro valor");
    	int valor2 = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira um outro outro valor");
    	int valor3 = scanner.nextInt();
    	scanner.nextLine();
    	
    	
    	if (valor1 > valor2 && valor2 > valor3) {
    		System.out.println(valor1+","+valor2+","+valor3);
    	}else if(valor1> valor3 && valor3 > valor2) {
    		System.out.println(valor1+","+valor3+","+valor2);
    	}else if(valor2 > valor1 && valor1 > valor3) {
    		System.out.println(valor2+","+valor1+","+valor3);
    	}else if(valor2 > valor3 && valor3 > valor1) {
    		System.out.println(valor2+","+valor3+","+valor1);
    	}else if(valor3 > valor1 && valor1 > valor2) {
    		System.out.println(valor3+","+valor1+","+valor2);
    	}else {
    		System.out.println(valor3+","+valor2+","+valor1);
    	}
    	
    	
   
    	
    }
}