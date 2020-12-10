var listaNumeros = [];
var operadorNumerico = null;
var listaNumerosConvertidos = [];
var conta;
var exibeResposta = document.getElementById("resposta");

//Reseta todos os parametros para que a conta comece do zero
function resetarConta() {
  listaNumeros = [];
  conta = 0;
  listaNumerosConvertidos = [];
  operadorNumerico = null;
  exibeResposta.innerHTML = 0;
}

//Essa função adiciona os números clicados pelo usuário em um array.
function adicionarNumeroLista(numero) {
  listaNumeros.push(numero);
  exibeResposta.innerHTML = listaNumeros.join("")
}

/*A função convertendoNumeroLista converte os números unitarios clicados pelo usuário em um 
unico número guardando esse valor em outro array. */
function convertendoNumeroLista() {
  var stringElementoNumerico;
  var elementoNumerico;
  stringElementoNumerico = listaNumeros.join("");
  elementoNumerico = parseInt(stringElementoNumerico);
  listaNumeros = [];
  return elementoNumerico;
}
/*A função adicionarOperador adiciona a conta o operador selecionado pelo usuário, chama a 
função convertendoNumeroLista para obter a as duas primeiras partes da operação.*/
function adicionarOperadores(operador) {
  listaNumerosConvertidos.push(convertendoNumeroLista());
  fazerConta(listaNumerosConvertidos);
  if (operador === "somar") {
    operadorNumerico = operador;
  } else if (operador === "subtrair") {
    operadorNumerico = operador;
  } else if (operador === "dividir") {
    operadorNumerico = operador;
  } else if (operador === "multiplicar") {
    operadorNumerico = operador;
  } else if (operador === "resultado") {
    operadorNumerico = null;
  }
}
/*A função fazerConta encerra o processo chamando novamente a função convertendoNumeroLista
para obter a segunda seguencia numerica e poder fazer a respeciva conta solicitada pelo
usuário.*/
function fazerConta(arrayNumeros) {
  if (listaNumerosConvertidos.length == 2) {
    if (operadorNumerico === "somar") {
      conta = arrayNumeros[0] + arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " + " + arrayNumeros[1] + " = " + conta;
      listaNumerosConvertidos.splice(0, 2);
      console.log(conta);
      return conta;
    } else if (operadorNumerico === "subtrair") {
      conta = arrayNumeros[0] - arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " - " + arrayNumeros[1] + " = " + conta;
      listaNumerosConvertidos.splice(0, 2);
      console.log(conta);
      return conta;
    } else if (operadorNumerico === "dividir") {
      conta = arrayNumeros[0] / arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " ÷ " + arrayNumeros[1] + " = " + conta;
      listaNumerosConvertidos.splice(0, 2);
      console.log(conta);
      return conta;
    } else if (operadorNumerico === "multiplicar") {
      conta = arrayNumeros[0] * arrayNumeros[1];
      exibeResposta.innerHTML =
        arrayNumeros[0] + " x " + arrayNumeros[1] + " = " + conta;
      listaNumerosConvertidos.splice(0, 2);
      console.log(conta);
      return conta;
    }
  }
}