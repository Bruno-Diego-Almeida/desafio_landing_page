let formulario = document.querySelector('#formulario')

formulario.onsubmit = function(e) { 
    e.preventDefault()

    let error = false

    let inputNome = document.forms['formulario']['nome']

    if(!inputNome.value) {
        error = true
        inputNome.classList.add('inputErro')
    }else {
        inputNome.classList.remove('inputErro')
    }

    let inputEmail = document.forms['formulario']['email']
    
    if(!inputEmail.value) {
        error = true
        inputEmail.classList.add('inputErro')
    }else {
        inputEmail.classList.remove('inputErro')
    }

    let inputCpf = document.forms['formulario']['cpf']

    if(!inputCpf.value) {
        error = true
        inputCpf.classList.add('inputErro')
    }else {
        inputCpf.classList.remove('inputErro')
    }

    let InputGenero = document.forms.formulario.genero
    let inputDadosSexo = document.querySelector('.sexo')


    if(InputGenero[0].checked == false && InputGenero[1].checked == false) {
        error = true
        inputDadosSexo.classList.add('inputErro')
    }else {
        inputDadosSexo.classList.remove('inputErro')
    }
    
    if(!error) {
        formulario.submit()
    }


}

