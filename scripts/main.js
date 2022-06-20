$(document).ready(function () {
  var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, "").length === 11
        ? "(00) 00000-0000"
        : "(00) 0000-00009";
    },
    spOptions = {
      onKeyPress: function (val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      },
    };

  if ($(".cep-mask").length > 0) {
    $(".cep-mask").mask("99.999-999");
  }

  if ($(".date-mask").length > 0) {
    $(".date-mask").mask("99/99/9999");
  }

  if ($(".number-mask").length > 0) {
    $(".number-mask").mask("99999");
  }

  if ($(".cvv-mask").length > 0) {
    $(".cvv-mask").mask("999");
  }

  if ($(".cpf-mask").length > 0) {
    $(".cpf-mask").mask("999.999.999-99");
  }

  if ($(".phone-mask").length > 0) {
    $(".phone-mask").mask(SPMaskBehavior, spOptions);
  }

  const owlClientes = $(".owl-clientes");

  if (owlClientes) {
    owlClientes.owlCarousel({
      loop: true,
      dots: false,
      mouseDrag: true,
      margin: 30,
      autoWidth: true,
      autoplay: true,
      navText: [
        '<img src="./images/nav-left.png" />',
        '<img src="./images/nav-right.png" />',
      ],
    });
  }

  $(".owl-sociais").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
  });
});

const menuMobile = document.querySelector("header .itens"); // ou ele vai retornar o elemento <div class> ou ele vai me retornar NULL
const bgMobile = document.querySelector("header .bg-mobile");
const blockBar = document.querySelector("header .block_bar");
const closeMenu = document.querySelector("header .close");
const itensMenu = document.querySelector("header .itens li a");

if (menuMobile && blockBar && bgMobile && closeMenu) {
  blockBar.addEventListener("click", function () {
    menuMobile.classList.add("active");
    bgMobile.classList.add("active");
  });

  bgMobile.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    bgMobile.classList.remove("active");
  });

  closeMenu.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    bgMobile.classList.remove("active");
  });

  itensMenu.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    bgMobile.classList.remove("active");
  });
}

//FAQ
const buttonsFaq = document.querySelectorAll("#faq .duvida");

if (buttonsFaq) {
  var acc = document.getElementsByClassName("duvida");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        this.children[1].classList.remove("active");
        panel.style.display = "none";
      } else {
        this.children[1].classList.add("active");
        panel.style.display = "block";
      }
    });
  }
}
