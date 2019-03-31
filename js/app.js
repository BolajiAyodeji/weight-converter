const input = document.getElementById('lbsInput');
const output = document.getElementById('output');

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
  let lbs = e.target.value;

  output.style.visibility = 'visible';

  let grams = document.getElementById('gOutput');
  grams.innerHTML = lbs/0.0022046;

  let kiloGrams = document.getElementById('kgOutput');
  kiloGrams.innerHTML = lbs/2.2046;

  let ounces = document.getElementById('ozOutput');
  ounces.innerHTML = lbs*16;
});
