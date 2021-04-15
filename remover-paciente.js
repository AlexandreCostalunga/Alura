//var pacientes = document.querySelectorAll(".paciente");

//var tabela = document.querySelector("table");
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener ("dblclick", function(event) {
	//var alvoEvento = (event.target);
	//var paiDoAlvo = alvoEvento.parentNode;   //(pai do evento, é o TR=paciente=remover-paciente

	//paiDoAlvo.remove();

	event.target.parentNode.classList.add("fadeOut"); //fadeOut é a transição da remoção
	setTimeout(function(){//Pede para esperar x tempo até executar o comando seguinte.
		event.target.parentNode.remove();
	},500);   //segura por 500 ms  
	

	console.log(this);  //testes
	//event.target.remove();   //remove exatamente o local clicado

});


//console.log(pacientes);

// pacientes.forEach(function(paciente){

// 	paciente.addEventListener("dblclick",console.log("Fui duplo-clicado"));

// 	paciente.addEventListener("dblclick",function(){     //Double click do mouse

// 			console.log("Fui duplo-clicado");
// 			this.remove();   //após clicar em um paciente, o THIS verifica QUEM está atrelado a este evento, qual paciente.

// 		});   

// });