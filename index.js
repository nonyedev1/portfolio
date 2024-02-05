const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const listItems = document.querySelector("ul");
const arrowUp = document.querySelector("#arrowUp");

// toggle menu icon
menuIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
  listItems.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
  listItems.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
});

// arrowup click event to scroll up
arrowUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// scroll  to disappear
function scrollDisappear() {
  if (window.pageYOffset > 200) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}
window.addEventListener("scroll", scrollDisappear);
