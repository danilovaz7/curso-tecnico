package aula_davi.desafio3;

import java.util.ArrayList;
import java.util.List;
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
      List<Integer> numeros = new ArrayList<>();
 
      System.out.println("insira 10 numeros");
      for (int contador= 0; contador <= 10; contador++) {
    	  int numero = scanner.nextInt();
    	  scanner.nextLine();
    	  numeros.add(numero);
      }
      
      System.out.println("um numero para ver quantas vezes voce o inseriu");
      int numeroVezes = scanner.nextInt();
      scanner.nextLine();
      
      int quantidadeDeVezes = 0;
      
      for (int contador = 0; contador < numeros.size(); contador++) {
    	 
    	 int num = numeros.get(contador);
    	  if(num == numeroVezes) {
    		quantidadeDeVezes++;  
    	  }
      }
      
      System.out.println("a quantiade de vezes que o numero " + numeroVezes + " apareceu foi: " + quantidadeDeVezes);
    }
}