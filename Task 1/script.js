/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");

form.addEventListener("submit", () => {
  event.preventDefault();

  const output = document.getElementById("output");
  const table = document.createElement("table");
  const trEl1 = document.createElement("tr");
  const trEl2 = document.createElement("tr");
  const thPounds = document.createElement("th");
  const thGrams = document.createElement("th");
  const thOunces = document.createElement("th");
  const tdPounds = document.createElement("td");
  const tdGrams = document.createElement("td");
  const tdOunces = document.createElement("td");

  trEl1.append(thPounds, thGrams, thOunces);
  trEl2.append(tdPounds, tdGrams, tdOunces);
  table.append(trEl1, trEl2);
  output.append(table);

  thPounds.innerText = "Pounds";
  thGrams.innerText = "Grams";
  thOunces.innerText = "Pounds";

  table.style.margin = "20px auto";
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";
  thPounds.style.border = "1px solid black";
  thGrams.style.border = "1px solid black";
  thOunces.style.border = "1px solid black";
  tdPounds.style.border = "1px solid black";
  tdGrams.style.border = "1px solid black";
  tdOunces.style.border = "1px solid black";
  thPounds.style.padding = "15px";
  thGrams.style.padding = "15px";
  thOunces.style.padding = "15px";
  tdPounds.style.padding = "15px";
  tdGrams.style.padding = "15px";
  tdOunces.style.padding = "15px";

  const inputValue = document.querySelector("input[id=search]").value;

  const poundsResult = inputValue * 2.2046;
  const gramsResult = inputValue * 0.001;
  const ouncesResult = inputValue * 35.274;

  tdPounds.innerText = poundsResult;
  tdGrams.innerText = gramsResult;
  tdOunces.innerText = ouncesResult;
});
