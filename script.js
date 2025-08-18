const URL = "https://api.github.com/users/";
let button = document.querySelector("#button");
let textbox = document.querySelector("#input");
let name = document.querySelector("#name");
let gitid = document.querySelector("#gitid");
let login = document.querySelector("#login");
let repos = document.querySelector("#repos");
let none = document.querySelector("#none");
let username;

async function user(username) {
  if (username == "") {
      none.innerText = `Textfield is blank`;
      name.innerHTML = ``;
      gitid.innerText = ``;
      login.innerText = ``;
      repos.innerText = ``;
      return;
    }
  let fullUrl = URL + username;
  console.log(fullUrl);
  try {
    let response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    let data = await response.json();

    name.innerHTML = `Name of user is ${data.name}`;
    gitid.innerText = `UID of user is ${data.id}`;
    login.innerText = `Login ID of user is ${data.login}`;
    repos.innerText = `Total repos of user is ${data.public_repos}`;
  } catch (error) {
     
      none.innerText = `No user found with this id : ${username}`;
      name.innerHTML = ``;
      gitid.innerText = ``;
      login.innerText = ``;
      repos.innerText = ``;
    
  }
}

button.addEventListener("click", async () => {
  username = textbox.value;

  await user(username);
});
