// Declaring variables
let slideIndex = 1;
// Calling showSlides function
showSlides(slideIndex);

// calls the showSlides function inside of changeSlide function and takes in a variable called number
// In summary the following function when the slide changes it will call the showSlide function
function changeSlide(number) {
  showSlides(slideIndex += number);
}

// The currentSlide function calls the showSlides function and takes in a variable called number
// When using this currentSlide function it will call the showSlide function and pass in the variable of (slideIndex = number)
function currentSlide(number) {
  showSlides(slideIndex = number);
}

// This function will fetch the slides,and dots
// this takes in a variable called number that is passed into the rest of the function
function showSlides(number) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (number > slides.length) {
    slideIndex = 1
  }

  if (number < 1) {
    slideIndex = slides.length
  }
  // Start of for loop for image display
  for (i = 0; i < slides.length; i++) {
    // Access of slides list, always is array name with square [] brackets | e.g. slides[0] is the first element inside the list
    slides[i].style.display = "none";
  }
  //   End of for loop

  // Start of for loop for progres bar / indicator
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //   End of loop

  // declaring slides display property as block at slideIndex-1 as its the item before
  // display the one image when the showslides function is called
  slides[slideIndex - 1].style.display = "block";
}