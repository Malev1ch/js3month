const body = document.body;
const setBtnRed = document.getElementsByClassName('btnRed')[0];
const setBtnGreen = document.getElementsByClassName('btnGreen')[0];
const setBtnBlue = document.getElementsByClassName('btnBlue')[0];

let currentColor = '';

setBtnRed.addEventListener('click', () => {
  if (currentColor === 'red') {
    body.style.backgroundColor = '';
    currentColor = '';
  } else {
    body.style.backgroundColor = 'red';
    currentColor = 'red';
  }
});

setBtnGreen.addEventListener('click', () => {
  if (currentColor === 'green') {
    body.style.backgroundColor = '';
    currentColor = '';
  } else {
    body.style.backgroundColor = 'green';
    currentColor = 'green';
  }
});

setBtnBlue.addEventListener('click', () => {
  if (currentColor === 'blue') {
    body.style.backgroundColor = '';
    currentColor = '';
  } else {
    body.style.backgroundColor = 'blue';
    currentColor = 'blue';
  }
});