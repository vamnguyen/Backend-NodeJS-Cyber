const multer = require('multer');

const uploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/avatars') // setup chỗ cần lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname) // đặt lại tên cho file
    }
  })

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = ['.png', '.jpg']
      const extension = file.originalname.slice(-4)
      const checkFile = extensionImageList.includes(extension)
      if (checkFile) {
        cb(null, true)
      } else {
        cb(new Error('File invalid!'))
      }
    }
  })
  return upload.single('avatar')
}

module.exports = uploadImage