  document.querySelectorAll(".testimonials__container").forEach((item) => {
    let btns = item.querySelectorAll(".testimonials__slide-btn");
    let articles = item.querySelectorAll(".testimonials__content-text");
    btns.forEach(el => {
      el.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        articles.forEach(el => {
          el.classList.remove("testimonials__content-text--active");
        });
        btns.forEach(el => {
          el.classList.remove("testimonials__slide-btn--active");
        });
        tabCont.classList.add("testimonials__content-text--active");
        this.classList.add("testimonials__slide-btn--active");
      });
    });
    let rightHead = item.querySelectorAll(".catalog__right-head");
  });
