/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((result) => {
    createCard(result);
  })
  .catch((error) => "klaida: " + error);

const createCard = (result) => {
  const output = document.querySelector("#output");

  result.forEach((car) => {
    const card = document.createElement("div");
    const carBrand = document.createElement("h2");

    carBrand.innerText = car.brand;
    card.append(carBrand);
    output.append(card);
    for (let i = 0; i < car.models.length; i++) {
      const carModelUl = document.createElement("ul");

      const carModelLi = document.createElement("li");
      carModelLi.innerText = car.models[i];
      carModelUl.append(carModelLi);
      card.append(carModelUl);
    }

    output.style.cssText =
      "display: flex; flex-wrap: wrap; flex-direction: row; gap: 10px;";
    card.style.cssText =
      "border: 2px solid grey; border-radius: 5px; padding: 20px; background: #999";
    carBrand.style.cssText = "padding-bottom: 10px;";
    document.querySelector("h1").style.paddingBottom = "15px";
  });
};
