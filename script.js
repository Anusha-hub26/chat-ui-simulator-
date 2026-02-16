const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");

function sendMessage() {
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "sent");
  input.value = "";

  setTimeout(() => {
    autoReply(message);
  }, 800);
}

function addMessage(text, type) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);

  const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  msgDiv.innerHTML = `
    ${text}
    <div class="time">${time}</div>
  `;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function autoReply(userMessage) {
  let reply = "I received your message! 😊";

  if (userMessage.toLowerCase().includes("hello")) {
    reply = "Hello there! 👋";
  } else if (userMessage.toLowerCase().includes("how are you")) {
    reply = "I'm just a simulator, but I'm great! 😄";
  }

  addMessage(reply, "received");
}

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
