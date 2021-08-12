window.addEventListener("load", () => {
  for (var i = 0; i < 20; i++) {
    var node = document.createElement("div");
    var att = document.createAttribute("class");  
    att.value = 'child';
    node.setAttributeNode(att);
    
    node.id =  "child" + eval(i+1);
    document.getElementsByClassName("parent")[0].appendChild(node);
  }

  var ans = Math.floor((Math.random() * 20) + 1);
  console.log(ans);
  var sel = "child"+ans;
  var elements = document.getElementsByClassName("child");
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      // remove class from sibling
     
      var el = elements[0];
      while (el) {
        if (el.tagName === "DIV") {
          //remove class
          el.classList.remove("bak");
        }
        // pass to the new sibling
        el = el.nextSibling;
      }

      this.classList.add("bak");
      
      if(this.id.localeCompare(sel)==0)
      console.log(this.id)
      alert("correct ans")   
    };
  }
});
