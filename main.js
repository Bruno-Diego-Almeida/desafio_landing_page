let formulario = document.querySelector('#formulario')

formulario.onsubmit = function(e) { 
    e.preventDefault()

    let error = false

    let inputNome = document.forms['formulario']['nome']

    if(!inputNome.value) {
        error = true
        inputNome.classList.add('erro')
    }else {
        inputNome.classList.remove('erro')
    }

    let inputEmail = document.forms['formulario']['email']
    
    if(!inputEmail.value) {
        error = true
        inputEmail.classList.add('erro')
    }else {
        inputEmail.classList.remove('erro')
    }

    let inputCpf = document.forms['formulario']['cpf']

    if(!inputCpf.value) {
        error = true
        inputCpf.classList.add('erro')
    }else {
        inputCpf.classList.remove('erro')
    }

    let InputGenero = document.forms.formulario.genero
    let inputDadosSexo = document.querySelector('.sexo')


    if(InputGenero[0].checked == false && InputGenero[1].checked == false) {
        error = true
        inputDadosSexo.classList.add('erro')
    }else {
        inputDadosSexo.classList.remove('erro')
    }
    
    if(!error) {
        formulario.submit()
    }


}

let dadosAmigo = document.querySelector('#dadosAmigo')

dadosAmigo.onsubmit = function(e) { 
    e.preventDefault()

    let error = false

    let nomeAmigo = document.forms['dadosAmigo']['nomeAmigo']

    if(!nomeAmigo.value){
        error = true
        nomeAmigo.classList.add('erro')
    }else {
        nomeAmigo.classList.remove('erro')
    }

    let emailAmigo = document.forms['dadosAmigo']['emailAmigo']

    if(!emailAmigo.value){
        error = true
        emailAmigo.classList.add('erro')
    }else {
        emailAmigo.classList.remove('erro')
    }

    if(!error){
        dadosAmigo.submit()
        
    }

   
}


function transformarEmJson(response){
  return response.json()
}

function listaProduto(data) {

    const lista = data.products

    let posicoesProdutos = []

    lista.forEach(function(product){
        posicoesProdutos.push(
            `
                <div class="product">
                    <div>
                        <img src=${product.image}>
                    </div>
                    <div>
                        <h6>${product.name}<h6/>
                        <p>${product.description}<p/>
                        <span>De R$ ${product.oldPrice}<span>
                        <h5>Por R$ ${product.price}<h5/>
                        <span>ou: ${product.installments.count}x de R$ ${product.installments.value}<span/>
                        <button>Comprar<button/>
                    <div/>
                 </div>
            `)

                   
        
    })

    document.querySelector('.produtos').innerHTML = posicoesProdutos.join('')

}


const botao = document.querySelector('#botao')
const produtos = document.querySelector('#proximoProduto')


fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(transformarEmJson)
    .then(listaProduto)

    botao.addEventListener('click', () => {
        produtos.href = data.nextPage
    })








