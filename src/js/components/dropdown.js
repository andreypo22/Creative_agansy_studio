document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".nav__btn").forEach(item => {
    item.addEventListener("click", function() {
      let dropdown = this.parentElement.querySelector(".nav__dropdown");
      let svgArrow = this.parentElement.querySelector(".nav__btn-arrow");
      let btnActive = this.parentElement.querySelector(".nav__btn");

      document.querySelectorAll(".nav__dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("nav__dropdown-active");
        };
      });
      document.querySelectorAll(".nav__btn-arrow").forEach(el => {
        if (el != svgArrow) {
          el.classList.remove("nav__btn-arrow-active");
        };
      });
      document.querySelectorAll(".nav__btn").forEach(el => {
        if (el != btnActive) {
          el.classList.remove("nav__btn-active");
        };
      });
      dropdown.classList.toggle("nav__dropdown-active");
      svgArrow.classList.toggle("nav__btn-arrow-active");
      btnActive.classList.toggle("nav__btn-active");
    });
  });

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".nav__item")) {
      document.querySelectorAll(".nav__dropdown").forEach(el => {
          el.classList.remove("nav__dropdown-active");
      });
      document.querySelectorAll(".nav__btn-arrow").forEach(el => {
        el.classList.remove("nav__btn-arrow-active");
      });
      document.querySelectorAll(".nav__btn").forEach(el => {
        el.classList.remove("nav__btn-active");
      });
    };
  });
});
