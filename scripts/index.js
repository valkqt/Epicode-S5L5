const header = document.querySelector("header");
const intro = document.getElementById("home-intro");

window.onscroll = function () {
    const button = document.querySelector(".get-started");

    if (window.scrollY > intro.offsetHeight) {
        
        header.style.backgroundColor = "white";
        button.style.backgroundColor = "green";
      }

    else {
        header.style.backgroundColor = "#ffc017";
        button.style.backgroundColor = "rgb(43, 43, 43)";

    }
    
}

