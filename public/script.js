const socket = io();

function sendMessage(){
    const input = document.getElementById('input').value;
    if( input.trim() !== " "){

    socket.emit('chat message',input);
    document.getElementById('input').value = "";
    }
}

socket.on('chat message',(msg)=>{
    const ul = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = msg;
    ul.appendChild(li);
});