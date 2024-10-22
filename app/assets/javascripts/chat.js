const socket = io();

const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('m');
const messages = document.getElementById('messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (messageInput.value) {
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});