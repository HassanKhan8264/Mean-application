const { query, pool1 } = require('../db')




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

async function getProductById(req, res) {
  try {
    let id = req.params.id;
    let sql = 'SELECT * FROM product WHERE id = ?';
    let product = await query(pool1, sql, [id]);

    if (product.length > 0) { // Fix the typo: "length" instead of "lenght"
      res.send({
        message: 'product found',
        data: product,
      });
    } else {
      console.log('product not found');
      res.status(404).json({ error: 'product not found' }); // Use "error" instead of "err" for consistency
    }

  } catch (err) {
    console.log('Something went wrong');
    res.status(500).json({ error: 'Internal server error' }); // Set the proper status code for the error response
  }
}

// async function updateProductById(req,res){
//   try{
//     let id = req.params.id
//     const { }



//   }catch(err){
//     res.status(500).json({err:"Internal serve error"})
//   }


// }

module.exports = {

  getAllProducts,
  getProductById
}
