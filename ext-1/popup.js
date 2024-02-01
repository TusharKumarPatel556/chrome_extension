const username = document.querySelector("#name");
const greet = document.getElementById("greet");
username.addEventListener("keyup", (e) => {
  greet.innerHTML = `Welcome ${e.target.value}`;
});
