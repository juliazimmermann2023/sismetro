var valor;
var operacao;
var memoria = 0

function efetuar_soma() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));

    } else {
        valor = Number(document.getElementById("valor").value);


    }

    document.getElementById("valor").value = "";
    operacao = soma;
}

function resultado() {

    document.getElementById("valor").value = operacao(valor, Number(document.getElementById("valor").value));

    valor = undefined;
    operacao = undefined;

}


function insere_0() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(0)


}
function insere_1() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(1)


}
function insere_2() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(2)


}
function insere_3() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(3)


}
function insere_4() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(4)


}
function insere_5() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(5)



}
function insere_6() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(6)


}
function insere_7() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(7)


}
function insere_8() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(8)


}
function insere_9() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(9)



}

function apagar() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - 1)
}
function soma(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;

}
function divisao(n1, n2) {
    return n1 / n2;

}
function multiplicacao(n1, n2) {
    return n1 * n2;

}
function somar() {
   if(typeof valor!= typeof undefined && typeof operacao !=typeof undefined){
    valor = operacao(valor,Number (document.getElementById('valor').value))
   }
   else{
    valor=Number(document.getElementById('valor').value)
    document.getElementById('valor').value="";
   }
   operacao= soma
}
function subtrair() {
    if(typeof valor!= typeof undefined && typeof operacao !=typeof undefined){
        valor = operacao(valor,Number (document.getElementById('valor').value))
       }
       else{
        valor=Number(document.getElementById('valor').value)
        document.getElementById('valor').value="";
       }
       operacao= subtracao
}
function dividir() {
    if(typeof valor!= typeof undefined && typeof operacao !=typeof undefined){
        valor = operacao(valor,Number (document.getElementById('valor').value))
       }
       else{
        valor=Number(document.getElementById('valor').value)
        document.getElementById('valor').value="";
       }
       operacao= divisao
}

function multiplicar() {
    if(typeof valor!= typeof undefined && typeof operacao !=typeof undefined){
        valor = operacao(valor,Number (document.getElementById('valor').value))
       }
       else{
        valor=Number(document.getElementById('valor').value)
        document.getElementById('valor').value="";
       }
       operacao= multiplicacao
}
function apagar() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - document.getElementById("valor").value.length)
}
function add_ponto() {
    if (!document.getElementById("valor").value.includes(".")) {
        document.getElementById("valor").value =
            document.getElementById("valor").value.concat(".");
    }
}
function porcentagem(){
    if(typeof valor == typeof undefined){
        document.getElementById("valor").value =
        Number(document.getElementById("valor").value)/100;
    }else{
        document.getElementById("valor").value =
        (valor / 100) *
        Number(document.getElementById("valor").value)
    }
}

function addNumero() {
    valor = addnum(Number(document.getElementById('valor').value))
}
function menosNumero() {
    valor = menosnum(Number(document.getElementById('valor').value))
}
function apagarMemoria() {
    memoria = 0
}
function mostrarMemoria() {
    document.getElementById('valor').value = memoria
}
function addnum(n1) {
    memoria += n1 
}
function menosnum(n1) {
    memoria -= n1
    
}