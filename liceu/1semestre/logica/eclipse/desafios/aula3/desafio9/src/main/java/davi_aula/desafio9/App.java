package davi_aula.desafio9;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	
    	String pergunta ;
    	double  valorMerc;
    	double soma = 0;
    	int qntMerc= 0;
    	
    	
    	do {
    			System.out.println("deseja comprar alguma mercadoria?");
    			pergunta = scanner.nextLine();
    	
    		if(pergunta.equals("s")) {
    			System.out.println("insira o valor da mercadoria");
    	    	valorMerc = scanner.nextDouble();
    	    	scanner.nextLine();
    	    	System.out.println("mercadoria adicionada, valor: " + valorMerc + "\n");
    	    	soma = soma + valorMerc;
    	    	qntMerc++;
    	   }
    	}while(pergunta.equals("s"));
    	
    	
    	if(qntMerc > 0) {
    	
    		double media = soma/qntMerc;
    		System.out.println("a soma foi: " + soma);
    		System.out.println("a media foi: " + media);
    		System.out.println("Obrigado pela compra!");
    	}else {
    		System.out.println("nenhuam compra efetuada");
    	}
    }
}
