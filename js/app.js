let estoquePista = 100;
let estoqueCadeiraSup = 200;
let estoqueCadeiraInf = 400;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngressos = document.getElementById('qtd').value;

    if(verificaEstoque(tipoIngresso, qtdIngressos) == true) {
        alterarEstoque(tipoIngresso, qtdIngressos);
        atualizaEstoqueTela();

        alert('Compra realizada!');

    }

}

function alterarEstoque(tipo, qtd) {
    if(tipo == 'inferior') {
        estoqueCadeiraInf -= qtd;

    } else if(tipo == 'superior') {
        estoqueCadeiraSup -= qtd;
        
    } else if(tipo == 'pista') {
        estoquePista -= qtd;

    } 

}

function atualizaEstoqueTela() {
    document.getElementById('qtd-inferior').textContent = estoqueCadeiraInf;
    document.getElementById('qtd-superior').textContent = estoqueCadeiraSup;
    document.getElementById('qtd-pista').textContent = estoquePista;

}

function verificaEstoque(tipo, qtd) {
    if(tipo == 'inferior' && estoqueCadeiraInf < qtd) {
        alert('Ingressos para cadeira inferior indisponíveis!');
        return false;

    } else if(tipo == 'superior' && estoqueCadeiraSup < qtd) {
        alert('Ingressos para cadeira superior indisponíveis!');
        return false;

    } else if(tipo == 'pista' && estoquePista < qtd) {
        alert('Ingressos para pista indisponíveis!');
        return false;
        
    }

    return true;

}