const navBar1 = document.querySelector(".tn1");
const navBar2 = document.querySelector(".tn2");
const navBar3 = document.querySelector(".tn3");
const navBar4 = document.querySelector(".tn4");

function showToggleNavBar() {
  navBar1.classList.add("global-toggle");
}

// navBar1.addEventListener("mouseenter", showToggleNavBar);

// navBar1.addEventListener("mouseenter", () => showToggleNavBar(navBar1));
// navBar2.addEventListener("mouseenter", () => showToggleNavBar(navBar2));
// navBar3.addEventListener("mouseenter", () => showToggleNavBar(navBar3));
// navBar4.addEventListener("mouseenter", () => showToggleNavBar(navBar4));

// navBar1.addEventListener("mouseleave", () => showToggleNavBar(navBar1));
// navBar2.addEventListener("mouseleave", () => showToggleNavBar(navBar2));
// navBar3.addEventListener("mouseleave", () => showToggleNavBar(navBar3));
// navBar4.addEventListener("mouseleave", () => showToggleNavBar(navBar4));

showToggleNavBar();