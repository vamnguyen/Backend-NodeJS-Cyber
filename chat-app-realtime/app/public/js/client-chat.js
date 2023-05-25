// Ask server connect to client
const socket = io()

document.getElementById('form-messages').addEventListener('submit', (e) => {
  e.preventDefault()
  const messageText = document.getElementById('input-messages').value
  const acknowledgements = (error) => {
    if (error) {
      return alert(error)
    }
    console.log('You sended message successfully!')
  }
  // transmit events from client to server
  socket.emit('send message', messageText, acknowledgements)
})

// receive event from server to client
socket.on('send message from server to client', (messageText) => {
  console.log('Message: ', messageText)
})

// share location
document.getElementById('btn-share-location').addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('This Browser not support find position')
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords
    socket.emit('share location from client to server', { latitude, longitude })
  })
})
socket.on('share location from server to client', (linkLocation) => {
  console.log('Location: ', linkLocation)
})

// handle query string
const queryString = location.search
const params = Qs.parse(queryString, {
  ignoreQueryPrefix: true,
})
const { room, username } = params
socket.emit('joinRoomToServer', { room, username })

// handle user list
socket.on('sendUserListToClient', (userList) => {
  console.log('User List: ', userList)
})