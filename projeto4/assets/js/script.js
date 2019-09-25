var formulario = document.getElementById('formulario');
var titulo = document.getElementById('titulo');
var valor = document.getElementById('valor');
var listagem = document.getElementById('listagem');

console.log(formulario);
console.log(titulo);
console.log(valor);
console.log(listagem);

formulario.addEventListener('submit', function(event){
	event.preventDefault();

	if(titulo.value == '' || valor.value == ''){
		alert('Preenchimento obrigatório!');
	} else {
		var linha = document.createElement('tr');
		var colunaTitulo = document.createElement('td');
		var colunaValor = document.createElement('td');

		colunaTitulo.innerHTML = titulo.value;
		colunaValor.innerHTML = valor.value;

		linha.appendChild(colunaTitulo);
		linha.appendChild(colunaValor);

		listagem.appendChild(linha);

		titulo.value = '';
		valor.value = '';
	}
});
