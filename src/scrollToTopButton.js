const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const navbar = document.getElementById('nav');
let isSticky = true;  

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");

        if (isSticky) { 
            navbar.style.position = "relative";  
            isSticky = false;
        }
    } else {
        scrollToTopBtn.classList.remove("show");

        if (!isSticky) { 
            navbar.style.position = "sticky";  
            isSticky = true;
        }
    }
}

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};