const { query, pool1} = require('../db')

async function getAllProducts(req, res) {
    try {
      let sql = 'SELECT * FROM product'
      let products = await query(pool1, sql)
  
      if (products.length > 0) {
        res.send({
          message: 'all product',
          data: products
        })
   
      } else {
        res.status(400).json({ error: 'something went wrong' })
      }
    } catch (err) {
      console.log('something went wrong');
      res.status(500).json({ err: 'internal server error' })
    }
  }
  module.exports = {
    getAllProducts
}