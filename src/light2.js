const light = document.querySelector('.light2')
let height = 400
let width = 400;

document.addEventListener('mousemove', function(e) {
  setPosition(e);
});

document.addEventListener('touchmove', function(e) {
  setPosition(e);
});

function setPosition(e) {
  light.style.top = e.pageY - height / 2 + "px";
  light.style.left = e.pageX - width / 2 + "px";
}