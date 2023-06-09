

function verificaChuteValido (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>FIM DE JOGO!</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
        }
        elementoChute.innerHTML +='<div>Valor Inválido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O numero Secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=`<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"> </i></div>`
    } else {
        elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"> </i></div>`
    }
}

function chuteInvalido (numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor ||  numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})