const router = require('express').Router()
const { models: { Product }} = require('../db')

router.get("/:productId", async (req, res, next) => {
  try {
    const product= await Product.findByPk(req.params.productId,{
      attributes: ['name', 'imageUrl', 'description', 'price']
    })
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// router.get("/:productId", async (req, res, next) => {
//   try {
//     const id = req.params.productId;
//     const product = await Product.findOne({
//       where: { id: id },
//       include: { model: Product },
//     });
//     res.json(product);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router
