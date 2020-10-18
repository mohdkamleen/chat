const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?') 
  while(name == ""){ 
    name = prompt('please enter your name?')
  }  
appendMessage(`<p style="text-align:center; color:#539dfe; font-size:25px;"> Welcom <span style="font-size:30px; text-transform:uppercase; color:#536dfe"> ${name} </span> </p> `)
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`<p class="left-message"><span> ${data.name}: </span> <br> ${data.message}<br> <code  id="time"></code> </p>`)
})

socket.on('user-connected', name => {
  appendMessage(`<p style="text-align:center; color:green;">${name} connected </p>`)
})

socket.on('user-disconnected', name => {
  appendMessage(`<p style="text-align:center; color:red;">${name} disconnected </p>`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  if(message == ""){
    return;
  } else {
    socket.emit('send-chat-message', message) 
    appendMessage(`<p class="right-message"> ${message}<br> <code id="time"></code> </p>`) 
  }
  messageInput.value = '' 
})

function appendMessage(message) {
  const messageElement = document.createElement('div') 
  messageElement.innerHTML = message
  console.log(message)
  messageContainer.append(messageElement)
}

///////////////// mousemove code  ///////////////
window.onmousemove  = () => {
  var a = document.createElement("p");
  a.setAttribute("id", "mousemove");
  document.body.appendChild(a);
  a.style.left = event.clientX + 'px';
  a.style.top = event.clientY + 'px';
  var col = ["yellow","green","blue","red","pink","cyan","black","gray","#536dfe"];
  var mcol = col[Math.floor(Math.random()*col.length)];
  a.style.transition = "all 1s linear";
  a.style.left = a.offsetLeft - 20 + "px";
 a.style.top = a.offsetTop - 20 + "px";
 a.style.height = "50px";
 a.style.width = "50px";
 a.style.borderWidth = "2px"; 
 a.style.opacity = 0;
 a.style.borderColor = mcol;
}
