
Tudo sobre o *exercício* de hoje já está no conteúdo da *aula passada*, assim como a entrega do *trabalho* de sexta-feira.

##### Links no Obsidian!
Para o exercício de hoje da **carteirinha**: [[Aula 05 - Exercício de CSS]]
Para informações sobre a **entrega avaliativa** da próx. aula: [[Guia de Viagem]]

#### A entrega é na próxima aula!
Importante lembrar porque é uma atividade simples que vocês já têm quase pronta, e o limite é na sexta. As pastas para entrega estão no drive seguindo as orientações que estão no:
- No **README** com avisos sempre atualizados
- Na pasta `atividades > guia de viagem` um `.md` com informações do trabalho
- Na pasta `atividades > guia de viagem > entregas` um `.md` com informações da entrega


---

# Exercício de hoje

Como já vimos as instruções da atividade na aula passada, não serei redundante, então vou deixar no lugar umas **colinhas interessantes de CSS**, assim vocês conseguem:
- Buscar *propriedades* que eu talvez tenha usado no *meu exemplo*
- Experimentarem *propriedades novas* que possam ajudar a estilizar

> Aqui vão as colinhas

### Seletores CSS
| Seletor                     | Exemplo  | Descrição do exemplo                                |
| --------------------------- | -------- | --------------------------------------------------- |
| `#id`                       | `#nome`  | Seleciona o elemento com `id=nome`                  |
| **.classe**                 | `.azul`  | Seleciona todos os elementos com `class="azul"`     |
| **elemento.classe**         | `p.azul` | Seleciona apenas elementos `<p>` com `class="azul"` |
| *****                       | `*`      | Seleciona todos os elementos                        |
| **elemento**                | `p`      | Seleciona todos os elementos `<p>`                  |
| **elemento1, elemento2...** | `div, p` | Seleciona todos os elementos `<p>` e `<head>`       |

### Propriedades de fonte
| **Propriedade**                                                              | **Descrição**                                                   | **Sintaxe**                               |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------- |
| **[Font-family](https://www.geeksforgeeks.org/css-font-family-property/)**   | Família da fonte, fonte escolhida deve ser padrão ou importada  | font-family:  <br>family-name;            |
| **[Font-style](https://www.geeksforgeeks.org/css-font-style-property/)**     | Estilo da fonte, só serve pra deixar em itálico                 | font-style:  <br>italic \| oblique;       |
| **[Font-variant](https://www.geeksforgeeks.org/css-font-variant-property/)** | Variante da fonte, só serve pra deixar em "small caps"          | font-variant:  <br>small caps;            |
| **[Font-weight](https://www.geeksforgeeks.org/css-font-weight-property/)**   | Grossura da fonte, geralmente usados números do "peso da fonte" | font-weight:  <br>bold \| number;         |
| **[Font-size](https://www.geeksforgeeks.org/css-font-size-property/)**       | Tamanho da fonte                                                | font-size:  <br>small \| medium \| large; |

### Propriedades de texto
| **Propriedade**                                                                       | **Descrição**                                                                                          | **Sintaxe**                                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **[Text-color](https://www.geeksforgeeks.org/css-color-property/)**                   | Cor do texto, apenas "color"                                                                           | color: value;                                                           |
| **[Text-alignment](https://www.geeksforgeeks.org/css-text-align-property/)**          | Alinhamento horizontal do texto (justificado, esquerda, direita etc)                                   | text-align:  <br>left \| right \| center \| justify;                    |
| **[Text-decoration](https://www.geeksforgeeks.org/css-text-decoration-property/)**    | Aplica 'estilos' no texto como sublinhado, riscado etc. Pode ser usado para 'limpar' o estilo de links | text-decoration:  <br>none \| decoration-type;                          |
| **[Text-transformation](https://www.geeksforgeeks.org/css-text-transform-property/)** | Texto em 'título', todo em maiúsculo, todo minúsculo etc                                               | text-transform:  <br>none \| capitalize \| uppercase \|  <br>lowercase; |
| **[Text-indentation](https://www.geeksforgeeks.org/css-text-indent-property/)**       | Recuo na primeira linha do texto                                                                       | text-indent:  <br>length;                                               |
| **[Letter spacing](https://www.geeksforgeeks.org/css-letter-spacing-property/)**      | Espaçamento entre letras do texto                                                                      | letter-spacing:  <br>length;                                            |
| **[Line height](https://www.geeksforgeeks.org/css-line-height-property/)**            | Espaçamento entre linhas do texto                                                                      | line-height:  <br>number \| length \|  <br>percentage;                  |
| **[Text-shadow](https://www.geeksforgeeks.org/css-text-shadow-property/)**            | Sombreamento no texto                                                                                  | text-shadow:  <br>h-shadow v-shadow  <br>blur-radius  <br>color;        |
| **[Word spacing](https://www.geeksforgeeks.org/css-word-spacing-property/)**          | Espaçamento entre palavras do texto                                                                    | word-spacing:  <br>length;                                              |

### Propriedades de "caixa" (margem, borda, tamanho etc)
| **Propriedade**                                                   | **Descrição**                                                                                              | **Sintaxe**     |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------- |
| **[Margin](https://www.geeksforgeeks.org/css-margins-padding/)**  | Margem! 'Empurra' o conteúdo de fora da caixa                                                              | margin: valor;  |
| **[Padding](https://www.geeksforgeeks.org/css-margins-padding/)** | Padding! É o espaço entre a borda e o conteúdo de dentro do elemento                                       | padding: valor; |
| **[Border](https://www.geeksforgeeks.org/css-border-property/)**  | Pode definir os [estilos da borda](https://www.w3schools.com/cssref/pr_border.php), assim como seu tamanho | border: valor;  |
| **[Width](https://www.geeksforgeeks.org/css-width-property/)**    | Usado para definir a largura do elemento                                                                   | width: valor;   |
| **[Height](https://www.geeksforgeeks.org/css-height-property/)**  | Usado para definir a altura do elemento                                                                    | height: valor;  |

### Propriedades de estilização (fundo, cor, borda)
| **Propriedade**                                                                      | **Descrição**                                                                                                                                 | **Sintaxe**                                          |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **[Background-color](https://www.geeksforgeeks.org/css-background-color-property/)** | Cor do fundo                                                                                                                                  | background-color:  <br>color_name;                   |
| **[Background-image](https://www.geeksforgeeks.org/css-background-image-property/)** | Imagem como fundo, tem [outras várias prioridades](https://www.w3schools.com/cssref/css3_pr_background.php) pra ajudar a ajustar essa imagem. | background-image:  <br>url(‘url’);                   |
| **[Border Color](https://www.geeksforgeeks.org/css-border-color-property/)**         | Cor da borda. Só funciona quando especificado um `border-style`                                                                               | border-color:  <br>color-value;                      |
| **[Border Style](https://www.geeksforgeeks.org/css-border-style-property/)**         | Estilo da borda, sólido, pontilhado, tracejado etc                                                                                            | border-style:  <br>value;                            |
| **[Border Width](https://www.geeksforgeeks.org/css-border-width-property/)**         | Largura da borda, muda o quão grossa ela fica                                                                                                 | border-width:  <br>length \| thin \| medium \| thick |

---

#### "Professor, como eu faço a sombrinha?"

Aqui temos uma documentação TOP sobre o `drop-shadow`, que é uma **função CSS**, e também um sitezinho pra vocês gerarem com facilidade as sombras de vocês:
- [Documentação do Mozilla sobre o drop-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
- [Gerador de sombras (drop-shadow) CSS](https://webcode.tools/css-generator/drop-shadow)
