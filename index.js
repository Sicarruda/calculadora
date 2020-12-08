var listaNumeros = [];
var fimDaLista = false;
var listaElementosNumericos = [];
var operadorNumerico;

function adicionarNumeroLista(numero) {
  if (
    numero === "somar" ||
    numero === "dividir" ||
    numero === "multiplicar" ||
    numero === "subtrair"
  ) {
    fimDaLista = true;
    criandoElementoNumerico(listaNumeros);
  } else {
    listaNumeros.push(numero);
  }
}

function criandoElementoNumerico(array) {
  if (fimDaLista == true) {
    var stringElementoNumerico = array.join("");
    var elementoNumerico = parseInt(stringElementoNumerico);
    fimDaLista = false;
    return elementoNumerico;
  }
}

function adicionarOperadores(operador) {
  if (operador === "somar") {
    operadorNumerico = operador;
  } else if (operador === "subtrair") {
    operadorNumerico = operador;
  } else if (operador === "dividir") {
    operadorNumerico = operador;
  } else if (operador === "multiplicar") {
    operadorNumerico = operador;
  }
}
