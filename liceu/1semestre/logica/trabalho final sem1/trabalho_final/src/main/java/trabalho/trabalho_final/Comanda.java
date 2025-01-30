package trabalho.trabalho_final;

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



public class Comanda {

	Scanner scanner = new Scanner(System.in);
	

	List<Comidas> entradas = new ArrayList<>();
	List<Comidas> saladas = new ArrayList<>();
	List<Comidas> pratosPrincipais = new ArrayList<>();
	List<Comidas> acompanhamentos = new ArrayList<>();
	List<Comidas> sobremesas = new ArrayList<>();
	List<Comidas> bebidas = new ArrayList<>();
	List<Comidas> conta = new ArrayList<>();

	public void iniciarComanda() {
		carregarCardapio();
		try {
			int escolhaMenu;
			do {
				menu();
				
				
				 escolhaMenu = scanner.nextInt();
				scanner.nextLine();

				if (escolhaMenu == 1) {
					
					int escolha1;
					do {
						telaAdm();
						escolha1 = scanner.nextInt();
						scanner.nextLine();

						switch (escolha1) {
						case 1:
							adicionarItens();
							break;
						case 2:
							removerItens();
							break;
						case 3:
							 editarItens();
							break;
						case 4:
							salvarMudancas();
							break;

						}

					} while (escolha1 != 5);

				} else if (escolhaMenu == 2) {
					
					int escolha2;

					do {
						telaInicial();
						escolha2 = scanner.nextInt();
						scanner.nextLine();

						switch (escolha2) {
						case 1:
							cardapio();
							break;
						case 2:
							carrinho();
							break;
						case 3:
							chamarGarcom();
							break;
						case 4:
							pagarConta();
							break;

						}

					} while (escolha2 != 5);
				}

			} while (escolhaMenu != 3);
			
		} catch (InputMismatchException excetpion) {
			System.out.println("coloca uma opção, escreve não");
			scanner.nextLine();
		}
		
		
		

	}

	public void menu() {
		System.out.println("*******************************");
		System.out.println("*      Escolha um modo        *");
		System.out.println("*                             *");
		System.out.println("*   1- Modo administrador     *");
		System.out.println("*   2- Modo cliente           *");
		System.out.println("*                             *");
		System.out.println("*******************************");

	}

	public void telaAdm() {
		System.out.println("*******************************");
		System.out.println("*      Escolha uma opção      *");
		System.out.println("*                             *");
		System.out.println("*   1- Adicionar itens        *");
		System.out.println("*   2- Remover itens          *");
		System.out.println("*   3- Editar itens           *");
		System.out.println("*   4- Salvar                 *");
		System.out.println("*   5- Voltar                 *");
		System.out.println("*                             *");
		System.out.println("*******************************");
	}

	public void adicionarItens() {
		int escolha2;

		System.out.println("Em qual categoria você quer adicionar um item?");

		itensCardapio();

		escolha2 = scanner.nextInt();
		scanner.nextLine();
		switch (escolha2) {
		case 1: {
			adicionar("entrada", entradas);
			break;
		}
		case 2: {
			adicionar("salada", saladas);
			break;
		}
		case 3: {
			adicionar("prato principal", pratosPrincipais);
			break;
		}
		case 4: {
			adicionar("acompanhamento", acompanhamentos);
			break;
		}
		case 5: {
			adicionar("sobremesa", sobremesas);
			break;
		}
		case 6: {
			adicionar("bebida", bebidas);
			break;
		}

		}

	}

	public void removerItens() {

		System.out.println("Em qual categoria você quer remover um item?");

		itensCardapio();

		int escolha = scanner.nextInt();
		scanner.nextLine();

		switch (escolha) {
		case 1: {
			rodarCardapio(entradas, "entradas");
			System.out.println("selecione uma entrada para remover! ");

			deletar(entradas);

			break;
		}
		case 2: {
			rodarCardapio(saladas, "saladas");
			System.out.println("selecione uma salada para remover! ");

			deletar(saladas);

			break;
		}
		case 3: {
			rodarCardapio(pratosPrincipais, "pratos principais");
			System.out.println("selecione um prato principal para remover! ");

			deletar(pratosPrincipais);

			break;
		}
		case 4: {
			rodarCardapio(acompanhamentos, "acompanhamentos");
			System.out.println("selecione um acompanhamento para remover! ");

			deletar(acompanhamentos);

			break;
		}
		case 5: {
			rodarCardapio(sobremesas, "sobremesas");
			System.out.println("selecione uma sobremesa para remover! ");

			deletar(sobremesas);

			break;
		}
		case 6: {
			rodarCardapio(bebidas, "bebidas");
			System.out.println("selecione uma bebida para remover! ");

			deletar(bebidas);

			break;
		}
		}
	}
	
	public void editarItens() {
		
		System.out.println("Em qual categoria você quer editadr um item?");

		itensCardapio();

		int escolha = scanner.nextInt();
		scanner.nextLine();

		switch (escolha) {
		case 1: {
			rodarCardapio(entradas, "entradas");
			System.out.println("selecione uma entrada para editar!");
			
			editar(entradas);
		

			break;
		}
		case 2: {
			rodarCardapio(saladas, "saladas");
			System.out.println("selecione uma salada para editar! ");
			editar(saladas);
			

			break;
		}
		case 3: {
			rodarCardapio(pratosPrincipais, "pratos principais");
			System.out.println("selecione um prato principal para editar! ");
			editar(pratosPrincipais);
			

			break;
		}
		case 4: {
			rodarCardapio(acompanhamentos, "acompanhamentos");
			System.out.println("selecione um acompanhamento para editar! ");
			editar(acompanhamentos);
			
			break;
		}
		case 5: {
			rodarCardapio(sobremesas, "sobremesas");
			System.out.println("selecione uma sobremesa para editar! ");
			editar(sobremesas);
			

			break;
		}
		case 6: {
			rodarCardapio(bebidas, "bebidas");
			System.out.println("selecione uma bebida para editar! ");
			editar(bebidas);
			

			break;
		}
		}
		
	
	}
	
	public void salvandoComidas(List<String> arrayComPreco, List<Comidas> arrayTipoComida) {

		for (int contador = 0; contador < arrayTipoComida.size(); contador++) {

			Comidas comida = arrayTipoComida.get(contador);
			String comidaSalva = comida.nome + ";" + comida.preco;
			arrayComPreco.add(comidaSalva);
		}

	}
	
	public void telaInicial() {
		System.out.println("*******************************");
		System.out.println("*      Escolha uma opção      *");
		System.out.println("*                             *");
		System.out.println("*   1- Ver cardápio           *");
		System.out.println("*   2- Ver seu carrinho       *");
		System.out.println("*   3- Chamar garçom          *");
		System.out.println("*   4- Pagar a conta          *");
		System.out.println("*   5- Voltar                 *");
		System.out.println("*                             *");
		System.out.println("*******************************");

	}

	public void cardapio() {

		itensCardapio();

		int escolha = scanner.nextInt();
		scanner.nextLine();

		switch (escolha) {
		case 1: {
			rodarCardapio(entradas, "entradas");
			adicionarPedido(entradas);

			break;
		}
		case 2: {
			rodarCardapio(saladas, "saladas");
			adicionarPedido(saladas);

			break;
		}
		case 3: {
			rodarCardapio(pratosPrincipais, "pratos principais");
			adicionarPedido(pratosPrincipais);

			break;
		}
		case 4: {
			rodarCardapio(acompanhamentos, "acompanhamentos");
			adicionarPedido(acompanhamentos);

			break;
		}
		case 5: {
			rodarCardapio(sobremesas, "sobremesas");
			adicionarPedido(sobremesas);

			break;
		}
		case 6: {
			rodarCardapio(bebidas, "bebidas");
			adicionarPedido(bebidas);
			break;
		}
		}

	}

	public void carrinho() {
		
		if(somarConta() == 0) {
			System.out.println("Não adicionou nenhum item ainda!");
		}else {
			System.out.println("Este é o carrinho do senhor");
			for (int contador = 0; contador < conta.size(); contador++) {
				System.out.println("Item " + (contador + 1) + "- " +conta.get(contador).nome);
			}
			
			System.out.println("Total da conta: "+ somarConta());
			
		}
	}

	public void chamarGarcom() {
		System.out.println("O garçom Geison está indo para sua mesa, cuidado! ");

	}
	
	public float somarConta() {
		float soma = 0;
		for (int contador = 0; contador < conta.size(); contador++) {
			soma = soma + conta.get(contador).preco;
		}
		
		return soma;
	}
	
	public void pagarConta() {
		
		if(somarConta() == 0) {
			System.out.println("Sua conta está vazia ainda, adicione um item antes de querer pagar!");
		}else {
			System.out.println("O total da sua conta ficou: " +somarConta() + " reais, divide a conta em quantas partes?" );
			float qnt = scanner.nextFloat();
			scanner.nextLine();
			
			float total = somarConta();
			float divisao = total / qnt;
			
			if(qnt == 1) {
				System.out.println("A conta ficou "+somarConta()+ " reais pro senhor");
			}else {
				System.out.println("A conta ficou "+divisao+ " reais por pessoa!");
			}
			
			System.out.println("Insira o valor que voçê vai dar pro Geison o garçom");
			
			
			do {
				
			float pagamento = scanner.nextFloat();;
			scanner.nextLine();
			
			float resto = total - pagamento;
			
			if(total > pagamento) {
			System.out.println("Ainda ta faltano grana aqui, faltam: "+resto+" reais");	
			} else if (pagamento > total) {
				System.out.println("Muito obrigado senhor, Geison fica agrdescido pela gorgeta de: " + (-resto) +" reais");
			}else {
				System.out.println("Muito obrigado por escolher o nosso restaurante");
			}
			
			total = resto;
			
			}while (total > 0);
			
		
			for (int contador = 0; contador < conta.size(); contador++) {
				conta.get(contador).nome = " ";
				conta.get(contador).preco = 0;
			}
			
			
			
		}
		

	}
	
	
	public void rodarConta() {
		System.out.println("Este é o carrinho do senhor");
		for (int contador = 0; contador < conta.size(); contador++) {
			System.out.println("Item " + (contador + 1) + "- " +conta.get(contador).nome);
		}
	}
	
	public void rodarCardapio(List<Comidas> x, String tipo) {
		System.out.println("Lista de " + tipo + " : ");

		for (int contador = 0; contador < x.size(); contador++) {
			Comidas comida = x.get(contador);
			System.out.println((contador + 1) + " - " + comida.nome + "   preço: " + comida.preco + " reais");
			
		}
		
	}
	
	

	public void salvarMudancas() {
		List<String> entradasComPreco = new ArrayList<>();
		salvandoComidas(entradasComPreco, entradas);

		List<String> saladasComPreco = new ArrayList<>();
		salvandoComidas(saladasComPreco, saladas);

		List<String> pratosPrincipaisComPreco = new ArrayList<>();
		salvandoComidas(pratosPrincipaisComPreco, pratosPrincipais);

		List<String> acompanhamentosComPreco = new ArrayList<>();
		salvandoComidas(acompanhamentosComPreco, acompanhamentos);

		List<String> sobremesasComPreco = new ArrayList<>();
		salvandoComidas(sobremesasComPreco, sobremesas);

		List<String> bebidasComPreco = new ArrayList<>();
		salvandoComidas(bebidasComPreco, bebidas);

		try {
			Path caminhoDaEntrada = Paths.get("entradas.csv");
			Files.write(caminhoDaEntrada, entradasComPreco, StandardCharsets.UTF_8);

			Path caminhoDaSalada = Paths.get("saladas.csv");
			Files.write(caminhoDaSalada, saladasComPreco, StandardCharsets.UTF_8);

			Path caminhoPratoPrincipal = Paths.get("pratosPrincipais.csv");
			Files.write(caminhoPratoPrincipal, pratosPrincipaisComPreco, StandardCharsets.UTF_8);

			Path caminhoAcompanhamento = Paths.get("acompanhamentos.csv");
			Files.write(caminhoAcompanhamento, acompanhamentosComPreco, StandardCharsets.UTF_8);

			Path caminhoSobremesa = Paths.get("sobremesas.csv");
			Files.write(caminhoSobremesa, sobremesasComPreco, StandardCharsets.UTF_8);

			Path caminhoBebida = Paths.get("bebidas.csv");
			Files.write(caminhoBebida, bebidasComPreco, StandardCharsets.UTF_8);

		} catch (IOException exception) {
			System.out.println("deu ruim mane na hora de salvar");
		}

	}


	public void carregarCardapio() {

		carregarUmPorUm("entradas", entradas);
		carregarUmPorUm("saladas", saladas);
		carregarUmPorUm("pratosPrincipais", pratosPrincipais);
		carregarUmPorUm("acompanhamentos", acompanhamentos);
		carregarUmPorUm("sobremesas", sobremesas);
		carregarUmPorUm("bebidas", bebidas);
	}

public void itensCardapio() {
	System.out.println("*******************************");
	System.out.println("*      Escolha uma opção      *");
	System.out.println("*                             *");
	System.out.println("*   1- Entradas               *");
	System.out.println("*   2- Saladas                *");
	System.out.println("*   3- Pratos principais      *");
	System.out.println("*   4- Acompanhamentos        *");
	System.out.println("*   5- Sobremesas             *");
	System.out.println("*   6- Bebidas                *");
	System.out.println("*   7- Voltar                 *");
	System.out.println("*                             *");
	System.out.println("*******************************");
}



	public void adicionar(String tipo, List<Comidas> arrayComida) {
		System.out.println("Adicione a " + tipo + " e seu valor: ");
		Comidas comida = new Comidas();
		System.out.println("nome do(a) " + tipo + " :");
		String nomeItem = scanner.nextLine();
		comida.nome = nomeItem;
		System.out.println("valor do(a) " + tipo + " :");
		float precoItem = scanner.nextFloat();
		scanner.nextLine();
		comida.preco = precoItem;
		arrayComida.add(comida);
	}

	public void deletar(List<Comidas> arrayComida) {
		int delete;
		delete = scanner.nextInt();
		scanner.nextLine();
		arrayComida.remove(delete - 1);

	}
	
	public void editar(List<Comidas> arrayComida) {
		int editar;
		editar = scanner.nextInt();
		scanner.nextLine();
		System.out.println("insira o nome e preco novos");
		String nomeNovo = scanner.nextLine();
		float novoPreco =  scanner.nextFloat();
		scanner.nextLine();
		
			arrayComida.get(editar -1).nome = nomeNovo;
			arrayComida.get(editar -1).preco = novoPreco;
	}
		

	

	public void adicionarPedido(List<Comidas> arrayComida) {
		int itemIndex;
		
		System.out.println("Deseja pedir algo? s ou n ");
		
		String resposta = scanner.nextLine();
		if(resposta.equals("n")) {
			return;
		}
		System.out.println("Selecione o numero do pedido");
		itemIndex = scanner.nextInt();
		scanner.nextLine();
		Comidas item = new Comidas();
		String nomeItem = arrayComida.get(itemIndex - 1).nome;
		item.nome = nomeItem;
		float precoItem = arrayComida.get(itemIndex - 1).preco;
		item.preco = precoItem;
		conta.add(item);

		System.out.println(arrayComida.get(itemIndex - 1).nome + " adicionado");
	}
	
	

	

	public void carregarUmPorUm(String tipo, List<Comidas> arrayTipoComida) {
		Path caminho = Paths.get( tipo + ".csv");

		BufferedReader leitor = null;

		try {
			leitor = Files.newBufferedReader(caminho);

			String linha;
			for (linha = leitor.readLine(); linha != null; linha = leitor.readLine()) {
				String[] valores = linha.split(";");
				Comidas comida = new Comidas();
				comida.nome = valores[0];
				comida.preco = Float.parseFloat(valores[1]);
				arrayTipoComida.add(comida);
			}
		} catch (IOException exception) {
			System.out.println("erro na hora de ler");
		}
	}
}
