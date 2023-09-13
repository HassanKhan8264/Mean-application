const multer = require('multer');

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

// Create a Multer instance with the storage configuration for single file upload
const uploadSingle = multer({ storage: storage }).single('image');

// Create a Multer instance with the storage configuration for multiple files upload
const uploadMultiple = multer({ storage: storage }).array('images', 5); // 'images' is the field name for multiple files, 5 is the max number of files allowed

module.exports = {
  uploadSingle,
  uploadMultiple,
};
