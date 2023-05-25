// Ask server connect to client
const socket = io()

// Chat
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
socket.on('send message from server to client', (message) => {
  console.log('Message: ', message) // output is object
  // display message on the screen
  const beforeContent = document.getElementById('app__messages').innerHTML
  const messageElement = `
  <div class="message-item">
    <div class="message__row1">
      <p class="message__name">${message.username}</p>
      <p class="message__date">${message.createAt}</p>
    </div>
    <div class="message__row2">
      <p class="message__content">
        ${message.messageText}
      </p>
    </div>
  </div>`
  document.getElementById('app__messages').innerHTML = beforeContent + messageElement

  // clear input message after sended
  document.getElementById('input-messages').value = ''
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
socket.on('share location from server to client', (data) => {
  // display message on the screen
  const beforeContent = document.getElementById('app__messages').innerHTML
  const messageElement = `
  <div class="message-item">
    <div class="message__row1">
      <p class="message__name">${data.username}</p>
      <p class="message__date">${data.createAt}</p>
    </div>
    <div class="message__row2">
      <p class="message__content">
        <a href="${data.messageText}" target="_blank">Location of ${data.username}</a>
      </p>
    </div>
  </div>`
  document.getElementById('app__messages').innerHTML = beforeContent + messageElement
})

// handle query string
const queryString = location.search
const params = Qs.parse(queryString, {
  ignoreQueryPrefix: true,
})
const { room, username } = params
socket.emit('joinRoomToServer', { room, username })

// display name room on screen
document.getElementById('app__title').innerHTML = room

// handle user list
socket.on('sendUserListToClient', (userList) => {
  let contentHtml = ''
  userList.map((user) => {
    contentHtml += `<li class="app__item-user">${user.username}</li>`
  })

  document.getElementById('app__list-user--content').innerHTML = contentHtml
})