const router = require('express').Router();
const { models: { Armor }} = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(products)
    } catch (err) {
        next(err);
    }
})

router.get('/:productId', async (req, res, next) => {
    try {
      const product = await Armor.findByPk(req.params.productId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(product)
    } catch (err) {
      next(err)
    }
  })