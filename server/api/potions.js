const router = require('express').Router();
const { models: { Potion }} = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const potions = await Potion.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(potions)
    } catch (err) {
        next(err);
    }
})

router.get('/:potionId', async (req, res, next) => {
    try {
      const potion = await Armor.findByPk(req.params.potionId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(potion)
    } catch (err) {
      next(err)
    }
  })