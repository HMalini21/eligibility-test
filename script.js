let app = document.querySelector('#app');
let checkBtn = document.querySelector('#enterBtn');
let clearBtn = document.querySelector('#clearBtn');
let age = document.querySelector('#age');
let ansState = document.querySelector('#statement');

let h1 = document.createElement('h1');
h1.innerText = 'Eligibility Test';
app.appendChild(h1);

checkBtn.addEventListener('click', function () {
  let userAge = age.value;
  if (!userAge) {
    ansState.innerText = 'Enter a input';
    ansState.style.color = 'grey';
  } else if (userAge >= 18 && userAge <= 100) {
    ansState.innerText = 'You are Eligible ';
    ansState.style.color = 'green';
  } else {
    ansState.innerText = 'you NOT are eligible';
    ansState.style.color = 'red';
  }
});

clearBtn.addEventListener('click', function () {
  age.value = '';
  ansState.innerText = '';
});
