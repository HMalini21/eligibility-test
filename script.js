let app = document.querySelector('#app');
let checkBtn = document.querySelector('#enterBtn');
let clearBtn = document.querySelector('#clearBtn');
let age = document.querySelector('#age');
let ansState = document.querySelector('#statement');

function heading() {
  let h1 = document.createElement('h1');
  h1.innerText = 'Eligibility Test';
  app.appendChild(h1);
}

function printResult(text) {
  ansState.innerHTML = '<h3>' + text + '</h3>';
}

function checkAge(age) {
  if (!age) {
    printResult('Enter a value');
    ansState.style.color = 'grey';
  } else if (age >= 18 && age <= 100) {
    printResult('You are Eligible');
    ansState.style.color = 'green';
  } else {
    printResult('you NOT are eligible');
    ansState.style.color = 'red';
  }
}
checkBtn.addEventListener('click', function () {
  let userAge = age.value;
  checkAge(userAge);
});

clearBtn.addEventListener('click', function () {
  age.value = '';
  printResult('');
  //   ansState.innerText = '';
});

heading();
