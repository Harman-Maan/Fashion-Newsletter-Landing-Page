function changeImage1() {
  var image = document.getElementById("myImage");
  var ofvalue = document.getElementById("ofbox");
  var a;
  if (image.src.match("Images/Fashion3.jpg")) {
    image.src = "Images/Fashion2.jpg";
    a = 2;
  } else {
    image.src = "Images/Fashion.jpg";
    a = 1;
  }
  ofvalue.innerHTML = "0" + a + " of 03";
}

function changeImage2() {
  var image = document.getElementById("myImage");
  var ofvalue = document.getElementById("ofbox");
  var a;
  if (image.src.match("Images/Fashion.jpg")) {
    image.src = "Images/Fashion2.jpg";
    a = 2;
  } else {
    image.src = "Images/Fashion3.jpg";
    a = 3;
  }
  ofvalue.innerHTML = "0" + a + " of 03";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more <span id='leftarrow'><i class='fa fa-caret-right' aria-hidden='true'></i></span>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<span id='leftarrow'><i class='fa fa-caret-left' aria-hidden='true'></i></span> Read less";
    moreText.style.display = "inline";
  }
}
