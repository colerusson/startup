const messageInput = document.getElementById("message");
const chatMessages = document.querySelector(".chat-messages");

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() === "") {
    return;
  }
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  messageInput.value = "";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

const sendButton = document.querySelector(".chat-input button");
sendButton.addEventListener("click", sendMessage);
