package davi_eclipse.desafio1;

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
    	double valor = scanner.nextInt();
    	scanner.nextLine();
    	
    	if(valor > 0) {
    		System.out.println("valor é positivo");
    	} else {
    		System.out.println("valor é negativo");
    	}
    }
}
 