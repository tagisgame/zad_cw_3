//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
var tab = [];

//Losowanie liczb
result = "Wylosowane liczby: ";
for (let i = 0; i < 20; i++) {
  let randNum = Math.floor(Math.random() * 10) + 1;
  tab[i] = randNum;
  result += randNum + " ";
}

//Liczenie wystąpień
result += "\nWystąpienia:\n";
for (let i = 1; i <= 10; i++) {
  let count = 0;
  for (let j = 0; j < 20; j++) {
    tab[j] === i ? count++ : 0;
  }

  result += i + " - " + count + "\n";
}
// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
