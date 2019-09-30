$('#Personagens').on('change', function(){
	chamarPersonagens(this.value);
}) 

function chamarPersonagens(valor){
	$.ajax({
	url: `https://swapi.co/api/people/${ valor }/`, //URL da request
	method: 'GET', //método da request
	beforeSend: function(){
		$('#cartao').html('<h2>Carregando, aguarde... </h2>');
	},
	success: function(resposta){ // funcao de sucesso
		$('#cartao').html( `<h3>${resposta.name} </h3>
		<p>Altura: ${resposta.height}</p>
		<p>Peso: ${resposta.mass}</p>
		<p>Cor do Cabelo: ${resposta.hair_color}</p>
			`);
		
	},
	error: function(problema){ //funcao de erro
		console.log(problema);
	}
})
}

