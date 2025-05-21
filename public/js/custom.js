function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar-brand');

function handleScroll() {
    if (window.innerWidth <= 1120) {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
      } else {
        // Scrolling up
        navbar.classList.remove('hidden');
      }
    } else {
      // Always show on larger screens
      navbar.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // Ensure state updates when resizing
  
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

 document.getElementById('button_loteria').addEventListener('click', function(event) {
    event.preventDefault(); // Previene ir a sold_out.html
    document.getElementById('popup').style.display = 'flex'; // Muestra el popup
  });

  function cerrarPopup() {
    document.getElementById('popup').style.display = 'none'; // Oculta el popup
  }

 document.getElementById('button_memorama').addEventListener('click', function(event) {
    event.preventDefault(); // Previene ir a sold_out.html
    document.getElementById('popup').style.display = 'flex'; // Muestra el popup
  });

  function cerrarPopup() {
    document.getElementById('popup').style.display = 'none'; // Oculta el popup
  }