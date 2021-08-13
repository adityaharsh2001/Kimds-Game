window.addEventListener("load", () => {
  for (var i = 0; i < 50; i++) {
    var node = document.createElement("div");
    var att = document.createAttribute("class");
    att.value = "child";
    node.setAttributeNode(att);
    node.id = "child" + eval(i + 1);
    document.getElementsByClassName("parent")[0].appendChild(node);
  }
  var newchild = document.getElementById("parent").children;
  // console.log(newchild);

  for (i = 2; i < 12; ++i) {
    newchild[i].style.backgroundColor = "#f86624";
  }
  for (i = 22; i < 32; ++i) {
    newchild[i].style.backgroundColor = "#106874";
  }
  for (i = 32; i < 42; ++i) {
    newchild[i].style.backgroundColor = "brown";
  }
  // node.style(1,3);
  // console.log

  var ans = Math.floor(Math.random() * 50 + 1);
  document.getElementById("num").innerHTML = ans;
  // console.log(ans);
  var sel = "child" + ans;
  var elements = document.getElementsByClassName("child");
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      var el = elements[0];
      while (el) {
        if (el.tagName === "DIV") {
          el.classList.remove("bak");
        }
        el = el.nextSibling;
      }
      this.classList.add("bak");
      var btn = document.getElementById("myBtn");
      if (this.id === sel) {
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
    };
  }
});
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