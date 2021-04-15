var campoFiltro = document.querySelector("#filtrar-tabela");

// console.log(campoFiltro); //Para testar
// Agora:  incluir um escutador de evento:

campoFiltro.addEventListener("input", function() { //função anônima com a ação que deve ser feita ao digitar no campo do filtro
	//console.log("digitaram algo no filtro"); //Teste de digitação no campo-ok
	//console.log(campoFiltro.value); //Lê tudo o que for escrito a cada caractere
	console.log(this.value); // referente ao campoFiltro

	//Agora que temos leitura do filtro, precisamos comparar com cada nome da tabela
	var pacientes = document.querySelectorAll(".paciente");  //Montar array

	//Verificar se algo foi digitado:
	if(this.value.length>0){
		console.log("algo digitado"); //algo digitado? Então execute o seguinte:

		for (var i = 0; i < pacientes.length; i++) {
				var paciente = pacientes[i];
				var tdNome = paciente.querySelector(".info-nome");
				var nome = tdNome.textContent;
				//Expressão Regular do JS, ele busca: qual e como
				
				nome.substr(0, this.value.length);  //ALTERAÇÂO


				///var expressao = new RegExp(this.value, "i"); // i = insensitive, busca maiúsculas ou minúsculas
				// Agora precisamos testar p/ ver se o nome do paciente tem pelo menos 1 pedaço da busca
				///if( !expressao.test(nome)){ // você passa para o .text o que você quer testar
					
				var comparavel = nome.substr(0, this.value.length); //ALTERAÇÂO

				var comparavelMinusculo = comparavel.toLowerCase();
				var valorDigitadoMinusculo = this.value.toLowerCase();

				if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
				///if (!(this.value == comparavel)) {

					paciente.classList.add("invisivel");  //Coloca a classe invisível se for diferente do filtro
				}else{
					paciente.classList.remove("invisivel");
				}
		}
	}else{ //Se não há nada digitado, então a lista deve estar completa, sem remoção:
			for (var i = 0; i < pacientes.length; i++) {
				var paciente = pacientes[i];
				paciente.classList.remove("invisivel");
			}

		};
});