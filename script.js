const buttonsnav = document.querySelectorAll(".nav-center button");

buttonsnav.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      buttonsnav.forEach((outros) => {
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

let lastMovieClicked = null;

// container filmes
document.addEventListener("click", (event) => {
  const button = event.target.closest(".more-menu-btn");
  const isMenuClick = event.target.closest(".more-menu");

  // Se clicou dentro do menu, não faz nada
  if (isMenuClick) return;

  // Se clicou no botão "mais opções"
  if (button) {
    const container = button.closest(".container-filme");
    if (container) {
      container.hidden = false;
      const menu = container.querySelector(".more-menu");
      const hover = container.querySelector(".hover-filme");
      const ageRate = container.querySelector(".age-rate");

      // Verifica se o menu já está aberto
      const isAlreadyActive =
        button.classList.contains("active") &&
        menu.classList.contains("active") &&
        ageRate.classList.contains("active") &&
        hover.classList.contains("active");

      // Fecha o menu atual se outro for clicado
      if (!isAlreadyActive && lastMovieClicked) {
        lastMovieClicked.forEach((el) => el.classList.remove("active"));
      }

      // Alterna o menu clicado
      if (isAlreadyActive) {
        button.classList.remove("active");
        menu.classList.remove("active");
        ageRate.classList.remove("active");
        hover.classList.remove("active");
        lastMovieClicked = null;
      } else {
        button.classList.add("active");
        menu.classList.add("active");
        ageRate.classList.add("active");
        hover.classList.add("active");
        lastMovieClicked = container.querySelectorAll(
          ".more-menu-btn.active, .more-menu.active, .hover-filme.active, .age-rate.active"
        );
      }
    }
  } else {
    // Clicou fora de tudo: fecha o menu aberto
    if (lastMovieClicked) {
      lastMovieClicked.forEach((el) => el.classList.remove("active"));
      lastMovieClicked = null;
    }
  }
});
