var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 2000); // Set the duration for each slide (in milliseconds)
}
var colors = ["#998CEB", "#EA8FEA", "#FF8DC7"]; // Array of colors to cycle through
var index = 0; // Initial index

setInterval(function() {
  var element = document.getElementById("my-element");
  element.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // Increment index and loop back to 0 if it exceeds the array length
}, 50000); // Change color every 1 second (1000 milliseconds)

// Function to handle the animation when a slide becomes visible
function handleSlideAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Slide is in view, start the animation for elements within the slide
      const slide = entry.target;
      const animatedElements = slide.querySelectorAll('.animate');

      animatedElements.forEach(element => {
        // Add your animation logic here
        element.classList.add('start-animation');
      });

      // Once the animation is triggered, disconnect the observer
      observer.unobserve(slide);
    }
  });
}

// Set up the Intersection Observer
const slides = document.querySelectorAll('[id^="slide"]');
const options = {
  threshold: 1 // Adjust this threshold as needed
};

slides.forEach(slide => {
  const observer = new IntersectionObserver(handleSlideAnimation, options);
  observer.observe(slide);
});
