package davi_eclipse.desafio3;

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
    	
    	System.out.println("insira uma nota");
    	double nota1 = scanner.nextInt();
    	
    	System.out.println("insira outra nota");
    	double nota2 = scanner.nextInt();
    	
    	System.out.println("insira mais outra nota");
    	double nota3 = scanner.nextInt();
    	
    	double media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    	
    	
    	if(media < 6) {
    		System.out.println("você repitiu, sua méida foi de: " + media);
    	}else {
    		System.out.println("você passou, sua méida foi de: " + media);
    	}
    	
    	
    }
}
