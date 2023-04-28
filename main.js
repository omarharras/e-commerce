let products = document.querySelectorAll(".product");
let backImage = document.querySelectorAll(".back");
let icons = document.querySelectorAll(".product .img .icons a");



for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("mouseenter", function () {
    backImage[i].style.opacity = "0";
  });
  products[i].addEventListener("mouseleave", function () {
    backImage[i].style.opacity = "1";
  });
}







let search = document.getElementById("search-bar");
let searchPage = document.getElementById("search-page");
let exitIcon = document.querySelector(".exit-icon");

search.addEventListener("click", function () {
  searchPage.style.display = "flex";
});
exitIcon.addEventListener("click", function () {
  searchPage.style.display = "none";
});
