document.addEventListener("click", function(e) {
  let mouseX = e.pageX - 25;
  let mouseY = e.pageY - 25;
  let mousePointer = document.querySelector("#tap-circle");

  mousePointer.style.left = mouseX+"px";
  mousePointer.style.top = mouseY+"px";
  mousePointer.classList.add("click-animation");
  setTimeout(function() {
    mousePointer.classList.remove("click-animation")}, 300);
});