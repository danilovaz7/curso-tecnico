package aula_davi.desafio6;

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
      
      int maior = 0;
      int menor = 0;
 
      System.out.println("insira 10 numeros");
      for (int contador= 0; contador <= 10; contador++) {
    	  int numero = scanner.nextInt();
    	  scanner.nextLine();
    	  numeros.add(numero);
      }

      for (int contador = 0; contador < numeros.size(); contador++) {

    	  if(contador == 0) {
    		  maior = numeros.get(contador);
    		  menor = numeros.get(contador);
     		}else if(numeros.get(contador)> maior) {
    		  maior = numeros.get(contador);
    	  } else if (numeros.get(contador) < menor ) {
    		  menor = numeros.get(contador);
    	  }
       }
      
      System.out.println(maior);
      System.out.println(menor);
 }
}