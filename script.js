var brush = Math.floor(Math.random() * 9) + 1
for (var i = 0; i<brush; i++) {
  var node = document.createElement("div");
  var att = document.createAttribute("class");
  att.value = "child";
  node.setAttributeNode(att);
  node.id = "child" + eval(i + 1);
  node.innerHTML = '<img class="brush" src="./brush.png" alt=""></img>';
  document.getElementsByClassName("parent")[0].appendChild(node);
}

$(function() {
  var count = brush;
  console.log(count);
  $(".draggable").draggable();
  $("#droppable").droppable({
    drop: function(event, ui) {
      if ($(ui.draggable).hasClass("draggable") && (!$(ui.draggable).hasClass("dragged"))) {
        count++;
        console.log(count);
        $(".count").text(count);
        $(ui.draggable).addClass("dragged");
       
        if (count == 10) {
          $(".count").text("Success !");
        }
      }
    }
  });
});