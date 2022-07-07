/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

// stilius???
// responsive?

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  event.preventDefault();

  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      createCard(result);
    })
    .catch((error) => "klaida: " + error);

  hideButton();
});

function createCard(result) {
  result.forEach((item) => {
    const output = document.querySelector(".output-cointainer");
    const card = document.createElement("div");
    const login = document.createElement("h2");
    const avatarUrl = document.createElement("p");

    card.append(login, avatarUrl);
    output.append(card);

    login.innerText = item.login;
    avatarUrl.innerText = item.avatar_url;

    output.style.cssText = "display: flex; flex-wrap: wrap; gap: 5px";
    card.style.cssText =
      "border: 1px solid grey; border-radius: 10px; padding: 5px";
  });
}

function hideButton() {
  btn.style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("output").style.backgroundColor = "#222";
}
