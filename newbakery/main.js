  // =================== nav bar ========================

var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  // =================== side bar ========================

function toggleBtn() {
    const toggle = document.querySelector(".toggle");
    const sidebar = document.querySelector(".sidebar");
    const shadow = document.querySelector(".shadow");
    toggle.classList.toggle("active");
    sidebar.classList.toggle("active");
    shadow.classList.toggle("active");
  }
  // =================== SLIDE SHOW ========================
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
  }

    // =================== Read-More Function ========================
    function readmore(id1, id2, id3) {
      var dots = document.getElementById(id1);
      var moreText = document.getElementById(id2);
      var btnText = document.getElementById(id3);

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }
