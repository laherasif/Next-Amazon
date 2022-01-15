const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "Images");
  },
  filename: function (req, file, next) {
      next(null, file.originalname)
  },
});

const upload = multer({
  storage: multerStorage,
  // fileFilter: multerFilter,
});

// const storage = multer.diskStorage({
//     destination: function (req, file, next) {
//       next(null, 'Images')
//     },
//     filename: function (req, file, next) {
//       next(null, file.originalname)
//     },
//   })
  
//   const fileFilter = (req, file, next) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  
//       next(null, true)
//     }
//     else {
//       next(null, false)
//     }
//   }
  
//   const Upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
//   })

  module.exports = upload;

  

 
  