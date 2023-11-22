function addInitialAttributes() {
  let signUp = document.getElementById('signUp');
  signUp.classList.add('bg-gray-500', 'text-gray-300');
  let homeBottomElement = document.querySelector('.home-bottom');
  homeBottomElement.classList.add('default-style_b');
  let homeTopElement = document.querySelector('.home-top');
  homeTopElement.classList.add('default-style_t');
};
window.onload = addInitialAttributes();

document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.querySelectorAll('.click-links');
  boxes.forEach(function (box) {
    box.addEventListener('click', function (event) {
      let width = window.innerWidth;
      if (width >= 600) {
        boxes.forEach(function (otherBox) {
          otherBox.classList.remove('default-style_b');
        });
        event.target.classList.add('default-style_b');
      } else {
        boxes.forEach(function (otherBox) {
          otherBox.classList.remove('default-style_t');
        });
        event.target.classList.add('default-style_t');
      }
    });

  });

  var forms = document.querySelectorAll('.enForm');
  forms.forEach(function (form) {
    form.addEventListener('click', function (event) {
      forms.forEach(function (otherForm) {
        otherForm.classList.remove('bg-gray-500', 'text-gray-300');
      });
      event.target.classList.add('bg-gray-500', 'text-gray-300');
    });
  });

});

document.addEventListener('DOMContentLoaded', function () {
  var darkClick = document.querySelector(".dark-mode");
  darkClick.addEventListener('click', function (event) {
    document.body.classList.toggle('dark');
    document.getElementById("dark-label").classList.toggle("bg-yellow-100")
  });
});


let menu = document.querySelector(".menu")
var bars = document.getElementById("bars");
var bar_3 = document.getElementById("bar-3");
var xMark = document.getElementById("x-mark");
bars.addEventListener('click', function () {

  if (bars.classList.contains('bar-on')) {
    bars.classList.remove('bar-on')
    bar_3.classList.add("hidden")
    menu.classList.remove("-left-72")
    menu.classList.add("left-0")
    xMark.classList.remove("hidden")
    xMark.classList.add("block")
  } else {
    bars.classList.add('bar-on')
    bar_3.classList.remove("hidden")
    bar_3.classList.add("block")
    menu.classList.remove("left-0")
    menu.classList.add("-left-72")
    xMark.classList.remove("block")
    xMark.classList.add("hidden")
  }
});
