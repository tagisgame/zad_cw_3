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
// Zmienna przechowująca bit znaku dla ZM i ZU1
var sign = decimalNum < 0 ? 1 : 0;

// Przeliczenie dla formatu ZM
zmBuf = Math.abs(decimalNum);

while(true) {
  zmTable.unshift(zmBuf % 2);
  zmBuf = Math.floor(zmBuf / 2);

  // Jeśli liczba po kolejnym dzieleniu jest ułamkiem
  // przerwij pętlę i dodaj bit znaku
  if (zmBuf < 1) {
    zmTable.unshift(sign);
    break;
  }
}

// Tablica przechowująca bity zapisu ZU1
var u1Table = [];
// Przeliczenie dla formatu ZU1
u1Buf = Math.abs(decimalNum);

while(true) {
  //Negacja każdego bitu, jeśli liczba jest ujemna
  if (sign === 1) {
    u1Table.unshift(u1Buf % 2 === 1 ? 0 : 1);
  } else {
    u1Table.unshift(u1Buf % 2);
  }
  u1Buf = Math.floor(u1Buf / 2);

  // Jeśli liczba po kolejnym dzieleniu jest ułamkiem
  // przerwij pętlę i dodaj bit znaku
  if (u1Buf < 1) {
    u1Table.unshift(sign);
    break;
  }
}

// Tablica przechowująca bity zapisu ZU2
var u2Table = [];
// Przeliczenie dla formatu ZU2
u2Buf = Math.abs(decimalNum);

// Krok 1: Pobieramy z zmTable wartość binarną liczby
for (let i = 1; i < zmTable.length; i++) {
  u2Table.unshift(zmTable[i]);
}
// Krok 2: Ustalenie liczby bitów do zapisu
var u2Bits = 0;
if (u2Table.lenght > 0 || u2Table.length <= 4) {
  u2Bits = 4;
} else if (u2Table.length <= 8) {
  u2Bits = 8;
} else if (u2Table.length <= 16) {
  u2Bits = 16;
} else {
  u2Bits = 32;
}
for (let i = 0; i < (u2Bits - u2Table.length); i++) {
  u2Table.unshift(0);
}
// Krok 3: Zamiana liczby na przeciwną w systemie U2
// jeśli liczba była ujemna!
if (sign === 1) {
  var oneOccured = false;
  for (let i = 1; i <= u2Table.length; i++) {
    if (oneOccured) {
      u2Table[u2Table.length-i] =
        u2Table[u2Table.length-i] === 1 ? 0 : 1;
      continue;
    }
    u2Table[u2Table.length-i] = u2Table[u2Table.length-i];
    oneOccured = (u2Table[u2Table.length-i] === 1);
  }
}
// </editor-fold>

// <editor-fold desc="Konstrukcja wiadomości końcowej">
  // Dla ZM
  zmString = sign + ".";
  // Dla ZU1
  u1String = sign + ".";
  // Dla ZU2
  u2String = "";
  for (let i = 1; i < zmTable.length; i++) {
    zmString += zmTable[i];
    u1String += u1Table[i];
  }
  for (let i = 0; i < u2Table.length; i++) {
    u2String += u2Table[i];
  }
  result += decimalNum + " (10)  =  " + zmString + " (ZM)\n";
  result += decimalNum + " (10)  =  " + u1String + " (ZU1)\n";
  result += decimalNum + " (10)  =  " + u2String + " (ZU2)";
// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
