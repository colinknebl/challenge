var btn = document.getElementById('modal-btn');

var modalContainer = document.getElementById('modal-container');

btn.addEventListener('click', function(){

  if (modalContainer.classList.contains('hide')) {
    modalContainer.classList.remove('hide');
  } else {
    modalContainer.classList.add('hide');
  }

});


var arrayBtn = document.getElementById('array-btn');
var output = document.getElementsByClassName('output')[0];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var newArray = [];

arrayBtn.addEventListener('click', function() {

  for (var i = 2; i < array.length; i += 3) {

    newArray.push(array[i]);
  }

output.innerText = newArray;

});


