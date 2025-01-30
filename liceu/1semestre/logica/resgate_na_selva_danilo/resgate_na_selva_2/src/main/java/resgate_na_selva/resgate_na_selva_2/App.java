package resgate_na_selva.resgate_na_selva_2;

import java.util.Scanner;

//Parte 2: If else

//Continuando a missão de resgate na selva, agora precisamos verificar se a carga do helicóptero está dentro dos limites seguros.

public class App 
{
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Desafio 1: Verifique se a carga está dentro dos limites seguros.
        System.out.println("porfavor insira  a carga (em litros) ");
        float carga = scanner.nextFloat();
        scanner.nextLine();
        System.out.println("porfavor insira  o limite seguro para a carga do helicoptero ");
        float limitesSegurosCarga= scanner.nextFloat();
        scanner.nextLine(); 
        
        if(carga > limitesSegurosCarga) {
        	System.out.println("Esta dentro dos limites seguros");
        }else {
        	System.out.println("Não esta dentro dos limites seguros");
        }

        // Desafio 2: Exiba uma mensagem adequada dependendo da suficiência da carga.
        if(carga > limitesSegurosCarga) {
        	System.out.println("Esta dentro dos limites seguros");
        }else {
        	System.out.println("Não esta dentro dos limites seguros");
        }

        // Desafio 3: Verifique se a altitude inicial é segura para a decolagem.
        System.out.println("porfavor insira a altitude inicial (em metros)");
        float altitudeInicial = scanner.nextFloat();
        scanner.nextLine();
        
        System.out.println("porfavor insira a altitude inicial (em metros)");
        float altitudeSegura = scanner.nextFloat();
        scanner.nextLine();
        
        if(altitudeInicial > altitudeSegura) {
        	System.out.println("Pode decolar, esta seguro");
        }else {
        	System.out.println("Cuidado altitude ainda esta muito baixa");
        }

        // Desafio 4: Exiba uma mensagem de alerta se a altitude estiver fora dos limites seguros.
        if(altitudeInicial > altitudeSegura) {
        	System.out.println("Pode decolar, esta seguro");
        }else {
        	System.out.println("Cuidado altitude ainda esta muito baixa");
        

        // Desafio 5: Verifique se a carga é maior que 0 e exiba uma mensagem de erro se não for.
        	if(carga < 0 ) {
        		System.out.println("ERRO sem combustível");
        	}
        }
	}
}

