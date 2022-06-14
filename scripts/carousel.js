$(document).ready(function () {
  $(".owl-clientes").owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
  });
});

$(".owl-clientes").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
    1600: {
      items: 6,
      nav: true,
    },
  },
});

$(document).ready(function () {
  $(".owl-sociais").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
  });
});

// $(".owl-sociais").owlCarousel({
//   loop: true,
//   margin: 30,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 2,
//       nav: true,
//     },
//   },
// });
