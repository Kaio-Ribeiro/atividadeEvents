const salvarTarefa = function(){
	const novaTarefa = document.getElementById('novaTarefa').value

	let lista = document.getElementById('listaFazer')
	let li = document.createElement('li')
	let input = document.createElement('input')
	input.type = "checkbox"

	li.append(input)
	li.append(novaTarefa)
	lista.append(li)
}


const excluirTarefa = function(){
	let lista = document.getElementById('listaFazer')
	let listaFeitos = document.getElementById('listaFeitos')


}

let butao = document.getElementById('butao')
	butao.addEventListener('click', salvarTarefa)