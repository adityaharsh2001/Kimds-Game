$(document).ready(function () {
  //coordinates of the 'dots'
  var coords = [
    [297 -130 , 316- 100],
    [640 -130, 598 - 100],
    [844 -130, 333 - 100],
    [226 -130, 623 -100],
    [860 -130, 523 -100],
    [181 -130, 401 -100],
    [627 -130, 364 -100],
    [1364 -130, 342 -100],
    [1052 -130, 410 -100],
    [1270 -130, 600 -100]
  ];

  //draw all the dots
  for (i = 0; i < coords.length; i++) {
    css = {
      left: coords[i][0] -6 ,
      top: coords[i][1] -17 ,
      zIndex: coords.length - i, //to ensure lower numbers are on top of higher ones in case of overlap
    };

    //set the first dot active
    class_active = i == 0 ? " active" : "";

    // html/css for the dot
    div = $(
      '<div id="dot_container_' +
        i +
        '" order_value="' +
        i +
        '" class="dot_container' +
        class_active +
        '"><div class="dot"><div class="dot_number"></div>' +
        ((i+1) * 7) +
        "</div></div>"
    ).css(css);

    //add the dot to the page
    $("#canvas").append(div);
  }

  // when a dot is clicked, join it with a line to the previous dot
  $(".dot_container").click(function () {
    if ($(this).hasClass("active")) {
      //check if active class has been added to the dot (note: can't move this into the .click event handler as it won't work there)

      var i = parseInt($(this).attr("order_value")); //its order in the dot series

      //take active class off current dot
      $(this).removeClass("active");

      //if it's the first dot, no line to draw, just make the next dot active
      if (i == 0) {
        $("div#dot_container_" + (i + 1)).addClass("active"); //make next dot active
        return false;
      }

      //draw line from previous dot to this dot
      x1 = coords[i - 1][0];
      y1 = coords[i - 1][1];
      x2 = coords[i][0];
      y2 = coords[i][1];

      var m = (y2 - y1) / (x2 - x1); //slope of the segment
      var angle = (Math.atan(m) * 180) / Math.PI; //angle of the line
      var d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)); //length of the segment
      var transform;

      // the (css) transform angle depends on the direction of movement of the line
      if (x2 >= x1) {
        transform = (360 + angle) % 360;
      } else {
        transform = 180 + angle;
      }

      // add the (currently invisible) line to the page
      var id = "line_" + new Date().getTime();
      var line = "<div id='" + id + "'class='line'>&nbsp;</div>";
      $("#canvas").append(line);

      //rotate the line
      $("#" + id).css({
        left: x1,
        top: y1,
        width: "0px",
        transform: "rotate(" + transform + "deg)",
        "transform-origin": "0px 0px",
        "-ms-transform": "rotate(" + transform + "deg)",
        "-ms-transform-origin": "0px 0px",
        "-moz-transform": "rotate(" + transform + "deg)",
        "-moz-transform-origin": "0px 0px",
        "-webkit-transform": "rotate(" + transform + "deg)",
        "-webkit-transform-origin": "0px 0px",
        "-o-transform": "rotate(" + transform + "deg)",
        "-o-transform-origin": "0px 0px",
      });

      // 'draw' the line
      $("#" + id).animate(
        {
          width: d,
        },
        400,
        "linear",
        function () {
          //make the next dot active after the line is drawn
          if (i < coords.length)
            $("div#dot_container_" + (i + 1)).addClass("active");
        }
      );

      //if it's the last dot, reveal the image
      if (i == coords.length - 1) {
        // revealImage();
      }
    }
  });

});
