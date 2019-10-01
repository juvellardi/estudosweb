var form = document.getElementById('form');
var tarefa = document.getElementById('tarefa');
var lista = [];
var listaTarefas = document.getElementById('listaTarefas');
var preco = document.getElementById('preco');

var chave = 'lista';

form.addEventListener('submit', function(event){
	event.preventDefault();

	var valor = tarefa.value;

	lista.push(valor);

	addLista(lista);
	verificarLista();
	tarefa.value = '';
})

function addLista(lista){
	var listaJSON = JSON.stringify(lista);
	
	localStorage.setItem(chave, listaJSON);
}

function verificarLista(){
	var verificador = localStorage.getItem(chave);

	if(verificador == null){
		console.log('lista vazia');
	} else {
		listaTarefas.innerHTML = '';

		lista = JSON.parse(verificador);

		lista.forEach(function(item){
			var listItem = document.createElement('li');
			listItem.innerHTML = item;
			listaTarefas.appendChild(listItem);

		})
	}
}

verificarLista();