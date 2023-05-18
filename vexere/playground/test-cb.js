function callBackFunction(error, value) {
  if (error) {
    console.log(error)
    return new Error(error)
  }
  // handle value
  console.log(value)
  return value
}
callBackFunction(null, './public')