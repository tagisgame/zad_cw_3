//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
var m = [];

//Losowanie liczb
result = "Wylosowana macierz:\n";
for (let y = 0; y < 5; y++) {
  m[y] = [];
  for (let x = 0; x < 5; x++) {
    //Mnożnik określający czy liczba będzie ujemna
    let randSign = Math.random() < 0.5 ? -1 : 1;
    //Losowa liczba
    let randNum = randSign * Math.ceil(Math.random() * 5);

    m[y][x] = randNum
    result += ((randNum < 0) ? " " : "  ") + randNum;
  }
  result += "\n";
}
console.log(m)

//Minimalne wartości w wierszach i maksymalne w kolumnach
result += "Minimalne wartości w wierszach:\n";
for (let y = 0; y < 5; y++) {
  let min = Number.MAX_VALUE;
  for (let x = 0; x < 5; x++) {
    if (m[y][x] < min) min = m[x][y];
  }

  result += y + ":" + ((min < 0) ? " " : "  ") + min + "\n";
}

result += "Maksymalne wartości w kolumnach:\n";
for (let x = 0; x < 5; x++) {
  let max = Number.MIN_VALUE;
  for (let y = 0; y < 5; y++) {
    if (m[y][x] > max) max = m[x][y];
  }

  result += x + ":" + ((max < 0) ? " " : "  ") + max + "\n";
}

//Maks d1, min d2
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
for (let i = 0; i < 5; i++) {
  if (m[i][i] > max) max = m[i][i];
  if (m[4-i][i] < min) min = m[4-i][i];
}
result += "Maksimum na 1. przekątnej: " + max + "\n";
result += "Minimum na 2. przekątnej: " +  min;

// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
