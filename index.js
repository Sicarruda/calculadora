var listaNumeros = [];
var operadorNumerico = null;
var listaNumerosConvertidos = [];
var resultado;

function adicionarNumeroLista(numero) {
  console.log(numero)
    listaNumeros.push(numero);
  
}

function convertendoNumeroLista() {
  var stringElementoNumerico;
  var elementoNumerico;
  if (listaNumerosConvertidos.length == 0) {
    stringElementoNumerico = listaNumeros.join("");
    elementoNumerico = parseInt(stringElementoNumerico);
    return elementoNumerico;
  } else {
    stringElementoNumerico = listaNumeros.join("")[1];
    elementoNumerico = parseInt(stringElementoNumerico);
    return elementoNumerico;
  }
}

function adicionarOperadores(operador) {
  console.log(operador)
  if (operador === "somar") {
    operadorNumerico = operador;
    listaNumerosConvertidos = [convertendoNumeroLista()];
  } else if (operador === "subtrair") {
    operadorNumerico = operador;
    listaNumerosConvertidos = [convertendoNumeroLista()];
  } else if (operador === "dividir") {
    operadorNumerico = operador;
    listaNumerosConvertidos = [convertendoNumeroLista()];

  } else if (operador === "multiplicar") {
    operadorNumerico = operador;
    listaNumerosConvertidos = [convertendoNumeroLista()];

  } else if (operador === "true") {
    resultado = true;
    fazerConta(listaNumerosConvertidos)
  } else {
    operadorNumerico = null;
  }
}

function fazerConta(arrayNumeros) {
  let conta;
  if (resultado == true) {
    if (operadorNumerico === "soma") {
      conta = arrayNumeros[0] + arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2);
      resultado = false;
    } else if (operadorNumerico === "subtrair") {
      conta = arrayNumeros[0] - arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2);
      resultado = false;
    } else if (operadorNumerico === "dividir") {
      conta = arrayNumeros[0] / arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2);
      resultado = false;
    } else if (operadorNumerico === "multiplicar") {
      conta = arrayNumeros[0] * arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2);
      resultado = false;
    }
  } else {
    if (operadorNumerico === "soma") {
      listaNumerosConvertidos.slice(0, 2, conta);
      conta = arrayNumeros[0] / arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2, conta);
    } else if (operadorNumerico === "multiplicar") {
      conta = arrayNumeros[0] * arrayNumeros[1];
      listaNumerosConvertidos.slice(0, 2, conta);
    }
  }
}


// function criandoElementoNumerico(array) {
//   if (fimDaLista == true) {
//     var stringElementoNumerico = array.join("");
//     var elementoNumerico = parseInt(stringElementoNumerico);
//     fimDaLista = false;
//     console.log(elementoNumerico);
//     return elementoNumerico;
//   }
// }

// function adicionarOperadores(operador) {
//   if (operador === "somar") {
//     operadorNumerico = operador;
//   } else if (operador === "subtrair") {
//     operadorNumerico = operador;
//   } else if (operador === "dividir") {
//     operadorNumerico = operador;
//   } else if (operador === "multiplicar") {
//     operadorNumerico = operador;
//   } else {
//     operadorNumerico = null;
//   }
// }

// console.log(elementoNumerico);
