const router = require('express').Router();
const { Weapon } = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const weapons = await Weapon.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(weapons)
    } catch (err) {
        next(err);
    }
})

router.get('/:weaponId', async (req, res, next) => {
    try {
      const weapon = await Armor.findByPk(req.params.weaponId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(weapon)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;