let images = ["Images/Fashion1.jpg", "Images/Fashion2.jpg", "Images/Fashion3.jpg", "Images/Fashion4.jpg", "Images/Fashion5.jpg"];
const image = document.getElementById("slideImage");
const previous = document.getElementById("previousImg");
const next = document.getElementById("nextImg");

let currentImg = 0;

function previousImage() {
  if (currentImg > 0) currentImg--;
  image.src = images[currentImg];
}
function nextImage() {
  if (currentImg < images.length - 1) currentImg++;
  image.src = images[currentImg];
}

// function ReadMoreLess() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more <span id='leftarrow'><i class='fa fa-caret-right' aria-hidden='true'></i></span>";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "<span id='leftarrow'><i class='fa fa-caret-left' aria-hidden='true'></i></span> Read less";
//     moreText.style.display = "inline";
//   }
// }
