// let idade = 21;
// console.log(idade);
// let altura = 182;
// console.log(altura);

// let valorIngressoAdulto = 20;
// valorIngressoAdulto = 30;
// console.log(valorIngressoAdulto)

// let nome = "Gandra";//String Literal
// let idade = 21;// Number Literal
// let estaAprovado = true;//Boolean
// let sobrenome ; //Undefined
// let corSelecionado = null //Redefinir um valor

//OBJETO
// let pessoa = {
//     nome: "Gandra",
//     idade: 25,
//     estaAprovado: true,
// };
// console.log(pessoa);

//Array
// let familia = [26,45,50,17]
// console.log(familia.length)
// console.log(familia[2])

//Functions
// Verbo + Substantivo
// corSite = "Azul";
// function resetaCor(cor,tonalidade){
//     corSite = cor + "" + tonalidade;
// }
// console.log(corSite);
// resetaCor("verde", "claro");
// console.log(corSite)

//Tipos de Funções
//Realizar uma tarefa, não devolve nada
// function dizerNome(){
//     console.log("Gandra");
// }
// dizerNome();
// // Faz um Calculo ou Operação e retorna Algo
// function MultiplicarPorDois(valor){
//     return valor * 2;
// }
// // console.log(MultiplicarPorDois(5))

// let resultado = MultiplicarPorDois(5)

// console.log(resultado);

//Operadores

// Operadores Aritiméticos(matematicos)
// let salario = 100;
// +, - , *, /, **
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// ++ --
// ++ = aumentar 1 
// -- = diminuir 1 

// let idade = 18;

// // console.log(idade++)
// // console.log(idade)

// // console.log(++idade)
// // console.log(idade)

// // console.log(idade--)
// // console.log(idade)

// console.log(--idade)
// console.log(idade)

//Operadores Atibuição
// let valorTecladoGamer = 100;
// // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// // valorTecladoGamer += valorTecladoGamer;
// // console.log(valorTecladoGamer);

// // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
// valorTecladoGamer -= valorTecladoGamer;
// console.log(valorTecladoGamer);

//Operadores de Igualdade

//Igualdade estrita
// === Alem de comparar os valores ele compara os tipos
// console.log (1 === 1);
// console.log ("1" === 1);

//Igualdade solta
// == compara os valores ignorando os tipos
// console.log (1 == 1);
// console.log ("1" == 1);

//Operador Ternario
//Tem um Cliente, 100 premium, comum
// let pontos = 200;
// let tipo = pontos > 100 ? "premium" : 'comum';
// console.log(tipo);

//Operadores Logicos
// Operador Logico  e (&&) = Retorna True se os dois operando forem TRUE
//console.log(true && true);
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//Operador Logico  ou (||) = Retorna True se um dos operandos forem True

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log("Pode Aplicar", podeAplicar);

// // Operador Logico NOT(!)

// let candidatoRecusado = !podeAplicar;

// console.log("Candidato Recusado", candidatoRecusado);

//Operadores de Comparação Logica Não Boolean
//Falsy = undefined, null, 0, false, "", NaN - Not a number
//Truthy = todos os valores que não são Falsy

// let corPersonalizada = "Vermelho";
// let corPadrao = "Azul";
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);

//Operadores Bitwise