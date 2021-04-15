var botaoAdicionar = document.querySelector("#adicionar-paciente");
//botaoAdicionar.addEventListener("click",function() {console.log("cliquei no botão")});

botaoAdicionar.addEventListener("click",function(event){ //"escutador" de elemento
	event.preventDefault(); 		//Previne o comportamento padrão, ou seja, nesse
//caso, não recarrega a página e ainda mantém os dados que foram digitados nos campos
	console.log("o botão foi clicado");


	var form = document.querySelector("#form-adiciona"); //busca info do ID form do HTML
	// teste:   console.log(form); console.log(form.peso); //informa o log

// Extraindo informações do paciente do form
var paciente = obtemPacienteDoFormulario(form);
console.log(paciente);


// Cria a Tr e a Td do paciente
	

	//if(!validaPaciente(paciente)){ console.log("Paciente inválido"); return;} //Se inválido, ele sai da tabela
 	var erros = validaPaciente(paciente);
 	console.log(erros);
 	if(erros.length >0){
 		exibeMensagensDeErro(erros);
 		return;
 	}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Adicionando o paciente na tabela
	adicionaPacienteNaTabela(paciente);
	
	form.reset();  // Limpa campos após adicionar novo paciente.
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});
	//console.log(nome);
	//console.log(peso);
	//console.log(altura);
	//console.log(gordura);
	//console.log(pacienteTr);
	//console.log(form.altura.value);  testes
	//console.log(form.peso.value);
  //Fechamento do botão ADICIONAR 

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes"); 
	tabela.appendChild(pacienteTr);//Adiciona a nova linha à tabela
}




function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";   //Limpa as mensagens de erro que estiverem já resolvidas

	// xxx.forEach é outra forma de FOR:  abaixo, este forEach faz como:  for (var i=0; i<erros.lenght; i++){ ... }

	erros.forEach(function(erro) {  //significa:  para cada item do meu array, faça alguma coisa a seguir
		var li = document.createElement("li")
		li.textContent = erro;
		ul.appendChild(li);
	});

}




//Objetos, em programação, são coisas que representam o mundo real.  Ex:Paciente
//Para criar um objeto e propriedades, usa-se chaves:
function obtemPacienteDoFormulario(form){

	var paciente = {  //paciente = objeto
		nome: form.nome.value,  //nome = propriedade de paciente (final c/ , )
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;

	//var nome = form.nome.value;  //.value traz o valor do campo nome do form
	//var peso = form.peso.value;
	//var altura = form.altura.value;
	//var gordura = form.gordura.value;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	//Incluindo uma classe aos pacientes:
	pacienteTr.classList.add("paciente");

	//var nomeTd = document.createElement("td"); Se fosse 1 a 1, seria assim.
	//nomeTd.classList.add("info-nome");
	//nomeTd.textContent = paciente.nome;

	//var nomeTd = montaTd(paciente.nome, "info-nome");
	//var pesoTd = montaTd(paciente.peso, "info-peso");
	//var alturaTd = montaTd(paciente.altura, "info-altura");
	//var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	//var imcTd = montaTd(paciente.imc, "info-imc");


	//var pesoTd = document.createElement("td");
	//var alturaTd = document.createElement("td");
	//var gorduraTd = document.createElement("td");
	//var imcTd = document.createElement("td");

	//nomeTd.textContent = paciente.nome;
	//pesoTd.textContent = paciente.peso;
	//alturaTd.textContent = paciente.altura;
	//gorduraTd.textContent = paciente.gordura;
	//imcTd.textContent = paciente.imc;

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));	//Coloca como "filhos", um elemento dentro de outro
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	//pacienteTr.appendChild();

	return pacienteTr;
}


function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){

	var erros = [	];
// return "";} else { return "O peso é inválido";}

	if(paciente.nome.length == 0){ erros.push("Insira o nome do paciente");}

	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido"); //Se o IF é simples, não precisa de chaves, só  ;

	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

	if(paciente.gordura.length == 0){ erros.push("Insira o valor de gordura");}

	if(paciente.peso.length == 0){ erros.push("Insira o valor do peso");}
	if(paciente.altura.length == 0){ erros.push("Insira o valor da altura");}


	return erros;
}



