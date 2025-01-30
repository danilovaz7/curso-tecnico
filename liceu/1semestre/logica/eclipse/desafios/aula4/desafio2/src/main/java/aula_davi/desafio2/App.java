package aula_davi.desafio2;

import java.util.ArrayList;
import java.util.List;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
      List<Integer> numeros = new ArrayList<Integer>();
      numeros.add(1);
      numeros.add(0);
      numeros.add(5);
      numeros.add(-2);
      numeros.add(-5);
      numeros.add(7);
      numeros.add(-3);
      numeros.add(25);
      numeros.add(43);
      numeros.add(85);
      numeros.add(-120);
      
      for (int contador = 0; contador < numeros.size(); contador++) {
    	 
    	 int num = numeros.get(contador);
    	  
    	  if(numeros.get(contador) < 0) {
    		  System.out.println(num);
    	  }
      }
      
      
    }
}