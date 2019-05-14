// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var n = readlineSync.questionInt("Podaj liczbę (> 0): ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program" >
// Algorytm Euklidesa
var euklid = function (n1, n2) {
  // Ustalenie, która liczba jest większa
  let a;
  let b;
  if (n1 >= n2) {
    a = n1;
    b = n2;
  } else {
    b = n1;
    a = n2;
  }

  // Obliczenia
  while (b !== 0) {
    let c = a % b;
    a = b;
    b = c;
  }

  return a;
}

//Tablica 2D zawięrająca zmienne boolean
var a = [];
for (let i = 0; i < n; i++) {
  a[i] = [];
  for (let j = 0; j < n; j++) {
    a[i][j] = (euklid(i+1,j+1) === 1);
  }
}
// </editor-fold>

// Konstrukcja wiadomości końcowej
for (let j = 0; j < n; j++) {
  for (let i = 0; i < n; i++) {
    result += a[i][j] ? "+" : ".";
  }
  result += "\n";
}

//Wyświetlanie wyniku działania
console.log(result);
