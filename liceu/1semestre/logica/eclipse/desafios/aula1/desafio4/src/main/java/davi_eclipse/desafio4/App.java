package davi_eclipse.desafio4;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
    	
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira a primeira nota ");
    	double nota1 = scanner.nextInt();
    	
    	System.out.println("insira a segunda nota");
    	double nota2 = scanner.nextInt();
    	
    	System.out.println("insira a terceira nota");
    	double nota3 = scanner.nextInt();
    	
    	double media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10;
    	
    	
    	
    	System.out.println("sua media é de: " + media);
    	
    
    }
}