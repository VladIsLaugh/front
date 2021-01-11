const socket = io('https://mysterious-plains-87821.herokuapp.com/');
socket.connect();

socket.on('init', function(data){
  handleInit(data)
});
socket.on('add mess', function (data) {
    handleCreateEl(data);
  });

document.getElementById('btn').addEventListener('click', setValue);


function setValue() {
  const code = document.getElementById('input').value;
  socket.emit('send mess', code);

  document.getElementById('input').value = '';
  console.log(code);
}
    
var newDiv = document.createElement('div');
document.body.appendChild(newDiv);
function handleCreateEl(values) {
  newDiv.innerHTML = ''

  values.forEach(val => {
      newDiv.innerHTML += `<p>${val}</p>`;
  });


}

function handleInit(values) {
  console.log(values);
  values.forEach(val => {
    newDiv.innerHTML += `<p>${val}</p>`;
})
}
