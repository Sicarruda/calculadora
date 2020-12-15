var listaNumeros = [];
var operadorNumerico = null;
var listaNumerosConvertidos = [];
var conta;
var exibeResposta = document.getElementById("resposta");
var numeroNegativo = false;

//Reseta todos os parametros para que a conta comece do zero
function resetarConta() {
  listaNumeros = [];
  conta = 0;
  listaNumerosConvertidos = [];
  operadorNumerico = null;
  exibeResposta.innerHTML = 0;
  numeroNegativo = false
}

//Essa função adiciona os números clicados pelo usuário em um array.
function adicionarNumeroLista(numero) {
  if (numeroNegativo == false) {
    listaNumeros.push(numero);
    exibeResposta.innerHTML = listaNumeros.join("");
  } else {
    listaNumeros.push(numero);
    exibeResposta.innerHTML = "-" + listaNumeros.join("");
  }
}

/*A função convertendoNumeroLista converte os números unitarios clicados pelo usuário em um 
unico número guardando esse valor em outro array. */
function convertendoNumeroLista() {
  var stringElementoNumerico;
  var elementoNumerico;
  if (numeroNegativo == false) {
    stringElementoNumerico = listaNumeros.join("");
    elementoNumerico = parseFloat(stringElementoNumerico);
    listaNumeros = [];
    return elementoNumerico;
  } else {
    stringElementoNumerico = listaNumeros.join("");
    elementoNumerico = parseFloat(stringElementoNumerico);
    listaNumeros = [];
    elementoNumerico = elementoNumerico * -1;

    return elementoNumerico;
  }
}
/*A função adicionarOperador adiciona a conta o operador selecionado pelo usuário, chama a 
função convertendoNumeroLista para obter a as duas primeiras partes da operação.*/
function adicionarOperadores(operador) {
  listaNumerosConvertidos.push(convertendoNumeroLista());

  if (isNaN(listaNumerosConvertidos[0])) {
    listaNumerosConvertidos.splice(0, 1);
  } else if (isNaN(listaNumerosConvertidos[1])) {
    listaNumerosConvertidos.splice(1, 1);
  }

  fazerConta(listaNumerosConvertidos);

  if (operador === "somar") {
    operadorNumerico = operador;
    numeroNegativo = false;
  } 
  else if (operador === "subtrair") {
    if (listaNumerosConvertidos.length == 0) {
      numeroNegativo = true;
    } else if (operadorNumerico !== "subtrair" && operadorNumerico !== null) {
      numeroNegativo = true;
    } else {
      operadorNumerico = operador;
      numeroNegativo = false;
    }
  } else if (operador === "dividir") {
    operadorNumerico = operador;
    numeroNegativo = false;
  } else if (operador === "multiplicar") {
    operadorNumerico = operador;
    numeroNegativo = false;
  } else if (operador === "resultado") {
    if (listaNumerosConvertidos.length == 2) {
      operadorNumerico = null;
      numeroNegativo = false;
      listaNumerosConvertidos.splice(0, 2);
    }
  }
}

/*A função fazerConta faz a conta solicitada pelo
usuário.*/
function fazerConta(arrayNumeros) {
  if (listaNumerosConvertidos.length == 2 && numeroNegativo == false) {
    if (operadorNumerico === "somar") {
      conta = arrayNumeros[0] + arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " + " + arrayNumeros[1] + " = " + conta;
    } else if (operadorNumerico === "subtrair") {
      conta = arrayNumeros[0] - arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " - " + arrayNumeros[1] + " = " + conta;
    } else if (operadorNumerico === "dividir") {
      conta = arrayNumeros[0] / arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " ÷ " + arrayNumeros[1] + " = " + conta;
    } else if (operadorNumerico === "multiplicar") {
      conta = arrayNumeros[0] * arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " x " + arrayNumeros[1] + " = " + conta;
    }
    listaNumerosConvertidos.push(conta);
    listaNumerosConvertidos.splice(0, 2);
    operadorNumerico = null;
  }
  
  if (listaNumerosConvertidos.length == 2 && numeroNegativo == true) {
    if (operadorNumerico === "somar") {
      conta = arrayNumeros[0] + arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " + " + "(" + arrayNumeros[1] + ")" + " = " + conta;
    } else if (operadorNumerico === "subtrair") {
      conta = arrayNumeros[0] - arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " - " + "(" + arrayNumeros[1] + ")" + " = " + conta;
    } else if (operadorNumerico === "dividir") {
      conta = arrayNumeros[0] / arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " ÷ " + "(" + arrayNumeros[1] + ")" + " = " + conta;
    } else if (operadorNumerico === "multiplicar") {
      conta = arrayNumeros[0] * arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " x " + "(" + arrayNumeros[1] + ")" + " = " + conta;
    }
    listaNumerosConvertidos.push(conta);
    listaNumerosConvertidos.splice(0, 2);
    operadorNumerico = null;
  }
}
