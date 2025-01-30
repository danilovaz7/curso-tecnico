package aula_davi.desafio2_2;

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
 
   
      for (int contador= 0; contador <= 10; contador++) {
    	  int numero = scanner.nextInt();
    	  scanner.nextLine();
    	  numeros.add(numero);
      }
      
      for (int contador = 0; contador < numeros.size(); contador++) {
    	 
    	 int num = numeros.get(contador);
    	  
    	  if(num < 0) {
    		  System.out.println(num);
    	  }
      }
      
      
    }
}