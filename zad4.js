// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var decimalNum =
  readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decimalNum < -2147483648) || (decimalNum > 2147483647)) {
  console.log("Podana liczba jest za duża/mała!");
  decimalNum =
    readlineSync.questionInt("Podaj liczbę całkowitą: ");
}
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
// Tablica przechowująca bity zapisu ZM
var zmTable = [];
// Zmienna przechowująca bit znaku dla ZM
var sign = decimalNum < 0 ? 1 : 0;

// Przeliczenie dla formatu ZM
zmBuf = Math.abs(decimalNum);

while(true) {
  zmTable.unshift(zmBuf % 2)
  zmBuf = Math.floor(zmBuf / 2);

  // Jeśli liczba po kolejnym dzieleniu jest ułamkiem
  // przerwij pętlę i dodaj bit znaku
  if (zmBuf < 1) {
    zmTable.unshift(sign);
    break;
  }
}
// </editor-fold>

// <editor-fold desc="Konstrukcja wiadomości końcowej">
  // Dla ZM
  zmString = sign + ".";
  for (let i = 1; i < zmTable.length; i++) {
    zmString += zmTable[i];
  }
  result += decimalNum + " (10)  =  " + zmString + " (ZM)";
// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
