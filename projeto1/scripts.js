// var nome = prompt("Qual o seu nome?");

//alert("Hello, " + nome + "!");
var titulo = document.getElementById('titulo');
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var botao = document.getElementById('button');
console.log(titulo);

botao.addEventListener('click', function(){
	var resultado = calcImc (peso.value, altura.value);

console.log(resultado);
titulo.innerHTML = "Seu IMC é " + resultado.toFixed(2);
})

function calcImc(peso, altura){
	var imc = parseFloat (peso) / parseFloat(altura * 2);
	
	return imc;

}