var modal = document.getElementById("modal");
var btn = document.getElementById("myBtn");
var x = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
x.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



for (i = 0; i > image.length; i++){
  var image = document.querySelectorAll(".griditem");
  image[i].onclick = function() {
  modal.style.display = "block";
  }
}
