var nav = document.getElementById("navBar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) { 
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
