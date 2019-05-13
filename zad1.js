//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
var tab = [];
var min = Number.MAX_VALUE;
var max = Number.MIN_VALUE;
var sum = 0;
var avg = 0;

var result = "Wylosowane liczby:\n";
for (let i = 0; i < 10; i++){
  //Mnożnik określający czy liczba będzie ujemna
  let randSign = Math.random() < 0.5 ? -1 : 1;
  //Losowanie liczby
  let randNum = randSign * Math.trunc(Math.random() * 10);

  //Wyznaczanie min i max
  if (randNum < min) {
    min = randNum;
  } else if (randNum > max) {
    max = randNum;
  }

  //Suma
  sum += randNum

  //Wpisanie wartości do tablicy i do wiadomości końcowej
  tab[i] = randNum;
  result += randNum + "  ";
}

avg = sum / 10;
//Dodanie min,max i średniej do wiadomości końcowej
result += "\nMin: " + min +
  "  Max: " + max + "\n";
result += "Średnia: " + avg;

//Wyznaczenie ile elementów jest mniejszych, a ile większych od średniej
var smallerThanAvg = 0;
var biggerThanAvg = 0;
for (let i = 0; i < 10; i++) {
  if (tab[i] < avg) {
    smallerThanAvg++;
  } else if (tab[i] > avg) {
    biggerThanAvg++;
  }
}
result += "\nMniejszych od śr.: " + smallerThanAvg + "\n" +
  "Większych od śr.: " + biggerThanAvg;

//Wyświetlenie liczb w odwrotnej kolejności
result += "\nLiczby w odrwotnej kolejności:\n"
for (let i = 9; i >= 0; i--) {
  result += tab[i] + "  ";
}
// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
