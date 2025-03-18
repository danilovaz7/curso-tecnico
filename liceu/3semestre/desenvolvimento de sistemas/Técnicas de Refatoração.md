É o processo de alterar a estrutura interna de um código sem alterar seu comportamento externo, visando melhorar a legibilidade, a manutenção e a compreensão do código.
#### Técnica: Renomear variáveis e métodos

##### Definição
Envolve alterar o nome dos identificadores (variáveis, funções, métodos, etc) para que possa refletir mais claramente seu propósito, tipo ou ação que realizam. Nomes bem escolhidos tornam o código mais legível, facilitando o trabalho de outros desenvolvedores.
##### Importância 
 - Clareza: nomes descritivos tornam o código mais fácil de entender
 - Manutenção: facilita a manutenção e a atualização do código ao longo do tempo
 - Redução de erros: nomes claros ajudam a evitar confusões e erros.
#### Técnica: Extrair método
Consiste em dividir um bloco de código que realiza uma tarefa específica e transformá-lo em um método separado. Essa prática ajuda a aumentar a modularidade do código, tornando-o mais legível e fácil de testar
##### Definição
Identificar um grupo de instruções que tenham um propósito específico é movê-los para um novo método com um nome descritivo. O novo método pode então pode ser chamado a partir do código original, gerando um código mais limpo e organizado
##### Importância
- Reutilização: métodos extraídos podem ser reutilizados em diferentes partes do código, evitando duplicação
- Legibilidade: a separação de lógicas complexas em métodos menores torna o código mais fácil de entender
- Testabilidade: métodos menores são mais fáceis de testar, permitindo focar em uma única funcionalidade de cada vez
