const buttons = document.querySelectorAll(".nav-center button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      buttons.forEach((outros) => {
        outros.classList.remove("active");
      });
      button.classList.add("active");
    }
  });
});

const userImg = document.getElementById("user-img");
const userMenu = document.getElementById("user-menu");

userImg.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!userImg.contains(event.target) && !userMenu.contains(event.target)) {
    userMenu.classList.remove("active");
  }
});

const searchBtn = document.querySelector(".search-btn");
const input = searchBtn.querySelector("input");
const icon = searchBtn.querySelector("i");

icon.addEventListener("click", () => {
  if (searchBtn.classList.contains("active")) {
    // Se já estiver ativa, desativa
    searchBtn.classList.remove("active");
    input.value = "";
  } else {
    // Se não estiver ativa, ativa e foca no input
    searchBtn.classList.add("active");
    input.focus();
  }
});

// Se clicar fora da barra, desativa
document.addEventListener("click", (e) => {
  if (!searchBtn.contains(e.target)) {
    searchBtn.classList.remove("active");
    input.value = "";
  }
});
