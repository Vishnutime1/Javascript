# Project about DOM

## Project statments
 [Link](https://stackblitz.com/edit/dom-project-chaiaurcode)

# Solution Code

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## Project 2 solution
(BMI Calculator)
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const message = document.querySelector('#message');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give correct height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTM = `Please give correct weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>`;
    console.log(bmi);
    if (bmi < 18.6) {
      message.innerHTML = ` You are under weight`;
    }
  }
});
```
