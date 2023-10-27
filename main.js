const form = document.querySelector('form');
let formEValido = false

function validaCampo(a, b) { 
    if (b > a){
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')

    const mensagemSucesso = `${campoB.value} é maior que ${campoA.value}. tudo certo!`

    formEValido = validaCampo(campoA.value, campoB.value)
    
    const containerMensagemSucesso = document.querySelector('.success-message')
    
    const containerMensagemErro = document.querySelector('.error-message')

    if (formEValido) {
        containerMensagemErro.style.display = 'none'
        containerMensagemSucesso.innerHTML = mensagemSucesso
        campoA.value = ''
        campoB.value = ''
    } else {
        containerMensagemSucesso.innerHTML = ''
        containerMensagemErro.style.display = 'block'
    }
})