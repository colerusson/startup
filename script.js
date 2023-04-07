// Get references to the Input and Output elements
const inputElement = document.querySelector('.bg-dark.text-light textarea');
const outputElement = document.querySelector('.bg-light.text-dark div');

// Listen for changes to the inputElement
inputElement.addEventListener('input', (event) => {
  // Update the text in the outputElement with the new input value
  outputElement.innerText = event.target.value;
});

// get the DOM elements
const inputBox = document.querySelector('.input-box textarea');
const outputBox = document.querySelector('.output-box');
const nameInput = document.querySelector('#name');
const loginForm = document.querySelector('#login-form');
const chatForm = document.querySelector('#chat-form');

// create a WebSocket object
const socket = new WebSocket('ws://localhost:8080');

// define a function to handle incoming messages
function handleMessage(event) {
  const message = JSON.parse(event.data);
  outputBox.innerHTML += `<p><strong>${message.name}:</strong> ${message.text}</p>`;
}

// define a function to send a message to the server
function sendMessage() {
  const name = nameInput.value.trim();
  const text = inputBox.value.trim();
  if (!name || !text) return;
  const message = { name, text };
  socket.send(JSON.stringify(message));
  inputBox.value = '';
}

// add event listeners to the login form and chat form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) return;
  loginForm.style.display = 'none';
  chatForm.style.display = 'block';
});

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage();
});

// add event listener to handle incoming messages
socket.addEventListener('message', handleMessage);
