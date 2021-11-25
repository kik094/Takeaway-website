const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// accordion
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let removeEl = () => {
    let panels = document.getElementsByClassName("panel");
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }
}



window.addEventListener("resize", function(event) {
    if (document.body.clientWidth >= 1000) {
        removeEl()
    }

})



// MODAL BURGER
var modal = document.getElementById("myModal");
var btn = document.getElementById("menu-burger");
var span = document.getElementsByClassName("close")[0];
var body = document.body;


btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}


span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "scroll";

}

// MODAL LANGUAGES 
let modalC = document.getElementById("country-modal");
let btnC = document.getElementById("menu-flag");

btnC.onclick = function() {
    modalC.style.visibility = "visible";
    modalC.style.opacity = "1";
    body.style.overflow = "hidden";

}

window.onclick = function(event) {
    if (event.target == modalC || event.target == modal) {
        modal.style.display = "none";
        modalC.style.visibility = "hidden";
        modalC.style.opacity = "0";
        body.style.overflow = "scroll";
    }
}