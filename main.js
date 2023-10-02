const body = document.body;
const setBtnRed = document.querySelector('.btnRed');
const setBtnGreen = document.querySelector('.btnGreen');
const setBtnBlue = document.querySelector('.btnBlue');

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
