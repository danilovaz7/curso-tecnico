package davi_aulas.urna_final;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Urna {

	List<Chapa> novasChapas = new ArrayList<>();

	Scanner scanner = new Scanner(System.in);

	int escolha;
	double votosTotais = 0;

	public void iniciarUrna() {

		carregarChapas();
		do {

			banner();

			try {
				escolha = scanner.nextInt();
				scanner.nextLine();
			} catch (InputMismatchException excetpion) {
				System.out.println("coloca uma opção, escreve não");
				scanner.nextLine();
			}

			switch (escolha) {
			case 1:
				opcao1();
				break;
			case 2:
				opcao2();
				break;
			case 3:
				opcao3();
				break;
			case 4:
				opcao4();

				break;
			case 5:
				opcao5();
				break;
			case 6:
				opcao6();
				break;
			case 7:
				opcao7();
				break;
			case 8:
				opcao8();
				break;
			case 9:
				opcao9();
				break;
			case 10:
				salvar();
				break;
			}

		} while (escolha != 11);
	}

	public void banner() {
		System.out.println("*******************************");
		System.out.println("*      Escolha uma opção      *");
		System.out.println("*                             *");
		System.out.println("*   1- Adicionar chapa        *");
		System.out.println("*   2- Remover chapa          *");
		System.out.println("*   3- Ver chapa              *");
		System.out.println("*   4- Votar                  *");
		System.out.println("*   5- Resultado geral        *");
		System.out.println("*   6- Resultado por chapa    *");
		System.out.println("*   7- Adicionar integrante   *");
		System.out.println("*   8- Remover integrante     *");
		System.out.println("*   9- Ver integrantes        *");
		System.out.println("*   10- Salvar                *");
		System.out.println("*   11- Sair                  *");
		System.out.println("*                             *");
		System.out.println("*******************************");
	}

	public void opcao1() {
		System.out.println("Insira o nome da chapa, deve conter a palavra CHAPA no nome");
		String nomeChapa = scanner.nextLine();

		Chapa chapa = new Chapa();
		chapa.nome = nomeChapa;

		
		addIntegrante(chapa);
		novasChapas.add(chapa);

		System.out.println(chapa.nome + " adicionada");
	}

	public void opcao2() {
		System.out.println("Remova uma das chapas: ");

		rodarChapas();
		try {
			int delete = scanner.nextInt();
			scanner.nextLine();
			novasChapas.remove(delete);
		} catch (IndexOutOfBoundsException erro) {
			System.out.println("Como voce quer rmeover algo que nao existe?insira novamente porfavor");
		} catch (Exception erro) {
			System.out.println("Houve algum erro, por favor faça novamente");
		}
	}

	public void opcao3() {
		System.out.println("Lista das chapas: ");

		rodarChapas();
	}

	public void opcao4() {
		System.out.println("Vote: ");

		rodarChapas();

		try {
			int voto = scanner.nextInt();
			scanner.nextLine();

			Chapa chapa = novasChapas.get(voto);
			chapa.votos = chapa.votos + 1;

			novasChapas.set(voto, chapa);

			votosTotais++;
		} catch (IndexOutOfBoundsException erro) {
			System.out.println("Deu ruim parça, tu votou aonde nao da!!");
		} catch (Exception erro) {
			System.out.println("Houve algum erro, por favor faça novamente");
		}
	}

	public void opcao5() {
		List<Double> votosOrdenados = new ArrayList<>();
		List<Chapa> chapasOrdenadas = new ArrayList<>();
		
	
		for (int contador = 0; contador < novasChapas.size(); contador++) {
			
			Chapa chapa = novasChapas.get(contador);
			
			chapasOrdenadas.add(chapa);
			
		}

		System.out.println("Porcentagem de votos: ");
		for (int contador = 0; contador < novasChapas.size(); contador++) {
			
			Chapa chapa = novasChapas.get(contador);
			double votoPorcent = (chapa.votos / votosTotais) * 100;
			votosOrdenados.add(votoPorcent);
			
		}
		
		boolean mexeu = false;
		do {
			mexeu = false;
			for (int contador = 0; contador < chapasOrdenadas.size(); contador++) {
				if (contador + 1 == chapasOrdenadas.size()) {
					continue;
				}
				if (chapasOrdenadas.get(contador).votos < chapasOrdenadas.get(contador+1).votos) {
					Chapa proximo = chapasOrdenadas.get(contador + 1);
					Chapa atual = chapasOrdenadas.get(contador);
					chapasOrdenadas.set(contador, proximo);
					chapasOrdenadas.set(contador + 1, atual);

					mexeu = true;

				}

			}

		} while (mexeu == true);

		boolean mexeu2 = false;
		do {
			mexeu2 = false;
			for (int contador = 0; contador < votosOrdenados.size(); contador++) {
				if (contador + 1 == votosOrdenados.size()) {
					continue;
				}
				if (votosOrdenados.get(contador) < votosOrdenados.get(contador + 1)) {
					double proximo = votosOrdenados.get(contador + 1);
					double atual = votosOrdenados.get(contador);
					votosOrdenados.set(contador, proximo);
					votosOrdenados.set(contador + 1, atual);

					mexeu2 = true;

				}

			}

		} while (mexeu2 == true);
		
		for (int contador = 0; contador < novasChapas.size(); contador++) {
			Chapa chapa = novasChapas.get(contador);
		
			System.out.println("A " + chapasOrdenadas.get(contador).nome + " tem " + votosOrdenados.get(contador) + "% dos votos");
		}
		
	}

	public void opcao6() {
		System.out.println("Esolha uma das chapas para ver ");

		rodarChapas();

		try {
			int chapaEscolhida = scanner.nextInt();
			scanner.nextLine();

			Chapa chapa = novasChapas.get(chapaEscolhida);

			double votoPorcent = (chapa.votos / votosTotais) * 100;
			System.out.println("A " + chapa.nome + " tem " + votoPorcent + "% dos votos");
			System.out.println("A " + chapa.nome + " tem " + chapa.votos + " votos");
		} catch (IndexOutOfBoundsException erro) {
			System.out.println("Essa chapa nem existe, como voce quer ver os votos dela po");
		} catch (Exception erro) {
			System.out.println("Houve algum erro, por favor faça novamente");
		}
	}

	public void salvar() {
		List<String> chapaEVotos = new ArrayList<>();
		
		
		for (int contador = 0; contador < novasChapas.size(); contador++) {
			
			Chapa chapa = novasChapas.get(contador);
			String chapaSalva = chapa.nome + ";" + chapa.votos;
			chapaEVotos.add(chapaSalva); 
		}
		
		for (int contador = 0; contador < novasChapas.size(); contador++) {
			List<String> membrosEcargos = new ArrayList<>();
			Chapa chapa = novasChapas.get(contador);
			for( int contador2 = 0; contador2< chapa.integrantes.size(); contador2++ ) {
			Integrante integrante = chapa.integrantes.get(contador2);
			String membrosSalvos = integrante.nome + ";" + integrante.cargo;
			membrosEcargos.add(membrosSalvos); 
			
			try {
				Path pathDoArquivo = Paths.get("membros_"+chapa.nome+".csv");
				Files.write(pathDoArquivo, membrosEcargos, StandardCharsets.UTF_8);
			} catch (IOException exception) {
				System.out.println("deu ruim mane na hora de carregar os membros");
			}
			}

		}
		
		
		try {
			Path caminhoDoArquivo = Paths.get("dados.csv");
			Files.write(caminhoDoArquivo, chapaEVotos, StandardCharsets.UTF_8);
		} catch (IOException exception) {
			System.out.println("deu ruim mane");
		}

	}

public void carregarChapas() {
		
		Path caminhoDoArquivo = Paths.get("dados.csv");
		BufferedReader leitor = null;

		try {

			leitor = Files.newBufferedReader(caminhoDoArquivo);
			String linha;

			for (linha = leitor.readLine(); linha != null; linha = leitor.readLine()) {
				String[] valores = linha.split(";");
				Chapa chapa = new Chapa();
				chapa.nome = valores[0];
				chapa.votos = Integer.parseInt(valores[1]);
				novasChapas.add(chapa);
				votosTotais += chapa.votos;

			}

		} catch (IOException exception) {
			System.out.println("erro na hora de ler");
		}
		
		for(int contador = 0; contador < novasChapas.size();contador++ ) {
			Chapa chapa = novasChapas.get(contador);
			
			if(chapa.nome.equals("Em branco")) {
				continue;
			}
				
				Path pathDoArquivo = Paths.get("membros_"+chapa.nome+".csv");
				BufferedReader reader = null;

				try {

					reader = Files.newBufferedReader(pathDoArquivo);
					String line;

					for (line = reader.readLine(); line != null; line = reader.readLine()) {
						String[] valores = line.split(";");
						Integrante integrante = new Integrante();
						integrante.nome = valores[0];
						integrante.cargo = valores[1];
						chapa.integrantes.add(integrante);
						
					}

				} catch (IOException exception) {
					System.out.println("erro na hora de ler");
					System.out.println(exception);
				}
			
			
			
		}
		
		
	}
	
	public void opcao7() {

		System.out.println("selecione uma chapa para adicionar integrantes: ");
		rodarChapas();

		int adicionarMembro = scanner.nextInt();
		scanner.nextLine();

		Chapa chapa = novasChapas.get(adicionarMembro);

		addIntegrante(chapa);

	}

	public void opcao8() {
		System.out.println("selecione uma chapa para remover integrantes: ");
		rodarChapas();

		int escolhaChapa = scanner.nextInt();
		scanner.nextLine();
		System.out.println("selecione um integrante para remover: ");
		Chapa chapa = novasChapas.get(escolhaChapa);

		for (int contador = 0; contador < chapa.integrantes.size(); contador++) {
			Integrante integrante = chapa.integrantes.get(contador);
			System.out.println((contador) + " - " + integrante.nome);
		}
		int removeIntegrante = scanner.nextInt();
		scanner.nextLine();

		Integrante integrantes = chapa.integrantes.remove(removeIntegrante);

	}

	public void opcao9() {
		System.out.println("selecione uma chapa para ver integrantes: ");
		rodarChapas();

		int chapaEscolha = scanner.nextInt();	
		scanner.nextLine();

		Chapa chapa = novasChapas.get(chapaEscolha);

		for (int contador = 0; contador < chapa.integrantes.size(); contador++) {
			Integrante integrante = chapa.integrantes.get(contador);
			System.out.println("Nome: " + integrante.nome + " Cargo: " + integrante.cargo);
		}

	}

	public void rodarChapas() {
		if (escolha == 4) {
			for (int contador = 0; contador < novasChapas.size(); contador++) {
				Chapa chapa = novasChapas.get(contador);
				System.out.println((contador) + " - " + chapa.nome);
			}
		} else {
			for (int contador = 1; contador < novasChapas.size(); contador++) {
				Chapa chapa = novasChapas.get(contador);
				System.out.println((contador) + " - " + chapa.nome);
			}
		}

	}

	public void addIntegrante(Chapa chapa) {

		Integrante novoIntegrante = new Integrante();
		System.out.println("insira o nome ");
		String nomeIntegrante = scanner.nextLine();
		novoIntegrante.nome = nomeIntegrante;
		System.out.println("insira o cargo");
		novoIntegrante.cargo = scanner.nextLine();
		chapa.integrantes.add(novoIntegrante);

	}

	

}
