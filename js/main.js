var home = document.getElementById("home")
var scrollTopButton = document.getElementById("scrollBtn")
window.addEventListener("scroll", function () {
    if (window.scrollY > home.offsetHeight) {
        scrollTopButton.style.cssText = `
        right: 15px;
        opacity: 1`;
    }
    else {
        scrollTopButton.style.cssText = `
        right: -40px;
        opacity: 0`;
    }
}) 

scrollTopButton.addEventListener("click", scrollToTop)

function scrollToTop() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    
}