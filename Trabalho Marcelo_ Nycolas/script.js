function pedir(){
    var valor = prompt('Digite uma opção de 1 a 8');

    switch (Number(valor)) {
        case 1:
            confirmaçao("Monitor");
            break;
        case 2:
            confirmaçao("Teclado");
            break;
        case 3:
            confirmaçao("Mouse");
            break;
        case 4:
            confirmaçao("Gabinete");
            break;
        case 5:
            confirmaçao("Placa de vídeo");
            break;
        case 6:
            confirmaçao("Memoria Ram");
            break;
        case 7:
            confirmaçao("HD externo");
            break;
        case 8:
            confirmaçao("Fonte");
            break;
            default:
                alert("Nois não possuimos esse item por favor escolha um que está na lista, agradecido.");
    }
}

function confirmaçao(item) {
    var confirmaçao = confirm("Você selecionou o item" + item + ", Confirmar a solicitação?");
    if (confirmaçao){
         alert("Solicitação confirmada");
    }else {
        alert("Solicitação Cancelada")
    }
       
}

function confirmarGerente(){
    var confirmar = confirm("Gostara de chamar o gerente?");
    if (confirmar) {
        alert("Gerente chamado, espere um instante.");
    } else {
        alert("Chamada do gerente cancelada.");
    }
}


