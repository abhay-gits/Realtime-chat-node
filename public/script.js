const socket = io();

function sendMessage(){
    const input = document.getElementById('input').value;
    if( input.trim() !== " "){

    socket.emit('chat message',input);
    document.getElementById('input').value = "";
    }
}

socket.on('chat message',(message)=>{
        appendMessage(message);
})

function appendMessage(message){

    //
    const ul = document.getElementById('messages');
    const li = document.createElement('li');
    //
    const timestampspan = document.createElement('span');
    timestampspan.className = 'timestamp';
    timestampspan.textContent = `[${message.timestamp}]`;

    const tmessage = document.createTextNode(message.text);
    //
    li.appendChild(tmessage);
    li.appendChild(timestampspan);
    
    ul.appendChild(li);
}