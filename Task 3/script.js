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

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
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
    const output = document.querySelector("#output");
    const card = document.createElement("div");
    const login = document.createElement("h2");
    const avatarUrl = document.createElement("img");

    card.append(login, avatarUrl);
    output.append(card);

    login.innerText = item.login;
    avatarUrl.src = item.avatar_url;
    avatarUrl.alt = `User ${item.login} profile photo`;

    output.style.cssText =
      "display: flex; flex-direction: row; flex-wrap: wrap; gap: 5px; background-color: #222;";
    card.style.cssText =
      "border: 1px solid grey; border-radius: 5px; padding: 5px; width: 250px";
    avatarUrl.style.width = "100%";
    avatarUrl.style.borderRadius = "5px";
    avatarUrl.style.border = "1px solid #fff";
    login.style.textAlign = "center";
    login.style.padding = "10px";
    login.style.color = "#fff";
  });
}

function hideButton() {
  btn.style.display = "none";
  document.getElementById("message").style.display = "none";
}
