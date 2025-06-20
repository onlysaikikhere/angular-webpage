var slider = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
var arr = [10, 25, 50, 65, 82, 88, 90, 98, 100];
var ele = document.querySelector('.slider')
ele.setAttribute('step', arr[0]);
var i = 0;

function a() {
  ele.removeAttribute('step')
  var value = ele.value
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      ele.value = arr[i]
      break;
    }
  }
  document.querySelector('span').innerHTML = ele.value
}