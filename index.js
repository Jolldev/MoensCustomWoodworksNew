
// Makes all testimonial text boxes on main page same height by matching heighest
// function carouselNormalization() {
//     var items = $('.carousel-img'), //grab all slides
//         heights = [], //create empty array to store height values
//         tallest; //create variable to make note of the tallest slide

//     if (items.length) {
//         function normalizeHeights() {
//             items.each(function () { //add heights to array
//                 heights.push($(this).height());
//             });
//             tallest = Math.max.apply(null, heights); //cache largest value
//             items.each(function () {
//                 $('.carousel-img').css('height', tallest + 'px');
//             });
//         };
//         normalizeHeights();

//         $(window).on('orientationchange', function () {
//             $('.carousel').carousel(0); //resets carousel to first (tallest) slide
//             tallest = 0, heights.length = 0; //reset vars
//             items.each(function () {
//                 $(this).css({ height: '0' });
//                 $(this).css('min-height', '0'); //reset min-height
//                 $(this).css({ height: 'auto' });
//             });
//             carouselNormalization(); //run it again 
//         });

//         $(window).on('resize', function () {
//             tallest = 0, heights.length = 0; //reset vars
//             $('.carousel').carousel(0); //resets carousel to first (tallest) slide
//             items.each(function () {
//                 $(this).css({ height: '0' });
//                 $(this).css('min-height', '0'); //reset min-height
//                 $(this).css({ height: 'auto' });
//             });
//             carouselNormalization(); //run it again 
//         });
//     }
// }





/**
 * Wait until all the assets have been loaded so a maximum height 
 * can be calculated correctly.
 */
// window.onload = function () {
//     carouselNormalization();
// }


function matchSlideOne(){
    $('.carousel').carousel(0); //resets carousel to first (tallest) slide
    var slideOne= document.querySelector('.slide-one');
    $(slideOne).css('height', '0');
    $(slideOne).css('width', '100%');
    $(slideOne).css('height', 'auto');
    var slideOneHeight = slideOne.offsetHeight;
    console.log(slideOneHeight);
    $('.carousel-img').each(function () {
        // this.style.height = slideOneHeight;

        $('.carousel-img').css('height', slideOneHeight);
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


window.addEventListener('resize', windowSize);
window.addEventListener("orientationchange", windowSize);
document.addEventListener("DOMContentLoaded", windowSize);

