const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const { getAllProducts } = require('../controllers/productsController')

router.use(bodyParser.json())
router.get('/products', getAllProducts)


module.exports = router