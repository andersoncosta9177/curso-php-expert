// console.log("curso javascript")
// // alert("ok")
// document.writeln("ANDERSON MIGUEL COSTA")
// let nome = "Miguel santos ";
// let NOME = "Miguel "
// document.write(nome)
// document.write(NOME)

//COMETARIOS EM JAVASCRIPT COM DUAS BARRAS

/* COMENTARIOS EM JS COM BARRA E ASTERISO 
PARA COMENTAR EM MAIS DE UMA LINHA

*/


// var nome = "Marcos silva "
// var idade = 33;
// var adm = false;
// var city;
// city = "Brasilia"
// var n1 = 3, n2 = 34, n3 = 54;

// let e const
// const não pode ser altrado
// let texto = "frase de um texto"
// const pi = 3.14;
// texto = "nada"
// pi = 34; // dessa forma gera um erro pq a variavel e uma constante

// //infinity 
//  console.log(100/0)

//  //undefined
//  var valorIndefinido
//  console.log(valorIndefinido)

//  //Nan 
//  console.log(0/0)

//  //Boolean
//  var adm = true;
//  var streamer = false;

// null
// var nullo = null;
// console.log(nullo)


// let valor1 = 100;
// let valor2 = 20

// //adiçao 
// console.log(valor1 + valor2);

// //subtração
// console.log(valor1 - valor2)

// //divisão 
// console.log(valor1 / valor2)


// let nome  = "Anderson ";
// let sobrenome = "Miguel "
//  let fullName = nome + " " + sobrenome;
//  console.log(fullName)

// let frase = 'lorem ipsum dolor sit amet';
// let frase2 = "Minha vida e do mestre!";
// let frase3 = "Ola mundo, estou aqui"
// console.log(frase3.indexOf("mundo"))
// // let fraseInteira = frase+", "+frase2
// // console.log(frase)
// // console.log(frase2)
// // console.log(frase3)
// // console.log(fraseInteira)
// novaFrase = frase3.replace("mundo", "world")
// console.log(novaFrase)

// let condição_tempo = "nuvem";
// if(condição_tempo == "sol"){
//     console.log("Esta um bom tempo para pássear")
// }else{
//     console.log("O tempo nao esta bom para passear!")
// }

// let valor1 =  30;
// let valor2 = 10;

// if(valor1 === valor2){
//     console.log("os valores sao iguais")
// } else if(valor1 > valor2){
//     console.log(`${valor1} é maior que ${valor2}`)
// }else if(valor1 < valor2){
//     console.log(`${valor1} é menor que ${valor2}`)
// }



// let operador = 17;
// let res = (operador >= 18 ? "Pode votar":"não pode votar")
// console.log(res)


// let age = 23;
// switch (age) {
//     case age = 18:
//         console.log("Voto obrigatorio")
//         break;
//     case age = 2:
//         console.log("Segunda")
//         break


// }

// let nomes = ["Anderson", "Miguel", "Vanda", "Lana"]
// console.log(nomes)
// console.log(nomes.length)
// console.log(nomes.push("maria"))
// console.log(nomes)
// nomes[1] = "Fernando"
// console.log(nomes)
// let nomes = ["Anderson", "Miguel", "Vanda", "Lana"]
// let nomes2 = ["fabio", "renato","haigo"]
// nomes.push("Adriana")
// console.log(nomes)
// nomes.reverse()
// console.log(nomes)
// nomes.shift()
// console.log(nomes)
// nomes.pop()
// console.log(nomes)
// nomes.unshift()
// console.log(nomes)
// console.log(nomes.concat(nomes2))
// console.log(nomes.includes("Miguel"))
// console.log(nomes.concat(nomes2).join(" * "))
// console.log(nomes.concat(nomes2).sort())
// console.log(nomes.concat(nomes2).reverse())
// console.table(nomes.concat(nomes2))

// let n  = [6,8,45,1,34,12];
// // n.sort()
// console.log(n)
// console.log(n.reverse())


// let valor = 0;

// while(valor <= 10){
//     console.log(valor)
//     valor++
// }



// for(let v = 0; v <= 10; v ++){
//     console.table(v)
// }


// let n = [1,2,3,4,5,6,7,8,9,10, 11]
// for(valor in n){
//     console.log(valor)
// }



// for(nome of nomes){
//     console.table(nome)
// }

// nomes.forEach( (n)=>{
//     console.log(n)
// })




//  function soma(n1,n2){

//     console.log(n1 + n2)

//  }



// soma(3,3)
//  console.log(res)


// function chamaFunçao(){
//     console.log("Ola mundo!!!")
// }

// chamaFunçao()

// function add(a,b){
//     return a + b
// }
// let res = add(123,344)
// console.log(`Resultado: ${res}`)

// function saudacao(mensagem = "Bom dia"){
//     console.log(mensagem)
// }
// saudacao()
// saudacao("Boa tarde")
// saudacao("Boa noite")



// const add =(a,b)=>{
//     return a + b
// }
// add(3,4)
// console.log(add(3,45 ))

// let add = b  =>   b +5
// console.log(add(2))

// let valor = 10;
// function escrever(){
//     console.log("Funcao: " +  valor)
// }

// escrever()
// console.log(valor)

// for(let i =1;i < 10; i++){
//     console.log(i)
// }

// [let pessoa = {
//     nome: "Anderson",
//     idade: 32,
//     apelido: "Galego",
//     genero: "Masculino",

//     // meet: function(){
//     //     return this.nome + ", Apelido: "  + this.apelido
//     // },
// }
// // console.log(pessoa.meet())
// pessoa.email = "Andeson@gmail.com"
// pessoa.numeroTel = "61987653422"
// delete pessoa.genero
// for(let props in pessoa){
//     console.log(pessoa[props])
// }


// let trasnporte = {
//     tipo: "automovel",
//     ano: 2023,
//     marca: "Audi"
// }



// let novo_transporte = trasnporte;
// novo_transporte.marca = "Mercedes"
// console.log(trasnporte)
// console.log(novo_transporte)


// let elemento = null;
// elemento = document.documentElement;
// console.log(elemento)
// console.log(typeof(elemento))
// console.log(elemento.lang)

// elemento  = document.head
// console.log(elemento)
// console.table(elemento)


// console.log(document.getElementById('titulo'))
// let e  = document.getElementById('titulo')

// // console.log(e.id)
// // console.log(e.className)
// console.log(e.innerHTML)
// function mudaTexto(){
//   let texto =   document.getElementById('titulo');
//   texto.innerHTML = "Anderson miguel costa"
// }

// let e = document.getElementsByName('h1');
// console.log(e)

// let el = document.getElementsByTagName('p');
// console.log(el.length)

// let e = document.querySelector("#titulo");
// console.log(e)

// let e = document.querySelector('p');
// console.log(e);

// let e = document.querySelectorAll('div');
// console.log(e)

// let el = document.querySelectorAll('[name]');
// let e = document.querySelectorAll('p[name]')
// let e = document.querySelectorAll('[name="texto"]')

// document.querySelector('h1').style.color = "red"
// document.getElementsByTagName('h1').style.color = "purple"


// document.querySelector('h1').style.color = "red"
// document.querySelector('p').style.color = 'blue'

// let container = document.querySelector('section');
// console.log(container.className);

// container.className += " container-light";
