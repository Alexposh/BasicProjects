let current = document.getElementById('number-holder');
let counter = 0;

current.innerText = counter;

document.querySelector('#add').addEventListener('click', function () {
  counter++;
  current.innerText = counter;
});

document.querySelector('#substract').addEventListener('click', function () {
  counter--;
  current.innerHTML = counter;
});

document.querySelector('#reset').addEventListener('click', function () {
  counter = 0;
  current.innerText = counter;
});

// let h2var = document.getElementById("change");
// h2var.innerText = "Cosmin";
