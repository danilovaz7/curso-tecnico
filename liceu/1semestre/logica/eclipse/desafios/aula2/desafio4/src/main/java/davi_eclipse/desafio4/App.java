package davi_eclipse.desafio4;

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
    	
    	System.out.println("insira quantidade maxima");
    	int qntMax = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira quandidade minima");
    	int qntMin = scanner.nextInt();
    	scanner.nextLine();
    	
    	System.out.println("insira quantidade autal");
    	int qntAtual = scanner.nextInt();
    	scanner.nextLine();
    	
    	
    	int media = (qntMax + qntMin)/2;
    	
    	if(qntAtual < media) {
    		System.out.println("deseja comprar mais?");
    		String resposta = scanner.nextLine();
    			if (resposta.equals("y")) {
    				System.out.println("comprado com sucesso");
    			} else {
    				System.out.println("compra não efetuada");
    			}
    	}else {
    		System.out.println("não precisa comprar mais");
    	}
    	
   
    	
    }
}

