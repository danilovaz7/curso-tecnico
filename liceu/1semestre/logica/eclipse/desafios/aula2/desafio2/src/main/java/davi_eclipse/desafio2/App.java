package davi_eclipse.desafio2;

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
    	int valor = scanner.nextInt();
    	
    	
    	System.out.println("insira outro valor");
    	int valor2 = scanner.nextInt();
    	
    	if(valor > valor2) {
    		System.out.println(valor + " é maior que " + valor2);
    	}else if( valor == valor2 ) {
    		System.out.println(valor2 + " é igual a " + valor);
    	} else {
    		System.out.println(valor2 + " é maior que " + valor);
    	}
    	
    	
    }
}
