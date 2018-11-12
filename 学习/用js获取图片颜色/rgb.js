var draw = function(img) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.shadowBlur = 20;
  context.shadowColor = "#000000";
  context.drawImage(img, 0, 0);

  canvas = $("#canvas");
  canvas.click(function (e) {
    var canvasOffset = canvas.offset();
    var canvasX = Math.floor(e.pageX - canvasOffset.left);
    var canvasY = Math.floor(e.pageY - canvasOffset.top);
    var colorData = document.getElementById("canvas").getPixelColor(canvasX, canvasY);
    // 获取该点像素的数据
    console.log(colorData);
    var color = colorData.rgba;
    $("body").css("backgroundColor", color);
    $("#currentColor").html("当前像素(" + canvasX + "," + canvasY + ")颜色为: " + color);
    var cursorX = (e.pageX - 5) + "px";
    var cursorY = (e.pageY - 5) + "px";
    $("#cursor").stop(true, true).css({
      "display" : "inline-block",
      "left" : cursorX,
      "top" : cursorY
    }).fadeOut(2500);
  });
}
$(document).ready(function () {
  var img = new Image();
  img.src = "images/demo.jpg";
  $(img).load(function () {
    draw(img);
  });
});