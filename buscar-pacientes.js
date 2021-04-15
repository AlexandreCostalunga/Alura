//console.log("Vou buscar os pacientes");

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
	console.log("Buscando pacientes...");
	//Requisitando dados externos de uma API:
	var xhr = new XMLHttpRequest(); //Objeto JS responsável por requisições HTTP
	//Como fazer e para onde?
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");  //abre a requisição de conexão e qual o tipo (especificar)
	
	xhr.addEventListener("load", function(){//Quando EVENTO, faça a FUNCTION
	//Verificando erro de requisição antes de carregar as respostas:
		var erroAjax = document.querySelector("#erro-ajax");


		if( xhr.status ==200){

			erroAjax.classList.add("invisivel");

			//console.log(xhr.responseText); //Propriedade do XHR
			var resposta = xhr.responseText;  //Imprime as respostas
			console.log(typeof resposta);  //Mostra o TIPO de resposta
			console.log(resposta);
			var pacientes = JSON.parse(resposta); //Transforma o texto JS em Objetos JS
			console.log(pacientes);
			console.log(typeof pacientes);

			//Array para incluir estes pacientes na tabela com a função ADICIONA Paciente
			pacientes.forEach( function(paciente){

				adicionaPacienteNaTabela(paciente);
			});
		}else{
			console.log( xhr.status); //Diz se houve erro no console
			console.log( xhr.responseText); //E qual foi o erro
			
			erroAjax.classList.remove("invisivel");

		}


	});

	//Envia a requisição acima
	xhr.send();

});