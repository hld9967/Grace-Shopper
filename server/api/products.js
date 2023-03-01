const router = require('express').Router()
const { Product } = require('../db')

// GET /api/allProducts
router.get('/', async (req, res, next) => {
    try {
        const product = await Product.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(product)
    } catch (err) {
        next(err);
    }
})

// GET /api/allProducts/:productId
router.get('/allProducts', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId, {
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

//PUT UPDATE /api/allProducts/:productId 
router.put('/allProducts/:productId', async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedProduct = req.body;
      await allProducts.update(updatedProduct, { where: { id: productId } });
      const product = await allProducts.findByPk(productId);
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// POST /api/allProducts
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Product.create(req.body));
    } catch (error) {
        next(error);
    }
});



//delete /api/allProducts '/allProducts/:ProductId'
router.delete('/allProducts/:ProductId', async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.ProductId);
      await product.destroy();
      res.send(product);
    } catch (error) {
      next(error);
    }
  });