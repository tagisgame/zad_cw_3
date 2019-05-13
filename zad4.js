// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika

var decimalNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
while ((decimalNum < -2147483648) || (decimalNum > 2147483647)) {
  console.log("Podana liczba jest za duża/mała! (-2147483648 - 2147483647)");
  decimalNum = readlineSync.questionInt("Podaj liczbę całkowitą: ");
}
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
var binaryTable = [];
var sign = decimalNum < 0 ? 1 : 0;

result += "Liczba " + decimalNum + " binarnie: ";
decimalNum = decimalNum * (decimalNum < 0 ? -1 : 1);
while(true) {
  binaryTable.unshift(decimalNum % 2)
  decimalNum = Math.floor(decimalNum / 2);

  if (decimalNum < 1) {
    binaryTable.unshift(sign);
    break;
  }
}

for(let i = 0; i < binaryTable.length; i++){
  result += binaryTable[i] + (i === 0 ? "." : "");
}

// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
