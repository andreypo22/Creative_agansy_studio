const searchBox = document.querySelector(".search__box");
const searchIcon = document.querySelector(".search__icon");
const searchBar = document.querySelector(".search__bar");
const searchInput = document.querySelector(".search__input");
const SVG = document.querySelector(".search__icon svg");
const closeBtn = document.querySelector(".close__icon svg");

searchIcon.addEventListener("click", () => {
  setTimeout(() => {
    searchBar.classList.add("active__bar");
    searchBox.classList.add("active__box");
  }, 650);

  searchIcon.classList.add("active__icon");
  searchIcon.style.cursor = "pointer";
  SVG.setAttribute("fill", "#000");
  searchInput.focus();
  closeBtn.style.cursor = "pointer";
});

closeBtn.addEventListener("click", () => {
  setTimeout(() => {
    searchIcon.classList.remove("active__icon");
    SVG.setAttribute("fill", "#fff");
  }, 650);
  searchBar.classList.remove("active__bar");
  searchBox.classList.remove("active__box");
  closeBtn.style.cursor = "auto";
});

// document.body.addEventListener('click', () => {
//   if (searchBar.classList.contains("active__bar") && searchBox.classList.contains("active__box")) {
//     setTimeout(() => {
//       searchIcon.classList.remove("active__icon");
//       SVG.setAttribute("fill", "#fff");
//     }, 650);
//     searchBar.classList.remove("active__bar");
//     searchBox.classList.remove("active__box");
//   }
// });
