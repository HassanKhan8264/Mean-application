const multer = require('../multer');


const uploadSingle = multer.uploadSingle; // Assuming 'uploadSingle' is exported from 'multer.js'

function uploadImg(req, res) {
  // Access the uploaded file through req.file
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // You can do further processing here, such as saving the file details to a database

  return res.status(200).json({ message: 'File uploaded successfully.' });
}

module.exports = {
  uploadImg,
};
