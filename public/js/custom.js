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

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("loteria_video");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add fade-in class
            video.classList.add("visible");

            // Wait until CSS transition ends, then play
            video.addEventListener("transitionend", () => {
              video.play();
            }, { once: true });

            // Only trigger once
            observer.unobserve(video);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    observer.observe(video);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const video2 = document.getElementById("memorama_video");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add fade-in class
            video2.classList.add("visible");

            // Wait until CSS transition ends, then play
            video2.addEventListener("transitionend", () => {
              video2.play();
            }, { once: true });

            // Only trigger once
            observer.unobserve(video2);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    observer.observe(video2);
  });