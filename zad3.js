//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
// Macierz m
var m = [];

// <editor-fold desc="Tworzenie macierzy">
// Tworzenie macierzy i wypełnienie jej losowymi wartościami
for (let x = 0; x < 5; x++) {
  m[x] = [];
  for (let y = 0; y < 5; y++) {
    // Zmienna określająca znak losowanej liczby
    let randSign = Math.random() < 0.5 ? -1 : 1;

    // Losowana liczba z zakresu od -5 do 5 włącznie
    let randNum = randSign * Math.round(Math.random() * 5);

    // Wpisanie wartości do komórki (x,y)
    m[x][y] = randNum;
  }
}
// Konstrukcja wiadomości, aby wyświetlić macierz
result += "Wylosowana macierz:\n";
for (let y = 0; y < 5; y++) {
  for (let x = 0; x < 5; x++) {
    result += (m[x][y] < 0 ? " " : "  ") + m[x][y];
  }
  result += "\n";
}
// </editor-fold>

// <editor-fold desc="Wartości min, max">
// Wyznaczanie min wier. i max kol. oraz konstrukcja wiadomości
var rowMin = 6;
var colMax = -6;

result += "Minimalne wartości w wierszach:\n"
for (let y = 0; y < 5; y++) {
  for (let x = 0; x < 5; x++) {
    if (m[x][y] < rowMin) rowMin = m[x][y];
    console.log(m[x][y], rowMin);
  }
  result += y + (rowMin < 0 ? ": " : ":  ") + rowMin + "\n";
  rowMin = 6;
}

result += "Maksymalne wartości w kolumnach:\n"
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    if (m[x][y] > colMax) colMax = m[x][y];
    console.log(m[x][y], colMax);
  }
  result += x + (colMax < 0 ? ": " : ":  ") + colMax + "\n";
  colMax = -6;
}

// Wyznaczanie max i min przękątnych oraz konstrukcja wiadomości
var d1Max = -6;
var d2Min = 6;

for (let i = 0; i < 5; i++) {
  if (m[i][i] > d1Max) d1Max = m[i][i];
  if (m[i][4-i] < d2Min) d2Min = m[i][4-i];
}
result += "Maksimum na 1. przekątnej:" + (d1Max < 0 ? "" : " ") + d1Max;
result += "\nMinimum na 2. przekątnej:" + (d2Min < 0 ? " " : "  ") + d2Min;
// </editor-fold>

// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
