<script>
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message");

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      const newMessage = document.createElement("div");
      newMessage.innerText = message;
      chatMessages.appendChild(newMessage);
      messageInput.value = "";
      messageInput.focus();
    }
  }
</script>