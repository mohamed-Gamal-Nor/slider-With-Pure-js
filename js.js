var createImageLoop = document.getElementById("slider-container");
for (var i = 1; i <= 15; i++) {
    var image = document.createElement('img');
    image.setAttribute('src', i + '.jpg');
    createImageLoop.appendChild(image);
}
// get slider items | array.from[es6]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
//get number of slide
var slidesCount = sliderImages.length;
// set current slide 
var currentSlide = 1;
// slide number string Element
var slideNumberElement = document.getElementById('slide-number');
// prev and next bittons 
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
// handle click on prev and next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
//create the main ul element
var paginationElemnt = document.createElement('ul');
// set id on creatd element
paginationElemnt.setAttribute('id', 'pagination-ul');
//create list items based on image count
for (var i = 1; i <= slidesCount; i++) {
    // create the li
    var paginationItem = document.createElement('li');
    // set custom attr
    paginationItem.setAttribute('data-index', i);
    // set item conent
    paginationItem.appendChild(document.createTextNode(i));
    //append items to ul
    paginationElemnt.appendChild(paginationItem);
}

// add the created ul element to page 
document.getElementById('indicators').appendChild(paginationElemnt);
//Get the new created ul
var paginationCratedUl = document.getElementById('pagination-ul');
var pagenationBulltes = Array.from(document.querySelectorAll('#pagination-ul li'));
//loop through All Bultes Items
for (var i = 0; i < pagenationBulltes.length; i++) {
    pagenationBulltes[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
// triger the checker function
theChecker();

// next slide function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {

    } else {
        currentSlide++;
        theChecker();
    }
}
// prev slide function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {

    } else {
        currentSlide--;
        theChecker();
    }
}

// creaet the cheacker function
function theChecker() {
    // set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slidesCount);
    //remove all active classes
    reomveActive();
    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');
    //set active class on current pagenation item
    paginationCratedUl.children[currentSlide - 1].classList.add('active');
    // check if current slide is the first
    if (currentSlide == 1) {
        // add diasbled class
        prevButton.classList.add('disabled');

    } else {
        // remove diasbled class
        prevButton.classList.remove('disabled');
    }
    // check if current slide is the last
    if (currentSlide == slidesCount) {
        // add diasbled class
        nextButton.classList.add('disabled');

    } else {
        // remove diasbled class
        nextButton.classList.remove('disabled');
    }


}

// remove all active class 

function reomveActive() {
    //loop throgh images   
    sliderImages.forEach(function(img) {
        img.classList.remove('active');
    });
    //loop throgh pagenations   
    pagenationBulltes.forEach(function(page) {
        page.classList.remove('active');
    });

}