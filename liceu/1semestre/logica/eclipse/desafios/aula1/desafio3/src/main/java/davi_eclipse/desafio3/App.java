package davi_eclipse.desafio3;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
    	
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("insira quantidade de votos validos");
    	double votosValidos = scanner.nextInt();
    	
    	System.out.println("insira quantidade de votos brancos");
    	double votosBrancos = scanner.nextInt();
    	
    	System.out.println("insira quantidade de votos nulos");
    	double votosNulos = scanner.nextInt();
    	
    	double votos = votosValidos + votosBrancos + votosNulos;
    	
    	double percentVotosValidos = (votosValidos/votos) * 100;
    	double percentVotosBrancos = (votosBrancos/votos) * 100;
    	double percentVotosNulos = (votosNulos/votos) * 100;
    	
    	System.out.println("procentagem de votos validos: " + percentVotosValidos +"%");
    	System.out.println("procentagem de votos brancos: " + percentVotosBrancos +"%");
    	System.out.println("procentagem de votos nulos: " + percentVotosNulos +"%");
    }
    
}
