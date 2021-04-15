			console.log("Fui carregado de um local externo");
			//alert("Olá Mundo!");
			//console.log(document); //document é uma variável, não fica entre aspas
			//console.log(document.querySelector("h1"));
			//var titulo = document.querySelector("h1");  //o query busca pela tag h1
			var titulo = document.querySelector(".titulo"); //busca por um seletor CSS:
			// agora o query busca por qualquer classe (.) com a tag titulo; não está
			// mais atrelada à tag h1, que pode mudar por outro desenvolvedor.
			console.log(titulo);   //Mostra o que tem em h1: <h1><Aparecida Nu...
			console.log(titulo.textContent);  //Mostra o conteudo de h1, ou seja, só o texto
			//titulo.textContent="Banana";  muda h1 para Banana
			titulo.textContent="Aparecida Nutricionista";  //Imprime novo conteúdo em h1
			//----------------------------------------------------------------------

			var pacientes = document.querySelectorAll(".paciente");
			// All diz que são selecionados todos os "paciente"s, e não somente o primeiro
			
			console.log(pacientes); // Traz um log com todos os pacientes


			// Para coletar os dados de todos, usamos um Loop:
		for(var i=0; i<pacientes.length;i++ ){
				console.log(pacientes[1]);

				var paciente = pacientes[i]; //Coloco a leitura da linha novamente
											// na variável anterior "paciente"

				var tdPeso = paciente.querySelector(".info-peso"); //note o ponto (.)

				var peso = tdPeso.textContent;

				var tdAltura = paciente.querySelector(".info-altura");
				var altura = tdAltura.textContent;
				// Abaixo criamos uma variável para coletar o cálculo do imc
				// e´posteriormente usar esta variável para inserir o content na tabela
				var tdImc = paciente.querySelector(".info-imc"); 

				//if(peso<0){ console.log("Peso inválido");	}

				var pesoEhValido = validaPeso(peso); //True ou False
				var alturaEhValida = validaAltura(altura);

				if(!pesoEhValido){  //||  as 2 barras é o OU lógico,  ! = NOT
						console.log("Peso inválido");
						pesoEhValido = false;
						tdImc.textContent = "Peso inválido";
						//paciente.style.backgroundColor="lightcoral"; //Fundo em vermelho
							//Detalhe: background + color, usa a 1*letra da 2* palavra
							// em upper case:   backgroundColor, fontSize, 
						paciente.classList.add("paciente-invalido"); //Adiciona classe CSS
						// Chama o CSS e muda a cor de fundo
				}

				if(!alturaEhValida){  //||  as 2 barras é o OU lógico
						console.log("Altura inválida");
						alturaEhValida = false;
						tdImc.textContent = "Altura inválida";
						paciente.style.backgroundColor="orange"; //Muda cor
				}

				console.log(paciente); //tr
				console.log(tdPeso); // td , é o peso
				console.log(peso); // espera-se obter o valor 100
				console.log(altura); //

				if(alturaEhValida && pesoEhValido){
					var imc = calculaImc(peso,altura);  // = 25 correto
					console.log(imc);
					tdImc.textContent = imc; //Insere o novo IMC calculado na tabela
											//toFixed(casas decimais)
				}
		}


function validaPeso(peso) {
	if(peso>=0&&peso<1000){return true;} else { return false;}
}
function validaAltura(altura) {
	if(altura>=0&&altura<3.0){return true;} else{return false;}
}



function calculaImc(peso,altura){
	var imc = 0;	
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}



// Detalhes de aprendizado
titulo.addEventListener("click",mostraMensagem); //evento do click do mouse em cima
					// do título Aparecida Nutricionista (que é o titulo)
titulo.addEventListener("click",function() {console.log("Esta é a funcao anonima");});
							 //função anônima
function mostraMensagem(){console.log("Olá, fui clicado!"); }		
