// Get references to the Input and Output elements
const inputElement = document.querySelector('.bg-dark.text-light textarea');
const outputElement = document.querySelector('.bg-light.text-dark div');

// Listen for changes to the inputElement
inputElement.addEventListener('input', (event) => {
  // Update the text in the outputElement with the new input value
  outputElement.innerText = event.target.value;
});
