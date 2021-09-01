# React Hooks

### Trabalhando com States e Effects no ReactJS

### **Introdução aos Hooks**

Foi implementado ao React a partir da versão 16.8. Seu objetivo é solucionar problemas como: Dificuldade na reutilização de códigos, componentes complexos e confusão com classes. Utilizando funções especiais que utilizam recursos do React.

------

### Agora vamos mostrar o funcionamento do useState e useEffect

Primeiro, vamos abordar a criação de um componente sem e com utilização de Hooks para que possamos comparar e termos uma melhor visão das diferenças. Os exemplos serão baseados em contagens simples, onde é possível aumentar e diminuir um determinado número.

#### **Como funciona um componente SEM Hooks?**

No código, visualize o componente chamado: Counter-SemHooks.

<img src="https://github.com/Rennan-sbarros/rennan-sbarros/blob/main/Diversos/Print-Hooks/SemHook.png" style="zoom:150%;" />

Podemos analisar o código e observar que um componente sem Hooks, não explora 100% do poder que o React oferece. 

Observando, teremos sempre que - na linha nº 6  - inserir, manualmente, o 'document.getElementById' para buscar o elemento e atualizá-lo. Isto dificultará nosso tempo de codificação e a probabilidade de cometer erros aumentará se tivermos um componente com diversas ações. 

#### **Como funciona um componente COM Hooks?**

1. Usando o useState: Este Hook cria um componente que usa estado, que terá memória. Teremos como retorno um par de valores: O valor do estado atual e uma função que atualiza o estado.

   <img src="https://github.com/Rennan-sbarros/rennan-sbarros/blob/main/Diversos/Print-Hooks/ComHooks.png" style="zoom:150%;" />
   
   Para exemplicar, vamos visualizar o código: 
   Na linha nº9 

   - O valor definido como 'quantity' = guarda e armazena todas as informações, representando o estado atual, o valor que será manipulado pelo 'setQuantity'.
   - O 'setQuantity' = Pega e atualiza.
   - No 'UseState(1)' = O valor inicial do estado, ou seja, a contagem irá iniciar em 1.

   Para manipularmos o valor do 'quantity', podemos simplesmente executar:
   `<button onClick={() => setQuantity(quantity + 1)}>Aumentar</button>`

2. Usando o useEffect: Uso de efeito. Como funciona? Pense em um remédio, especificamente, nos efeitos colaterais. Após ingerir o remédio, o corpo vai gerir um evento de efeito colateral. Ou seja, para cada evento, teremos um ou mais efeitos colaterais. 

   Temos 3 opções lógicas para implementá-los: Sem dependências, dependências vazias ou com dependências.

   - Sem dependência: Não colocamos o array ao final da função para que o efeito seja executado após cada renderização. É uma opção pouco utilizada em situações, com excessão da        necessidade de se ter uma problemática onde tenha a necessidade de fazer calcúlos pesados e complexos após cada renderização.
   - Com dependências vazias: Insere o array vazio ao final da função para que o efeito seja executado apenas uma única vez.
   - Com dependências(Utilizado): Com o array preenchido, sempre que o valor passado no array alterar o efeito será executado.

   Exemplo que utilizaremos: Seguindo o exemplo do ifood, ao clicar em acrescentar ou diminuir a quantidade de um determinado produto, o valor do produto será alterado,              simultaneamente. E a cada produto inserido, finjam que o produto seja uma mini esfihas de frango e terá um valor de 2 reais. 

   <img src=" https://github.com/Rennan-sbarros/rennan-sbarros/blob/main/Diversos/Print-Hooks/Ifood.png" style="zoom:150%;" />
  

   - useEffect: 
     - O nosso useEffect pegará a quantidade(value) e multiplicará por 2(valor da mini esfirra de frango), todas as vezes que o value for alterado. 
   - Função down:
     - 1º: O sinal de menos(-) mudará de cor se a quantidade(value) for menor ou igual a 1.
     - 2º: Se a quantidade(value) for maior que 0, será pego o estado atual para subtrair por 1.
   - Função Up:
     - 1º: Será pego a quantidade(value) e acrescentará mais 1.
     - 2º: A cada vez que a função up for usada, a cor voltará ao padrão.

------

### Observações:

- Por mais que tenha uma função de atualização do estado, nada impede que tenha outras funções para manipular o estado. No nosso código, temos a função down e up, mas cada uma com suas particularidades.
- Uma boa prática, é sempre utilizar set na propriedade do estado. [quantity, setQuantity].
- O que vimos? A utilização dos Hooks não precisa ser apenas para reservar ou atualizar um numero, podemos, por exemplo, usar o css para tornar as funções dinâmicas. 
- Referências:
  - https://www.garagemdigital.io/react-hooks-o-que-sao/
  - https://pt-br.reactjs.org/docs/hooks-overview.html

