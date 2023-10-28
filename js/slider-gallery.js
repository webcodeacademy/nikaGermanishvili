$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  
  var light = document.getElementById("light");
  light.addEventListener("click", function (light) {
    light.target.classList.toggle("lon");
  });