const router = require('express').Router();
const { Armor } = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const armors = await Armor.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(armors)
    } catch (err) {
        next(err);
    }
})

router.get('/:armorId', async (req, res, next) => {
    try {
      const armor = await Armor.findByPk(req.params.armorId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(armor)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;