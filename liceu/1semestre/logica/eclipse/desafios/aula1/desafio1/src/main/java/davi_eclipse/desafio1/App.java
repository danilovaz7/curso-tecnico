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
    	
    	System.out.println("insira a base do seu retangulo");
    	int base = scanner.nextInt();
    	
    	System.out.println("insira a altura do seu retangulo");
    	int altura = scanner.nextInt();
    	
    	int area = base * altura;
    	
    	System.out.println("a area do seu retangulo é: " + area);
    }
    
}
