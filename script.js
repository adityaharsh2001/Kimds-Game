var brush = Math.floor(Math.random() * 9) + 1;
for (var i = 0; i < brush; i++) {
  var node = document.createElement("div");
  var att = document.createAttribute("class");
  att.value = "child";
  node.setAttributeNode(att);
  node.id = "child" + eval(i + 1);
  node.innerHTML = '<img class="brush" src="./brush.png" alt=""></img>';
  document.getElementsByClassName("parent")[0].appendChild(node);
}
const counter = () => {
  $(function () {
    var count = brush;
    $(".draggable").draggable();
    $("#droppable").droppable({
      drop: function (event, ui) {
        if (
          $(ui.draggable).hasClass("draggable") &&
          !$(ui.draggable).hasClass("dragged")
        ) {
          count++;
          $(".count").text(count);
          $(ui.draggable).addClass("dragged");
        }
        console.log(count);
        var btn = document.getElementById("myBtn");
        if (count === 10) {
          var modal = document.getElementById("correct");
          var span = document.getElementsByClassName("close")[0];
        } else {
          var modal = document.getElementById("wrong");
          var span = document.getElementsByClassName("close")[1];
        }
        btn.onclick = function () {
          modal.style.display = "block";
          span.onclick = function () {
            modal.style.display = "none";
          };
        };

        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        span.onclick = function () {
          modal.style.display = "none";
        };
      },
    });

    // console.log(count);
  });
};
counter();


var x = document.getElementById("myAudio");
var play = document.getElementById("play")
var pause = document.getElementById("pause")
play.addEventListener("click" , () =>{
  console.log("test")
  x.play();
  play.style.display= "none";
  pause.style.display= "block";
})
pause.addEventListener("click", () => {
  x.pause();
  play.style.display= "block";
  pause.style.display="none";
})
x.play();

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});

