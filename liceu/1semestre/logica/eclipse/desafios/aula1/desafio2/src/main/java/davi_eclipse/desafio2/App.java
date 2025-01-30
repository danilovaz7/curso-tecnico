package davi_eclipse.desafio2;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
    	
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira quantos anos você tem");
    	int anos = scanner.nextInt();
    	
    	System.out.println("insira quantos meses você tem");
    	int meses = scanner.nextInt();
    	
    	System.out.println("insira quantos dias você tem");
    	int dias = scanner.nextInt();
    	
    	int vida = (anos * 365)+ (meses * 30) + dias;
    	
    	System.out.println("quantidades de dias corridos de vida: " + vida);
    }
    
}