const menuLinks = document.getElementById("nav-links");
const hamburgerButton = document.querySelector(".hamburger-toggle");
const hamburgerImage = document.getElementById("hamburger");

function closeMenu() {
  menuLinks.classList.add("hidden");
  document.body.classList.remove("menu-open");
  hamburgerButton.setAttribute("aria-expanded", "false");
  hamburgerButton.setAttribute("aria-label", "Abrir menu");
}

function toggleMenu() {
  const isHidden = menuLinks.classList.contains("hidden");

  if (isHidden) {
    menuLinks.classList.remove("hidden");
    document.body.classList.add("menu-open");
    hamburgerButton.setAttribute("aria-expanded", "true");
    hamburgerButton.setAttribute("aria-label", "Fechar menu");
    return;
  }

  closeMenu();
}

hamburgerImage.addEventListener("click", toggleMenu);

hamburgerButton.addEventListener("click", (event) => {
  if (event.target !== hamburgerImage) {
    toggleMenu();
  }
});

hamburgerButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
});

menuLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menuLinks.classList.contains("hidden")) {
    closeMenu();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();