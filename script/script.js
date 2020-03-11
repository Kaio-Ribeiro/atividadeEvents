const criarTarefa = function(){
	const novaTarefa = document.getElementById('novaTarefa').value

	let lista = document.getElementById('listaFazer')
	let li = document.createElement('li')
	let label = document.createElement('label')
	let input = document.createElement('input')
	input.type = "checkbox"

	li.append(label)
	label.append(input)
	label.append(novaTarefa)
	lista.append(li)

	input.addEventListener('click', function(){
		let listaFeitos = document.getElementById('listaFeitos')

		input.type = "hidden"
		listaFeitos.append(li)

		let botaoExcluir = document.createElement('button')
		botaoExcluir.type = "button"
		let textoButao = document.createTextNode('x')

		botaoExcluir.append(textoButao)
		li.append(botaoExcluir)

		botaoExcluir.addEventListener('click', function(){
			listaFeitos.removeChild(li)
		})
	})
}

let butao = document.getElementById('butao')
butao.addEventListener('click', criarTarefa)