package davi_eclipse.desafio7;

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
    	
    	System.out.println("insira um lado do seu triangulo");
    	int lado1 = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira outro lado do seu triangulo");
    	int lado2 = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira mais outro lado do seu triangulo");
    	int lado3 = scanner.nextInt();
    	scanner.nextLine();
    	
    	
    	if(lado1 < lado2 + lado3) {
    		if(lado2 < lado1 + lado3) {
    			if(lado3 < lado1 + lado2) {
    				System.out.println("é um triangulo");
    			}else {System.out.println("não é um triangulo");}
    		}else {System.out.println("não é um triangulo");}
    	}else {System.out.println("não é um triangulo");}
    	
    	
   
    	
    }
}
