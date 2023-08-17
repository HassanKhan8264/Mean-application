const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const { getAllProducts, getProductById, addProduct ,upload} = require('../controllers/productsController')

router.use(bodyParser.json())
router.post('/addProduct', upload.single('image'), addProduct);
router.get('/products', getAllProducts)
router.get('/product/:id', getProductById)



module.exports = router
