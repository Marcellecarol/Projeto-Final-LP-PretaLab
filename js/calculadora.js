// Somar
function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos!");
      return;
  }
  let resultado = numero1 + numero2;
  document.getElementById("resultadoSoma").innerHTML = resultado;
}

// Subtrair
function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos!");
      return;
  }
  let resultado = numero1 - numero2;
  document.getElementById("resultadoSub").innerHTML = resultado;
}

// Multiplicar
function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos!");
      return;
  }
  let resultado = numero1 * numero2;
  document.getElementById("resultadoMult").innerHTML = resultado;
}

// Dividir
function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos!");
      return;
  }
  let resultado;
  if (numero2 !== 0) {
      resultado = numero1 / numero2;
  } else {
      resultado = "Erro: Divisão por zero";
  }
  document.getElementById("resultadoDiv").innerHTML = resultado;
}
