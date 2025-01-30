package davi_eclipse.desafio5;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
    	
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira o salario fixo ");
    	double salarioFixo = scanner.nextInt();
    	
    	
    	System.out.println("insira o valor total das vendas dos carros");
    	double valorCarros = scanner.nextInt();
    	
    	
    	double comissao = (valorCarros / 100) * 5; 
    	
    	double salario = comissao + salarioFixo;
    	
    	
    	
    	System.out.println("seu salario é de: " + salario);
    	
    
    }
}