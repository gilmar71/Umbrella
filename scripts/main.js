const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const btnMobile = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
