package davi_aula.desafio4;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args0 ){
        
    	Scanner scanner = new Scanner(System.in);
    	
    	int num;
    	int num2;
    	
    	System.out.println("isnira um numero");
		num = scanner.nextInt();
		scanner.nextLine();
		
		
		while(num <= 0) {
			System.out.println("isnira um numero denovo");
			num = scanner.nextInt();
			scanner.nextLine();
		}
		
		System.out.println("isnira um outro numero");
		num2 = scanner.nextInt();
		scanner.nextLine();
    	
		
		while(num2 <= 0) {
			System.out.println("isnira um numero outro denovo");
			num = scanner.nextInt();
			scanner.nextLine();
		}
    	
    	System.out.println("os numeros apresentados foram: " + num + " e " + num2);
    }
}