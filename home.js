/*header hamberger function code start*/
function openNav(){
    document.getElementById("mySidenav").style.width="100%";
  }
  
  function closeNav(){
    document.getElementById("mySidenav").style.width="0";
  }

  /*header hamberger function code ends*/





/*slideshow function code starts */

  let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
  function plusSlides(n) {
    moveSlide(slideIndex +=n);
  }
  
  // // Thumbnail image controls
  // function currentSlide(n) {
  //   moveSlides(slideIndex = n);
  // }
  

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++  ;
 

//   for (i = 0; i < dots.length; i++) {     dots[i].className = dots[i].className.replace(" active", "");}
 
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += "active"

  setTimeout(showSlides, 2000); // Change image every 2 seconds
 


}

function moveSlide(n){

  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 

//   for (i = 0; i < dots.length; i++) {     dots[i].className = dots[i].className.replace(" active", "");}
 
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += "active"
}

/*slideshow function code ends */