const router = require('express').Router();
const { models: { Spell }} = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const spells = await Spell.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(spells)
    } catch (err) {
        next(err);
    }
})

router.get('/:spellId', async (req, res, next) => {
    try {
      const spell = await Armor.findByPk(req.params.spellId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(spell)
    } catch (err) {
      next(err)
    }
  })