// $(document).ready(function () {
//   $(".owl-dicas").owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: false,
//     items: 3,
//   });
// });
// $(".owl-banner").owlCarousel({
//   loop: true,
//   margin: 0,
//   nav: false,
//   items: 1,
//   dots: true,
// });

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const btnMobile = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
