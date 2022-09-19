// https://www.omnicalculator.com/health/body-frame-size

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bodyframesizeindexRadio = document.getElementById('bodyframesizeindexRadio');
const heightRadio = document.getElementById('heightRadio');
const wristcircumferenceRadio = document.getElementById('wristcircumferenceRadio');

let bodyframesizeindex;
let height = v1;
let wristcircumference = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bodyframesizeindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Height';
  variable2.textContent = 'Wrist circumference';
  height = v1;
  wristcircumference = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Body frame size index';
  variable2.textContent = 'Wrist circumference';
  bodyframesizeindex = v1;
  wristcircumference = v2;
  result.textContent = '';
});

wristcircumferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Body frame size index';
  variable2.textContent = 'Height';
  bodyframesizeindex = v1;
  height = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bodyframesizeindexRadio.checked)
    result.textContent = `Body frame size index = ${computebodyframesizeindex().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;

  else if(wristcircumferenceRadio.checked)
    result.textContent = `Wrist circumference = ${computewristcircumference().toFixed(2)}`;
})

// calculation

function computebodyframesizeindex() {
  return (Number(height.value) / Number(wristcircumference.value)) * 100;
}

function computeheight() {
  return (Number(bodyframesizeindex.value) / 100) * Number(wristcircumference.value);
}

function computewristcircumference() {
  return Number(height.value) / (Number(bodyframesizeindex.value) / 100);
}