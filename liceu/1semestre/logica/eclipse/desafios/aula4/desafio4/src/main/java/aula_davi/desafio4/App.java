package aula_davi.desafio4;

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
      
      List<Integer> numeros2 = new ArrayList<>();
      
      for (int contador= 0; contador < numeros.size(); contador++) {
    	  int numero2 = numeros.get(contador) * 2; 
    	  numeros2.add(numero2);
      }
      
      for (int contador = 0; contador < numeros2.size(); contador++) {
     	 System.out.println(numeros2.get(contador));
       }
 }
}