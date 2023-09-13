const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

const { uploadImg } = require('../controllers/imageController')


router.use(bodyParser.json());
router.post('/uploadImg', uploadImg);


module.exports = router
