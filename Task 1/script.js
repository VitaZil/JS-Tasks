/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById("output");
const table = document.createElement("table");
const trEl1 = document.createElement("tr");
const thKilo = document.createElement("th");
const thPounds = document.createElement("th");
const thGrams = document.createElement("th");
const thOunces = document.createElement("th");
trEl1.append(thKilo, thPounds, thGrams, thOunces);
table.append(trEl1);
output.append(table);

document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();

  thKilo.innerText = "Kilograms (kg)";
  thPounds.innerText = "Pounds (lb)";
  thGrams.innerText = "Grams (g)";
  thOunces.innerText = "Pounds (oz)";

  const inputValue = document.querySelector('input[id="search"]').value;
  const trEl2 = document.createElement("tr");
  const tdKilo = document.createElement("td");
  const tdPounds = document.createElement("td");
  const tdGrams = document.createElement("td");
  const tdOunces = document.createElement("td");

  trEl2.append(tdKilo, tdPounds, tdGrams, tdOunces);
  table.append(trEl2);

  table.style.margin = "20px auto";
  table.style.border = "3px solid black";
  table.style.borderCollapse = "collapse";
  thKilo.style.border = "1px solid black";
  thPounds.style.border = "1px solid black";
  thGrams.style.border = "1px solid black";
  thOunces.style.border = "1px solid black";
  tdKilo.style.border = "1px solid black";
  tdPounds.style.border = "1px solid black";
  tdGrams.style.border = "1px solid black";
  tdOunces.style.border = "1px solid black";
  thKilo.style.padding = "20px";
  thPounds.style.padding = "20px";
  thGrams.style.padding = "20px";
  thOunces.style.padding = "20px";
  tdKilo.style.padding = "20px";
  tdPounds.style.padding = "20px";
  tdGrams.style.padding = "20px";
  tdOunces.style.padding = "20px";

  const poundsResult = inputValue * 2.2046;
  const gramsResult = inputValue * 0.001;
  const ouncesResult = inputValue * 35.274;

  tdKilo.innerText = inputValue;
  tdPounds.innerText = poundsResult;
  tdGrams.innerText = gramsResult;
  tdOunces.innerText = ouncesResult;
});
