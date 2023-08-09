const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const { getAllProducts, getproductById } = require('../controllers/productsController')

router.use(bodyParser.json())
router.get('/products', getAllProducts)
router.get('/product/:id', getproductById)



module.exports = router