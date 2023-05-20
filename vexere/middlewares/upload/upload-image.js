const { mkdirp } = require('mkdirp');
const multer = require('multer');

const uploadImage = (type) => {
  // return value is the first directory created
  const made = mkdirp.sync(`./public/images/${type}`)
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`) // setup chỗ cần lưu file
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
  return upload.single(type)
}

module.exports = uploadImage