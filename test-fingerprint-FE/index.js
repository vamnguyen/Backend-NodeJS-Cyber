axios({
  method: 'GET',
  url: 'http://localhost:3000/api/v1/test-fingerprint'
})
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  });