
// Makes all carousel slides match the box/logo slide (slide 1)
function matchSlideOne() {
    var slideOne = $('.slide-one');
    $(slideOne).css('width', '100%');
    $(slideOne).css('height', 'auto');
    $('.carousel').carousel(0); //resets carousel to first slide
    var slideOneHeight = slideOne.height();
    console.log(slideOneHeight);
    $('.carousel-img').each(function () {
         $('.carousel-img').height(slideOneHeight);
    });


}


// Sets height of main page landscape oriented carousel images to equal the space between
// the bottom of navbar and bottom of window
const nav = document.querySelector('nav');

function setHeight() {
    const navHeight = nav.offsetHeight;
    $('.carousel-img').each(function () {
        this.style.height = window.innerHeight - navHeight + "px";
    });
}


function windowSize() {
    if (window.innerWidth / window.innerHeight > 1.5 && window.innerHeight > 460) {
        setHeight();
    } else {
        matchSlideOne();
    }
}

// window.onload = function () {
//     windowSize();
// }
window.addEventListener('resize', windowSize);
window.addEventListener("orientationchange", windowSize);
document.addEventListener("DOMContentLoaded", windowSize);