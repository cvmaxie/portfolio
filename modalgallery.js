/*----------OPENING THE GALLERY----------*/
var modal = document.getElementById("modal");
var x = document.getElementsByClassName("close")[0];

x.onclick = closeModal();
modal.onclick = closeModal();

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

/*----------SELECTING GALLERY IMAGES----------*/
var slideIndex = 1;

currentSlide(slideIndex);

function nextslide(n) {
  display(slideIndex += n);
}
function currentSlide(n) {
  display(slideIndex = n);
}

function display(n) {
  var i; //slide index tracker
  var slide = document.getElementsByClassName("galleryitem"); //all photos in the gallery
  var thumb = document.getElementsByClassName("thumbnail"); //same photos acting as thumbnails
  var caption = document.getElementsByClassName("picdesc"); //photo captions

  if (n > slide.length) {//if slide index exceeds slide number, send to start
    slideIndex = 1
  }
  if (n < 1) {//if slide index precedes slide number, send to end
    slideIndex = slide.length
  }

  for (i = 0; i < slide.length; i++) {//don't display any slide (excluding the exception)
    slide[i].style.display = "none";
    caption[i].style.display = "none";
  }

  for (i = 0; i < thumb.length; i++) {//add "active" emphasis to current slide thumb (darken others)
    thumb[i].className = thumb[i].className.replace(" active", "");
  }

  slide[slideIndex - 1].style.display = "block"; //display current slide index
  thumb[slideIndex - 1].className += " active"; //emphasize current index thumbnail
  caption[slideIndex - 1].style.display = "flex"; //display current caption

}



